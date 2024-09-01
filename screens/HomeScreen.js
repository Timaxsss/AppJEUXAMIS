import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <ImageBackground source={require('../assets/background.jpg')} style={styles.container}>
      <Text style={styles.title}>PH 18H</Text>
      <TouchableOpacity style={[styles.button, styles.normalMode]} onPress={() => navigation.navigate('NormalMode', { screen: 'NormalMode' })}>
        <Text style={styles.buttonText}>Normal</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.hotMode]} onPress={() => navigation.navigate('HotMode', { screen: 'HotMode' })}>
        <Text style={styles.buttonText}>J'ai déjà</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.randomMode]} onPress={() => navigation.navigate('RandomMode')}>
        <Text style={styles.buttonText}>Aléatoire</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#ff6347',
    marginBottom: 20,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    paddingVertical: 15,
    borderRadius: 25,
    marginVertical: 10,
    elevation: 3,
  },
  normalMode: {
    backgroundColor: '#ff6347',
  },
  hotMode: {
    backgroundColor: '#ff4500',
  },
  randomMode: {
    backgroundColor: '#ff7f50',
  },
  buttonText: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
});
