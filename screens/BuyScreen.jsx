import { View, Text, TextInput, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";
import { StatusBar } from "react-native";
import { assets } from "../constants";
import { useNavigation } from "@react-navigation/native";
import { CircleButton } from "../components/Buttons";

const BuyScreen = ({ data }) => {
  console.log(data);
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View className="bg-red-300">
        <View className="  w-full px-5" top={StatusBar.currentHeight + 10}>
          <View className="flex-row items-center space-x-3 z-30">
            <CircleButton
              imgUrl={assets.left}
              handlePress={() => navigation.goBack()}
            />
            <Text>Payment</Text>
          </View>
        </View>
        <Text className="font-bold justify-center text-center">
          BuyScreenasdfasdf
        </Text>
        <View className='p-6'>
          <View className="bg-green-500 w-full mt-16 p-4">
            <Text className='blur'>You are aboutto pay for the FDAASDF</Text>
            <View className='flex-row w-full items-center bg-yellow-200 border rounded-xl'>
              <View className='bg-orange-200 rounded-xl p-1'>
              <Image
                source={assets.nft37}
                resizeMode="contain"
                style={{ width: 40, height: 40}}
              />
              </View>
            <TextInput value='1.56' keyboardType="numeric" className='border-2 p-2 text-3xl font-bold '/>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BuyScreen;
