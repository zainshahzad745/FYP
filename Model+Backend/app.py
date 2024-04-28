from flask import Flask, request, jsonify
from flask_cors import CORS
import subprocess
import json
import os
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import Column, Integer, String
import logging
from logging.handlers import RotatingFileHandler
import pyodbc


app = Flask(__name__)
CORS(app)  # Enable CORS for all routes in the app

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///plants.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True
db = SQLAlchemy(app)


# Set up logging
handler = RotatingFileHandler('server.log', maxBytes=100000, backupCount=1)
handler.setLevel(logging.INFO)
app.logger.addHandler(handler)

#DB Setup

SERVER = 'SERVER=DESKTOP-OPOCNHB\SQLEXPRESS'
DATABASE = 'Upload'
USERNAME = 'zain'
PASSWORD = '12345678'

connectionString = f'DRIVER={{ODBC Driver 18 for SQL Server}};SERVER={SERVER};DATABASE={DATABASE};UID={USERNAME};PWD={PASSWORD}'

class Plant(db.Model):
    id = Column(Integer, primary_key=True)
    plant_name = Column(String(500), nullable=False)
    disease_type = Column(String(500), nullable=False)
    image_path = Column(String(500), nullable=True)
    
@app.route('/save_plant_record', methods=['POST'])

def test(a):
    conn = pyodbc.connect(a)
    print(conn)
    
# Add a console handler for terminal output
console_handler = logging.StreamHandler()
console_handler.setLevel(logging.INFO)
app.logger.addHandler(console_handler)

@app.route('/detect', methods=['POST'])
def detect():
    try:
        # Check if the request contains a file named 'image'
        if 'image' not in request.files:
            return jsonify({'error': 'No file part'})

        image_file = request.files['image']

        # Check if the file has a valid filename
        if image_file.filename == '':
            return jsonify({'error': 'No selected file'})

        result = run_yolov5_inference(image_file)
        return result
    except Exception as e:
        return jsonify({'error': str(e)})

def run_yolov5_inference(image_file):
    try:
        # Save the uploaded image file to a temporary location
        image_path = 'temp_image.jpg'
        image_file.save(image_path)

        # Run YOLOv5 inferencer
        command = ["python", "detect.py", "--weights", "best.pt", "--img", "640", "480", "--conf", "0.25", "--source", image_path]
        print(command)


        # Log the command being executed
        print(f"Executing command: {' '.join(command)}")

        result = subprocess.run(command, capture_output=True, text=True)
        print(result)
        # Log the output of the script
        app.logger.info(f"Script output: {result.stdout}")
        print(f"Script output: {result.stdout}")

        # Attempt to parse the result as JSON
        try:
            if result.stdout.strip():  # Check if the string is not empty
                json_result = json.loads(result.stdout)
            else:
                raise json.JSONDecodeError('Empty string', '', 0)
        except json.JSONDecodeError as decode_error:
            # If parsing fails, return an error response
            app.logger.error(f"JSON decoding error: {str(decode_error)}")
            return jsonify({'error': 'Invalid JSON response from the script', 'script_output': result.stdout})

        return jsonify(json_result)
    except Exception as e:
        # Log any exceptions
        app.logger.error(f"Exception in run_yolov5_inference: {str(e)}")
        return jsonify({'error': str(e)})
    finally:
        # Remove the temporary image file
        if image_path and os.path.exists(image_path):
            os.remove(image_path)

if __name__ == '__main__':
    test(connectionString)

    app.run(host='0.0.0.0', port=5000)
