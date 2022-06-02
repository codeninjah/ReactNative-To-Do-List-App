import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Item from './components/Item';
import CreateItem from './components/CreateItem';
import List from './components/List';

export default function App() {
  //const [loading, setLoading] = useState(true)

  return (
      <View style={styles.container}>
          <Text>Alexandru was here</Text>
          <Text style={styles.fontTest}>Welcome</Text>
          <StatusBar style="auto" />
          <CreateItem />
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 50,
  },
  fontTest: {
    color: 'red',
    fontSize: 30
  },
});

