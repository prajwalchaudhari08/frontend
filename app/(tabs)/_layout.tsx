import { AntDesign } from '@expo/vector-icons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { View } from 'react-native';
import { StatusBar } from "react-native";


export default function TabLayout() {
  return (
    <Tabs screenOptions={{ 
      headerStyle: {
        backgroundColor: "#008000", // Green background for the header
      },
      headerTintColor: "#ffffff", // White text color for the header
      headerTitleStyle: {
        fontWeight: "bold",
      },
      tabBarActiveTintColor: "#4CAF50", // Green when active
      tabBarInactiveTintColor: "gray", // Gray when inactive
      tabBarStyle: {
        backgroundColor: "#ffffff", // White background for the tab bar
      },
      headerShadowVisible: false, // Removes default shadow line

      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
          headerStyle: { backgroundColor: "#008000" }, // Red header
          headerTintColor: "#fff", // White text
          headerShadowVisible: false, // Removes default shadow
        }}
      />
      <Tabs.Screen
        name="logout"
        options={{
          title:'Logout',
          tabBarIcon: ({ color }) => <AntDesign size={28} name="logout" color={color} />,

          // tabBarIcon:({color,size})=>{
          //   return(<View 
          //   style={{
          //     width:60,
          //     height:60,
          //     borderRadius:50,
          //     backgroundColor:"red",
          //     bottom:20,
          //     justifyContent:"center",
          //     alignItems:"center"
          //   }}
          //   >
          //     <AntDesign size={28} name="user" color={"white"} />
          //   </View>
          //   )
          // }
        }}
      />
    </Tabs>
  );
}
// Add this inside your main component
<StatusBar backgroundColor="#008000" barStyle="light-content" />