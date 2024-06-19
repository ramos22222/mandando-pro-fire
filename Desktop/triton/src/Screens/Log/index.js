import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, {useState, useEffect} from 'react';
import {ref, onValue} from 'firebase/database';
import { db } from '../../../config';


export default function Log() {
  const [todoData, setTodoData] = useState([])
  
  
  useEffect(() => {
    const starCountRef = ref(db)
    onValue( starCountRef, (snapshot)=> {
      const data = snapshot.val()
      const leitura = Object.keys(data).map(key => ({
        id:key,
        ...data[key]
      }))
      console.log(leitura)
      setTodoData(leitura)
    })
  })

  return (
    <View style={styles.container}>
      <Text>Informacoes!</Text>
      {
         todoData.map((item,index)=>{
          return(
            <View key={index}>
              <Text>
                {item.valor}
              </Text>
            </View>
           )}
        )
      }
       
      
    
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccf',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
