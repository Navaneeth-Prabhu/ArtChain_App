import { View, Text, FlatList, SafeAreaView } from "react-native";
import React, { useEffect, useState } from "react";
import { assets, NFTData } from "../constants";
import FocusedStatusBar from "../components/FocusedStatusBar";
import HomeHeader from "../components/HomeHeader";
import NftCard3 from "../components/NftCard3";
import axios from "axios";

const HomeScreen = () => {
  const [Data, setData] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const options = {
    method: "GET",
    url: "https://opensea13.p.rapidapi.com/assets",
    params: {
      collection_slug: "cryptopunks",
      order_direction: "desc",
      limit: "5",
      include_orders: "false",
    },
    headers: {
      "X-RapidAPI-Key": "5b83af671fmshe746be6bbdc683ep180e6fjsnd395afac506e",
      "X-RapidAPI-Host": "opensea13.p.rapidapi.com",
    },
  };



  // const fetchData = async () => {
  //   setisLoading(true);
  //   try {
  //     await axios.request(options).then((response) => {
  //       console.log("...................", isLoading, response.data.assets);
  //       setData(response.data.assets);
  //       setisLoading(false);
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //     setisLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);
  // console.log("...................", isLoading, Data);
  return (
    <SafeAreaView className="bg-white">
            <FocusedStatusBar
          barStyle="dark-content"
          backgroundColor="transparent"
          translucent={true}
        />

      <View className="">
        <View className="mb-20 mt-4">
          
            <FlatList
              data={NFTData}
              renderItem={({ item }) => <NftCard3 data={item} />}
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={false}
              ListHeaderComponent={<HomeHeader />}
            />
       
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
