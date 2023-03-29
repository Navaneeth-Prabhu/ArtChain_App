import { View, Text, StatusBar, Image } from "react-native";
import React from "react";
import { GradientText, GradientTextHeading } from "./Buttons";

const HomeHeader = () => {
  return (
    <View className=" h-[100] px-5  mb-14  " top={StatusBar.currentHeight}>
      <View className="flex-row justify-between " >
       
      <View className="flex-row">
          <GradientTextHeading
          
            style={{ fontSize: 30, fontWeight: "bold",backgroundColor:'red'}}
            text="ART"
          />
          <Text className="text-textPrimary text-3xl font-bold dark:text-white mt-1">
            CHAIN
          </Text>
        </View>

        <View className="flex-row space-x-2">
          <View className="h-10 w-10 border-2 border-gray-300 rounded-full items-center justify-center">
          <Image  className=' h-6 w-6' source={require('../assets/icons/add.png')}/>
          </View>
          <View className="h-10 w-10 border-2 border-gray-300 rounded-full items-center justify-center">
          <Image  className=' h-6 w-6' source={require('../assets/icons/notification-bell.png')}/>
          </View>
        </View>
      </View>
      <View className='relative'>

      <Text className="text-textPrimary text-lg font-bold dark:text-white mt-4 relative">
      Find unique <GradientText style={{fontSize:18,fontWeight:'bold',marginTop:4}} text='NFTs'/>. Start hunting today!
      </Text>
      
      </View>
    </View>
  );
};

export default HomeHeader;
