import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { useLogin } from '../hooks/use-login';

function CurrentScreen({ navigation }) {
  const { signIn } = useLogin();
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Text>Login</Text>
      <View style={{ padding: 20 }}>
        <Button
          title="Login"
          onPress={() => signIn('dummy')}
        ></Button>
      </View>
    </View>
  );
}

export default CurrentScreen;
