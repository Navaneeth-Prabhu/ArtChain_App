import React from "react";
import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import ProfileScreen from "../screens/ProfileScreen";
import DetailScreen from "../screens/DetailScreen";
import BidScreen from "../components/BidScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { Image, Text, View } from "react-native";
import { ProductStack } from "./StackNavigation";
import { assets } from "../constants";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


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
          right: 20,
          left: 20,
          elevation: 0,
          // borderRadius: 15,
          borderTopEndRadius:15,
          borderTopStartRadius:15,
          height: 80,
        },
        tabBarInactiveTintColor: "#fff",
        tabBarActiveTintColor: "black",
      }}
    >
      <Tab.Screen
        name="Home"
        component={ProductStack}
        options={({ route }) => ({
          tabBarShowLabel: false,
          tabBarStyle: {
            display: getTabBarVisibility(route),
            backgroundColor: "white",
            position: "absolute",
            bottom: 0,
            right: 20,
            left: 20,
            elevation: 0,
            // borderRadius: 15,
            borderTopEndRadius:15,
            borderTopStartRadius:15,
            height: 80,
          },
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View className="flex-col items-center justify-center">
              <Image style={{tintColor:'black'}} className=' h-6 w-6' source={require('../assets/icons/home2.png')}/>
              {
               focused?<View className='h-2 w-2 bg-purple-800 opacity-50 absolute rounded-full bottom-4 right-2'></View>:null
              }
             <Text className={focused?"text-textPrimary font-bold":"text-gray-500 font-bold"}>Home</Text>
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
            <View className="flex-col items-center justify-center">
               <Image style={{tintColor:'black'}} className=' h-6 w-6' source={require('../assets/icons/searchNew.png')}/>
              {
                focused?<View className='h-2 w-2 bg-purple-800 opacity-50 absolute rounded-full bottom-4 right-3'></View>:null
              }
             <Text className={focused?"text-textPrimary font-bold":"text-gray-500 font-bold"}>Search</Text>
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
            <View className="flex-col items-center justify-center ">
               <Image style={{tintColor:'black'}} className=' h-6 w-6' source={require('../assets/icons/profileNew.png')}/>
              {
                 focused?<View className='h-2 w-2 bg-purple-800 opacity-50 absolute rounded-full bottom-4 right-3'></View>:null
              }
              <Text className={focused?"text-textPrimary font-bold":"text-gray-500 font-bold"}>Profile</Text>
            </View>
          ),
        }}
      ></Tab.Screen>
    </Tab.Navigator>
  );
};
const getTabBarVisibility = (route) => {
 
  const routeName = getFocusedRouteNameFromRoute(route) ?? "Feed";
  if (routeName == "Detail" || routeName == 'Bid' || routeName == 'Buy'||routeName == 'PreparingPayment' || routeName=='Success') {
    return "none";
  }else{

    return "flex";
  }
};

export default BottomNavigation;
