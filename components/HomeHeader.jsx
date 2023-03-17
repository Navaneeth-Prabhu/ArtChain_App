import { View, Text } from "react-native";
import React from "react";

const HomeHeader = () => {
  return (
    <View className=" h-[100] px-6 py-4">
      <View className="flex-row justify-between">
        <Text className="text-textPrimary text-3xl font-bold dark:text-white mt-2">
        ArtChain
        </Text>

        <View className="flex-row space-x-2">
          <View className="h-10 w-10 bg-purple-600 rounded-full"></View>
          <View className="h-10 w-10 bg-purple-600 rounded-full"></View>
        </View>
      </View>
      <Text className="text-textPrimary text-lg font-bold dark:text-white mt-4 ">
        featured NFTs
      </Text>
    </View>
  );
};

export default HomeHeader;
