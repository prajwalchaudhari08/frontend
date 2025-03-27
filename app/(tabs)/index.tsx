import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const Index = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to the Home Page</Text>
      <Text style={styles.infoText}>To log out, go to the 
      <Text style={styles.highlight}>{" "}Logout</Text>{" "}tab.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center" ,
    padding: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2E86C1',
    marginBottom: 10,
  },
  infoText: {
    fontSize: 18,
    color: '#555',
  },
  highlight: {
    fontWeight: 'bold',
    color: '#E74C3C',
  },
});

export default Index;

