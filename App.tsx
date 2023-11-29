import React from 'react';
import {Text, View} from 'react-native';

const App = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'grey',
      }}>
      <Text style={{fontSize: 30, color: 'black'}}>
        Prueba Github Actions / CI
      </Text>
    </View>
  );
};

export default App;
