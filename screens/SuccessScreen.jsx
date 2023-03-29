import { View, Text } from "react-native";
import React from "react";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { GradientText } from "../components/Buttons";
import { SHADOWS } from "../constants";

const SuccessScreen = ({ route }) => {
  const navigation = useNavigation();
  const { data } = route.params;
  return (
    <View className="flex justify-center items-center w-full h-full p-5 bg-white space-y-4">
      <View>

      <Text className="text-textPrimary text-center font-bold text-xl">
        Congratulations...
      </Text>
      <Text className="text-textPrimary font-bold text-lg">
        {" "}
        you now own a piece of digital history!
      </Text>
      </View>
 

      <Image source={data.image}  className="w-full h-[350px] rounded-2xl " />
    

      <TouchableOpacity
        className="pt-10"
        onPress={() => navigation.navigate("HomeScreen")}
      >
        <GradientText
          style={{ fontSize: 16, fontWeight: "bold" }}
          text="Explore More NFTs"
        />
      </TouchableOpacity>
    </View>
  );
};

export default SuccessScreen;
