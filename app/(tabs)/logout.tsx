import { View, Text, Button, Alert} from "react-native";
import React, { useState,useEffect } from "react";
import { useRouter } from "expo-router";
import { logoutUser } from "@/src/api"; // Import logout API
import AsyncStorage from "@react-native-async-storage/async-storage";
import MyButton from "@/components/navigations/MyButton";

const HomeScreen = () => {
  const [email, setEmail] = useState(""); // Store user email from login
  const router = useRouter();

  useEffect(() => {
    const getEmail = async () => {
      const storedEmail = await AsyncStorage.getItem("userEmail");
      console.log("Email from asynic Storage",storedEmail);
      if (storedEmail) setEmail(storedEmail);
    };
    getEmail();
  }, []);

  const handleLogout = async () => {
    const message = await logoutUser(email); // Always returns a string
  
    if (message.includes("Logout successful")) { // ✅ Check message content
      Alert.alert("Logout Successful", message);
      router.push("/login"); // Redirect user to Login page
    } else {
      Alert.alert("Logout Failed", message); // ✅ Always a string now
    }
  };
  

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{fontSize:24}}>Click the "Logout" button.</Text>
      {/* Updated Buttons */}
      <MyButton title={"Logout"} onPress={handleLogout} />
    </View>
  );
};

export default HomeScreen;