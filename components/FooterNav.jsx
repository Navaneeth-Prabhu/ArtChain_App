import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

const NavItems = [
  {
    id: "1",
    name: "Home",
    // icon:,
    path: "Home",
  },
  {
    id: "2",
    name: "Search",
    // icon:,
    path: "Search",
  },
  {
    id: "3",
    name: "Profile",
    // icon:,
    path: "Profile",
  },
];

const FooterNav = (data) => {
  const navigation = useNavigation();
  const [Active, setActive] = useState('')
  useEffect(() => {
    setActive(data)
  }, [])
  
  function handleClick(item) {
    navigation.navigate(item.path);
    // setActive(item.name)
  }
  return (
    <View className="w-full absolute bottom-0 h-[86] justify-center items-center z-50 pb-4 bg-white backdrop-blur-3xl">
      <View className="flex-row space-x-4 px-6 w-full justify-around">
        {NavItems.map((item) => (
          
          <View key={item.id}>
            {

            <TouchableOpacity
              className="flex-col bg-green-600 p-2 justify-center items-center w-full  rounded-lg "
              onPress={() => handleClick(item)}
            >
              <View className={Active===item.name? "w-6 h-6 bg-yellow-400":"w-6 h-6 bg-red-400"}></View>
              <Text className="text-center font-bold text-sm text-textPrimary">
                {item.name}
              </Text>
            </TouchableOpacity>
            }
          </View>
        ))}
      </View>
    </View>
  );
};

export default FooterNav;
