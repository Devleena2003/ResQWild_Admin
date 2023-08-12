import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import HomeScreenNavigator from './HomeScreenNavigator'
import User from "../screens/User";
import Contact from "../screens/Contact";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          size = 24;

          if (route.name === "Dashboard") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Contact") {
            iconName = focused ? "call" : "call-outline";
          } else if (route.name === "User") {
            iconName = focused ? "person" : "person-outline";
          }
          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarStyle: {
          backgroundColor: "#9ac991",
        },
        tabBarActiveTintColor: "#1e5128",
        tabBarInactiveTintColor: "#1e5128",
        tabBarHideOnKeyboard: true,
        headerStyle : {
          backgroundColor: "#9ac991",
        },
        headerTintColor: "#1e5128",
        headerTitleStyle: {
          fontSize : 30,
          fontWeight: 'bold',
        },
        headerTitleAlign : "center"
      })}
    >
      <Tab.Screen name="Dashboard" component={HomeScreenNavigator} options={{headerShown: false}}/>
      <Tab.Screen name="User" component={User} />
      <Tab.Screen name="Contact" component={Contact} />
    </Tab.Navigator>
  );
}
