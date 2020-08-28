import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { useLogin } from '../hooks/use-login';

function CurrentScreen({ navigation }) {
  const { signOut } = useLogin();
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Text>Home</Text>
      <View style={{ padding: 20 }}>
        <Button
          title="Logout"
          onPress={() => signOut()}
        ></Button>
      </View>
    </View>
  );
}

export default CurrentScreen;
