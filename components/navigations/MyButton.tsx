import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

const MyButton = ({ title, onPress }) => {
  return (
    <View>
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.button}
        onPress={onPress}
      >
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MyButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#4CAF50",
    paddingVertical: 15,
    paddingHorizontal: 40, // Added to make the button wider
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
    width: 250, // Fixed width for a larger button
    alignSelf: "center", // Centers button in parent
  },
  text: {
    fontSize: 18, // Slightly larger text for better visibility
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});
