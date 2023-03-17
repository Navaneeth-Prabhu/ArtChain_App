import React from "react";
import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import ProfileScreen from "../screens/ProfileScreen";
import DetailScreen from "../screens/DetailScreen";
import BidScreen from "../components/BidScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { Text, View } from "react-native";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const x = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeMain"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Bid"
        component={BidScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const BottomNavigation = () => {
  return (
    <Tab.Navigator
      className="bg-yellow-500"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "white",
          position: "absolute",
          bottom: 0,
          right: 0,
          left: 0,
          elevation: 0,
          borderRadius: 15,
          height: 80,
        },
        tabBarInactiveTintColor: "#fff",
        tabBarActiveTintColor: "black",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={({ route }) => ({
          tabBarStyle: {
            display: getTabBarVisibility(route),
            backgroundColor: "white",
            position: "absolute",
            bottom: 0,
            right: 0,
            left: 0,
            elevation: 0,
            borderRadius: 15,
            height: 80,
          },
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View className="flex-col items-center justify-center top-2">
              <Text className={focused?"text-black font-bold":"text-green-500"}>Home</Text>
            </View>
          ),
        })}
      ></Tab.Screen>
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View className="flex-col items-center justify-center top-2">
              <Text className={focused?"text-black font-bold ":"text-green-500"}>Search</Text>
            </View>
          ),
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View className="flex-col items-center justify-center top-2">
              <Text className={focused?"text-black font-bold":"text-green-500"}>Profile</Text>
            </View>
          ),
        }}
      ></Tab.Screen>
    </Tab.Navigator>
  );
};
const getTabBarVisibility = (route) => {
 
  const routeName = getFocusedRouteNameFromRoute(route) ?? "Feed";
  if (routeName == "Detail" || routeName == 'Bid') {
    return "none";
  }else{

    return "flex";
  }
};

export default BottomNavigation;
