import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TouchableHighlight } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light"/>
      <Image source={ { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCUX5Row2QfumC7m_1dDV0zsjMPHhkkVPfYg&s'} } style={styles.imagenPrueba}/>
      <Text style={styles.texto}>Hola desde Primero!</Text>
      <Button title='Pulsa' onPress={ () => alert('Hola desde Button!')}/>
      <TouchableHighlight style={styles.touchableHighlight} underlayColor={'gray'} onPress={() => alert('Hola desde TouchableHighlight!')}>
        <Text>Botón TouchableHighlight</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    color: 'white',
  },
  imagenPrueba: {
    width: 100, 
    height: 70, 
    resizeMode: 'contain',
    marginBottom: 10,
  },
  touchableHighlight: {
    width: 200,
    height: 50,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
  }
});
