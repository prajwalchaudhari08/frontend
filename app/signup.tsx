import { View, Text, TextInput, Image, ScrollView, Alert } from "react-native";
import React, { useState } from "react";
import MyButton from "@/components/navigations/MyButton";
import { useRouter } from "expo-router";
import { registerUser } from "@/src/api"; // Import API

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const router = useRouter();

  // Function to handle registration
  const handleRegister = async () => {
    if (!username || !email || !password || !confirmPassword) {
      Alert.alert("Error", "All fields are required!");
      return;
    }
  
    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match!");
      return;
    }
  
    const message = await registerUser(username, email, password); // Always returns a string
  
    if (message.includes("User registered successfully")) { // ✅ Check message content
      router.push("/login");
      Alert.alert("Success", message);
    } else {
      Alert.alert("SignUp Failed", message); // ✅ Always a string now
    }
  };
  

  // Navigate to login page
  const onSignUp = () => {
    router.push("/login");
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Image
        source={require("@/assets/images/login.jpg")}
        style={{ width: "100%", height: 400 }}
        resizeMode="cover"
      />
      <View style={{ padding: 20, gap: 20 }}>
        <TextInput
          placeholder="Enter Your User Name"
          style={styles.input}
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          placeholder="Enter Your Email"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          placeholder="Enter Your Password"
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />
        <TextInput
          placeholder="Re-Enter Your Password"
          style={styles.input}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry={true}
        />
        
        {/* Updated Buttons */}
        <MyButton title={"Sign Up"} onPress={handleRegister} />
        <MyButton title={"Back to Login"} onPress={onSignUp} />
      </View>
    </ScrollView>
  );
};

const styles = {
  input: {
    borderWidth: 1,
    height: 50,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
};

export default SignUp;
