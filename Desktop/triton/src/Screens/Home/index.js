import { CurrentRenderContext } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { TextInput, StyleSheet, Text, View, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-web';

export default function Home() {
  return(
    <View style = {estilos.Fundo}>
      <text style = {estilos.Texto}>DRAC</text>
      <TextInput style = {estilos.CaixaTexto} placeholder='Coloque seu nome'/>
      <TextInput style = {estilos.CaixaTexto} placeholder='Coloque sua senha' />
      <TouchableOpacity>
        ENTRAR
      </TouchableOpacity>
      <Button title= 'ENTRAR'/>
    </View>
  )
}

const estilos = StyleSheet.create({
  Texto:{
    fontSize: 10,
    color: '#f3f3f3',
    marginBottom: 10,
    marginTop: 100
  },
  CaixaTexto:{
    backgroundColor: '#296d98',
    padding: 5,
    margin: 7,
    borderRadius: 14,
  },
  Botao:{

  },
  Fundo:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    margin: 5,
    backgroundColor: '#0e2433',
  },
})