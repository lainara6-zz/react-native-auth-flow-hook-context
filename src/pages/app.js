/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useLogin, LoginContextProvider } from '../hooks/use-login';
import SplashScreen from './splash';
import LoginScreen from './login';
import HomeScreen from './home';

const Stack = createStackNavigator();

function Root() {
  const { loginState } = useLogin();
  if (loginState.loading) {
    return <SplashScreen />;
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          {loginState.token ? (
            <Stack.Screen name="Home" component={HomeScreen} />
          ) : (
            <Stack.Screen name="Login" component={LoginScreen} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

function App() {
  return (
    <LoginContextProvider>
      <Root />
    </LoginContextProvider>
  );
}

export default App;
