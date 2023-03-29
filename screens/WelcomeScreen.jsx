import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import MaskedView from "@react-native-masked-view/masked-view";
import { LinearGradient } from "expo-linear-gradient";
import { GradientText } from "../components/Buttons";
import { assets } from "../constants";
import { Image } from "react-native";

const WelcomeScreen = () => {
  console.log("asdfasdf", assets.nft37);
  const navigation = useNavigation();
  return (
    <View className="flex items-center justify-center w-full h-full p-5 pt-0">
      <View className="p-5 pt-0">
      <View className='rounded-xl '>
              <Image
                source={assets.nft37}
                resizeMode="contain"
                style={{ width: '100%', height: 450}}
              />
              </View>
              <View className=' p-5'>

        <Text className="font-bold text-5xl text-center text-textPrimary">
          Welcome To <Text className="text-[#6849E8]">ART</Text>CHAIN
        </Text>
        <Text className="font-normal text-center text-gray-400">
          More than 1000+ artwork available for auction.Get your art now
        </Text>
              </View>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("Tabs")}
        className=" w-full"
      >
        <LinearGradient
          colors={["#6849E8", "#8A6AEE", "#6EC2FA"]} //orginal
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          borderColor={["#6849E8", "#8A6AEE", "#6EC2FA"]}
          style={{
            paddingHorizontal: 24,
            paddingVertical: 16,
            borderRadius: 16,
          }}
        >
          <Text className="text-white text-center font-bold text-lg">
            Eplore
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

export default WelcomeScreen;
