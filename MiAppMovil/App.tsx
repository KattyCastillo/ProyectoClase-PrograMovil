import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CustomInput from './src/components/CustomInput';
import { useState } from 'react';

export default function App() {
const [inputText, setInputText] = useState(""); // Estado para almacenar el valor del input en React Native
   
  return (
    <View style={styles.container}>
      <CustomInput 
      type={"number"} 
      placeholder={"Ingresa tu número de teléfono"} 
      value={inputText} 
      onChange={setInputText}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
