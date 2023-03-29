import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import DetailScreen from "./screens/DetailScreen";
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import SearchScreen from "./screens/SearchScreen";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BottomNavigation from "./navigation/BottomNavigation";
import StackNavigation, { MainStack } from "./navigation/StackNavigation";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  // const [loaded] = useFonts({})
  return (
    <NavigationContainer>
      <MainStack/>
      {/* <StackNavigation/> */}
    </NavigationContainer>
  );
}


