import React, {useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableHighlight, TextInput, Image, ScrollView } from 'react-native';

const batman = {
  uri : 'https://www.citypng.com/public/uploads/preview/batman-white-paint-splash-logo-sign-icon-png-701751694706668a4iepexnss.png',
  width : 100,
  height : 100,
};

export default function App() {

  const [texto, setTexto] = useState('');

  const [color, setColor] = useState('white');

  useEffect( () => {
    const palabraEsperada : boolean = texto.toLowerCase() == 'si' || texto.toLowerCase() == 'no' ? true : false;

    if (palabraEsperada) {
      const palabra : string = texto.toLowerCase() == 'si' ? 'green' : 'red';
      setColor(palabra);
    } else {
      setColor('white');
    }
    
  }, [texto]);

  return (
    <View style={styles.container}>
      <StatusBar style="light"/>
      <Text style={styles.texto}>Hola desde Primero!</Text>

      <Button title='Pulsa' onPress={ () => alert('Hola desde Button!')}/>
      <TouchableHighlight style={styles.touchableHighlight} underlayColor={'gray'} onPress={() => alert('Hola desde TouchableHighlight!')}>
        <Text>Botón TouchableHighlight</Text>
      </TouchableHighlight>

      <TextInput 
        defaultValue={texto}
        placeholder='¿Si o No?'
        onChangeText={ palabra => setTexto(palabra) }
        style={styles.input}
      />
      {texto.length > 0 
        &&
        <Text style={{ fontSize: 100, color: color, textAlign: 'center' }}>
          {texto}
        </Text>
      }
      
      <ScrollView style={{ maxHeight: 200, flexGrow: 0, borderRadius: 10, borderColor: 'white', borderWidth: 3 }}>
        <Image source={batman}/>
        <Image source={batman}/>
        <Image source={batman}/>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  texto: {
    color: 'white',
  },
  touchableHighlight: {
    width: 200,
    height: 50,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
  },
  input: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
