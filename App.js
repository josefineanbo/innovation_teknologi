import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TitleComponent from "./components/TitleComponent";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Det er sejt at det virker</Text>
      <StatusBar style="auto" />


      <TitleComponent title = 'Første title'/>
      <TitleComponent title = 'Anden title'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  component:{
    paddingTop:10
  }
});
