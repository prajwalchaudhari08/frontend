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
            <Text style={styles.title}>There's a lot more...</Text>
            <Text style={styles.subtitle}>
              Home, Office, Decor, Tables etc.
            </Text>
          </View>

          {/* Second Slide */}
          <View style={styles.slide}>
            <Image
              source={require("@/assets/images/Slide2.jpg")}
              style={styles.image}
            />
            <Text style={styles.title}>Explore Our Collection</Text>
            <Text style={styles.subtitle}>
              Find the best furniture for your space
            </Text>
          </View>

          {/* Last Slide */}
          <View style={styles.slide}>
            <Image
              source={require("@/assets/images/Slide3.jpg")}
              style={styles.image}
            />
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
