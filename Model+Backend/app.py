from flask import Flask, request, jsonify
from flask_cors import CORS
import subprocess
import json
import os
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import Column, Integer, String
import logging
from logging.handlers import RotatingFileHandler

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes in the app

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///plants.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True
db = SQLAlchemy(app)


# Set up logging
handler = RotatingFileHandler('server.log', maxBytes=100000, backupCount=1)
handler.setLevel(logging.INFO)
app.logger.addHandler(handler)

class Plant(db.Model):
    id = Column(Integer, primary_key=True)
    plant_name = Column(String(500), nullable=False)
    disease_type = Column(String(500), nullable=False)
    image_path = Column(String(500), nullable=True)
    
@app.route('/save_plant_record', methods=['POST'])
def save_plant_record():
    try:
        if 'image' not in request.files:
            return jsonify({'error': 'No file part'})
        image_file = request.files['image']
        if image_file.filename == '':
            return jsonify({'error': 'No selected file'})
        image_path = 'temp2_image.jpg'
        image_file.save(image_path)

        plant_name = request.form.get('plant_name')
        disease_type = request.form.get('disease_type')

        save_plant_record(plant_name, disease_type, image_path)

        return jsonify({'success': True})
    except Exception as e:
        return jsonify({'error': str(e)})
    finally:
        if image_path and os.path.exists(image_path):
            os.remove(image_path)

def save_plant_record(plant_name, disease_type, image_path):
    try:
        plant = Plant(plant_name=plant_name, disease_type=disease_type, image_path=image_path)
        db.session.add(plant)
        db.session.commit()
    except Exception as e:
        app.logger.error(f"Exception in save_plant_record: {str(e)}")
        db.session.rollback()


    
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
        command = ["python", "Model+Backend/yolov5/detect.py", "--weights", "Model+Backend/yolov5/best.pt", "--img", "640", "480", "--conf", "0.25", "--source", image_path]
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

    app.run(host='0.0.0.0', port=5000)
