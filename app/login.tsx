import { View,Text, TextInput, Image,ScrollView, TouchableOpacity,StyleSheet,Alert} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import MyButton from "@/components/navigations/MyButton";
import { useRouter } from "expo-router";
import { blue } from "react-native-reanimated/lib/typescript/Colors";
import { loginUser } from "@/src/api";
import AsyncStorage from "@react-native-async-storage/async-storage";



const Login = () => {
  const [email,setEmail]=useState('');
  const[password,setPassword]=useState('');

  const onLogin = async () => {
    const {message,user} = await loginUser(email, password);
  
    if (message.includes("Login successful")) { // ✅ Check message content
      await AsyncStorage.setItem("userEmail", user.email); // ✅ Store email
      Alert.alert("Login Success", message);
      router.push("/(tabs)"); // ✅ Corrected navigation method
    } else {
      Alert.alert("Login Failed", message); // Always a string now
    }
  };

  const router = useRouter();
  const onRegister = () => {
    router.navigate("/signup");
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Image
        source={require("@/assets/images/login.jpg")}
        style={{
          width: "100 %",
          height: 400,
        }}
        resizeMode="cover"
      />

      <View style={{ padding: 20, gap: 20 }}>
        <TextInput
          placeholder="Enter Your Email"
          value={email}
          style={{
            borderWidth: 1,
            height: 50,
            paddingHorizontal: 20,
            borderRadius: 10,
          }}
          onChangeText={(text) => setEmail(text)}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <TextInput
          placeholder="Enter Your Password"
          value={password}
          style={{
            borderWidth: 1,
            height: 50,
            paddingHorizontal: 20,
            borderRadius: 10,
          }}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true} // Hide password characters
        />
        <MyButton title={"Login"} onPress={onLogin} />
        <View style={{flexDirection:'row'}}>
          <Text>Don't have an account?</Text>
          <TouchableOpacity onPress={onRegister}>
            <Text style={{color:'blue', fontWeight:"bold"}}>Register</Text>
          </TouchableOpacity>        
        </View>
      </View>
    </ScrollView>
  );
};

export default Login;

const style=StyleSheet.create({
  
  input:{
    borderWidth: 1,
            height: 50,
            paddingHorizontal: 20,
            borderRadius: 10,
  },
  Link:{
    color:'blue'
  }
});
