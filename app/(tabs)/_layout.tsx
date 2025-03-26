import { AntDesign } from '@expo/vector-icons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { View } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title:'About Us',
          tabBarIcon:({color,size})=>{
            return(<View 
            style={{
              width:60,
              height:60,
              borderRadius:50,
              backgroundColor:"red",
              bottom:20,
              justifyContent:"center",
              alignItems:"center"
            }}
            >
              <AntDesign size={28} name="user" color={"white"} />
            </View>
            )
          }
        }}
      />
    </Tabs>
  );
}
