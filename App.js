import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';

export default function App() {
  const [age, setAge] = useState('');
  const [lowerLimit, setLowerLimit] = useState(0);
  const [higherLimit, setHigherLimit] = useState(0);

  function calculate() {
    const ageInput = age.replace(',', '.');

      const lowerResult = (220 - ageInput) * 0.65;
      const higherResult = (220 - ageInput) * 0.85;

      setLowerLimit(lowerResult);
      setHigherLimit(higherResult);
    
  }

  return (
    <View style={styles.container}>
      <Text style={styles.field}>Age</Text>
      <TextInput
        style={styles.input}
        value={age}
        onChangeText={text => setAge(text)}
        keyboardType='decimal-pad'
      />
      <Text style={styles.field}>Limits</Text>
      <Text style={styles.field1}>{lowerLimit.toFixed(2)} - {higherLimit.toFixed(2)}</Text>
      <Button onPress={calculate} title="Calculate" color="#FF69B4"></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },

  field: {
    marginBottom: 10,
    color: 'pink',
    fontWeight: 'bold',
  },

  field1: {
    marginBottom: 10,
    color: 'pink',
  
  },
  input: {
    height: 40,
    borderColor: 'pink',
    borderWidth: 1,
    marginBottom: 10,
    color: 'pink',
    paddingHorizontal: 10,
    borderRadius: 50,
  },

});
