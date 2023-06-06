import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const RadioButton = () => {
  const [favLanguage, setFavLanguage] = useState('');
  const [age, setAge] = useState('');

  const handleLanguageSelection = (language) => {
    setFavLanguage(language);
  };

  const handleAgeSelection = (selectedAge) => {
    setAge(selectedAge);
  };

  const handleSubmit = () => {
    // Perform form submission logic here
    console.log('Form submitted');
  };

  return (
    <View style={styles.container}>
      <Text>Select payment method</Text>
      <TouchableOpacity
        style={styles.radioButton}
        onPress={() => handleLanguageSelection('Debit Card')}
      >
        <>
          <Text>Debit Card</Text>
          {favLanguage === 'Debit Card' && <View style={styles.radioDot} />}
        </>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.radioButton}
        onPress={() => handleLanguageSelection('Paypal')}
      >
        <>
          <Text>Paypal</Text>
          {favLanguage === 'Paypal' && <View style={styles.radioDot} />}
        </>
      </TouchableOpacity>
      {/* <TouchableOpacity
        style={styles.radioButton}
        onPress={() => handleLanguageSelection('JavaScript')}
      >
        <>
          <Text>JavaScript</Text>
          {favLanguage === 'JavaScript' && <View style={styles.radioDot} />}
        </>
      </TouchableOpacity> */}

      {/* <Text>Please select your age:</Text>
      <TouchableOpacity
        style={styles.radioButton}
        onPress={() => handleAgeSelection('30')}
      >
        <>
          <Text>0 - 30</Text>
          {age === '30' && <View style={styles.radioDot} />}
        </>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.radioButton}
        onPress={() => handleAgeSelection('60')}
      >
        <>
          <Text>31 - 60</Text>
          {age === '60' && <View style={styles.radioDot} />}
        </>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.radioButton}
        onPress={() => handleAgeSelection('100')}
      >
        <>
          <Text>61 - 100</Text>
          {age === '100' && <View style={styles.radioDot} />}
        </>
      </TouchableOpacity>

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  radioButton: {
    justifyContent:'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    // marginBottom: 8,
    // backgroundColor: "rgba(67, 136, 131, 0.1)" ,
    borderRadius: 20,
    borderWidth:1,
    height:90
},
  radioDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'blue',
    marginLeft: 8,
  },
  submitButton: {
    backgroundColor: 'blue',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 4,
    alignItems: 'center',
    marginTop: 16,
  },
  submitButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default RadioButton;
