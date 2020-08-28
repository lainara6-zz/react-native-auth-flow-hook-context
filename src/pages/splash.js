import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { useLogin } from '../hooks/use-login';

function CurrentScreen() {
  const { checkSession } = useLogin();

  performCheckingSession = () => {
    checkSession();
  };

  useEffect(() => {
    performCheckingSession();
  }, []);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Loading...</Text>
    </View>
  );
}

export default CurrentScreen;
