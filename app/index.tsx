import MyButton from "@/components/navigations/MyButton";
import { useRouter } from "expo-router";
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Swiper from "react-native-swiper";
export default function Index() {
  const router = useRouter();
  const onContinue = () => {
    router.navigate("/login");
  };
  
  return (
    <View style={styles.container}>
      {/* Swiper Section */}
      <View style={{ flex: 1 }}>
        <Swiper loop={false} activeDotColor="#4CAF50">
          {/* First Screen */}
          <View style={styles.slide}>
            <Image
              source={require("@/assets/images/Slide1.jpg")}
              style={styles.image}
            />
            <Text style={styles.title}>Introduction...</Text>
            <Text style={styles.subtitle}>
            Our Simple Login App provides a basic and user-friendly authentication experience
            </Text>
          </View>

          {/* Second Slide */}
          <View style={styles.slide}>
            <Image
              source={require("@/assets/images/Slide2.jpg")}
              style={styles.image}
            />
            <Text style={styles.title}>Tech Stack Use...</Text>
            <Text style={styles.subtitle}>
              Login App is built with React Native Expo, Supabase, and Express.js
              to provide a smooth and efficient authentication experience.
            </Text>
          </View>

          {/* Last Slide */}
          <View style={styles.slide}>
            <Image
              source={require("@/assets/images/Slide3.jpg")}
              style={styles.image}
            />
             <Text style={styles.title}>Created by...</Text>
             <Text style={styles.subtitle}>
              Prajwal Chaudhari
            </Text>
          </View>
        </Swiper>
      </View>
      {/* Fixed Continue Button */}
      <MyButton title={"Let's get started"} onPress={onContinue} />
    </View>
  );
}
const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  wrapper:{
    width:'80%'
  },
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  image: {
    width: width * 0.8,
    height: height * 0.4,
    resizeMode: "contain",
  },
  button: {
    backgroundColor: "#4CAF50",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 20,
  },
  subtitle: {
    fontSize: 16,
    color: "gray",
    marginTop: 10,
  },
});
