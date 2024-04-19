import React, { useState } from 'react';
import RNPickerSelect from 'react-native-picker-select';
import { View, Text} from 'react-native';

const Dropdown = ({onSelect}) => {
    const [selectedOption, setSelectedOption] = useState(null);
    const placeholder = {
      label: 'Select an option...',
      value: null,
    };
    const options = [
      { label: 'Urdu', value: 'ur' },
      { label: 'English', value: 'en' },
      { label: 'Punjabi', value: 'pn' },
      { label: 'Pushto', value: 'ps' },
      { label: 'Sindhi', value: 'sn' },
      { label: 'Balochi', value: 'bl' },
    ];

    const handleValueChange = (value, index) => {
        const adjustedIndex = index; // Adjust index to start from 1
        const selectedLabel = options[adjustedIndex - 1]?.label; // Check if label exists
        setSelectedOption(selectedLabel); // Set selected option label
        onSelect(selectedLabel); // Call onSelect function with the selected label
    };

    return (
      <View style={{backgroundColor: 'white', borderRadius: 10, padding: 10,width: "90%"}}>
        {/* <Text style={{fontSize: 18, paddingRight: 60}}>Select an option</Text> */}
        <RNPickerSelect
          placeholder={placeholder}
          items={options}
          onValueChange={handleValueChange}
          value={selectedOption}
        />
        {selectedOption && <Text>Selected: {selectedOption}</Text>}
      </View>
    );
  };
  export default Dropdown;