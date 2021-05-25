/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  Button,
  Text,
  useColorScheme,
  View
} from 'react-native';

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';

const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';
  let [count, setCount] = useState(0);
  let [theDate, setDate] = useState(d);
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  var text = "";
  var d = new Date().toUTCString();
  function onPressHora() {
    d = new Date().toUTCString();
  }

  useEffect(() => {
    setInterval(() => {
      setCount(count+1);
    }, 100)
  });
  // Hook para actualizar propiedad
  // El primero es el state actual. El segundo es la accion para actualizar el state

  return (
    <SafeAreaView style={backgroundStyle}>
      <Text
      text={theDate}>{theDate}</Text>
      <Button 
      onPress={() => {onPressHora();setDate(d);}}
      title="presionar aqui"/>

      <Text>{count}</Text>
      
    </SafeAreaView>
    
  );
};


export default App;
