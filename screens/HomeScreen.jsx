import { View, Text, FlatList, SafeAreaView } from "react-native";
import React from "react";
import { NFTData } from "../constants";

import NftCard from "../components/NftCard";
import FocusedStatusBar from "../components/FocusedStatusBar";
import HomeHeader from "../components/HomeHeader";
import NftCard2 from "../components/NftCard2";
import FooterNav from "../components/FooterNav";

const HomeScreen = () => {
  return (
    <SafeAreaView className='bg-white'>
      <FocusedStatusBar background={"black"} />
      
      <View className="">
        <View className=''>
          <FlatList
            data={NFTData}
            renderItem={({ item }) =>  <NftCard2 data={item}/>}
            keyExtractor={(item)=>item.id}
            showsVerticalScrollIndicator ={false}
            ListHeaderComponent={<HomeHeader/>}
            
          />
        </View>
      </View>
      
    </SafeAreaView>
  );
};

export default HomeScreen;
