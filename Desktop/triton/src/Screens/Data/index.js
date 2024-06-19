import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { db } from '../../../config';
import React, {useState} from 'react';
import {ref,set } from 'firebase/database';

export default function Data() {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const AddDataOn = () => {
    set(ref(db, title),{
      valor:body,
    })
    setBody('')
    setTitle('')
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <TextInput
      placeholder='Valor'
      value={title}
      onChangeText={(text) => setTitle(text)}
      />
      <TextInput
      placeholder='Qual o valor dele'
      value={body}
      onChangeText={(text) => setBody(text)}
      />

      <Button
      title='Enviar'
      onPress={AddDataOn}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccf  ',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
