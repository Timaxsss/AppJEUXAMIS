import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import NormalMode from './screens/NormalMode'; // Importer NormalMode
import HotMode from './screens/HotMode'; // Importer HotMode
import { TouchableOpacity, Text, View } from 'react-native';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Accueil" component={HomeScreen} />
        <Stack.Screen 
          name="NormalMode" 
          component={NormalMode} 
          options={({ navigation }) => ({
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginLeft: 15 }}>
                <Text style={{ color: 'orange', fontSize: 30 }}>←</Text>
              </TouchableOpacity>
            ),
            headerTitle: '',
          })}
        />
        <Stack.Screen 
          name="HotMode" 
          component={HotMode} 
          options={({ navigation }) => ({
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginLeft: 15 }}>
                <Text style={{ color: 'orange', fontSize: 30 }}>←</Text>
              </TouchableOpacity>
            ),
            headerTitle: '',
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
