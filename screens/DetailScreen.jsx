import {
  View,
  Text,
  FlatList,
  ScrollView,
  Image,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

import FocusedStatusBar from "../components/FocusedStatusBar";
import { CircleButton, RectButton } from "../components/Buttons";
import { COLORS, SIZES, SHADOWS, FONTS, assets } from "../constants";
import DetailsBid from "../components/DetailsBid";
import { useNavigation } from "@react-navigation/native";

const DetailScreen = ({ route }) => {
  const navigation = useNavigation();

  const { data } = route.params;
//   console.log("......................", data);
  const [active, setactive] = useState(true);
  const [Detail, setDetail] = useState(true);
  const [History, setHistory] = useState(false);
  function handleDetail() {
    setDetail(true);
    setHistory(false);
  }
  function handleHistory() {
    setDetail(false);
    setHistory(true);
  }
  return (
    <SafeAreaView className="flex-1 bg-white">
      <FocusedStatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <ScrollView className="">
        <View className="w-full">
          <View className="w-full h-[380] overflow-hidden">
            <Image className="w-full h-full" source={data.image} />
            <View
              className=" absolute w-full px-5"
              top={StatusBar.currentHeight + 10}
            >
              <View className="flex-row justify-between z-30">
                <CircleButton
                  imgUrl={assets.left}
                  handlePress={() => navigation.goBack()}
                />
                <CircleButton imgUrl={assets.heart} />
              </View>
            </View>
          </View>

          <View className=" w-full h-full p-6 -mt-4 bg-white rounded-t-2xl">
            <View>
                <Text className='text-2xl font-bold text-textPrimary'>{data.name}</Text>
                <Text className='text-gray-600 font-bold'>{data.creator}</Text>

            </View>
            <View className="mt-6 flex-row items-center justify-center">
              <TouchableOpacity
                onPress={handleDetail}
                className={
                  Detail
                    ? "flex items-center px-14 py-0 border-b-4 border-cyan-600"
                    : "flex items-center px-14 py-0 border-b-4 border-gray-300"
                }
              >
                <Text
                  className={
                    Detail ? "font-bold text-lg text-cyan-600"
                    : "font-normal text-lg text-gray-300"
                  }
                >
                  Details
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={handleHistory}
                className={
                  History
                    ? "flex items-center px-14 py-0 border-b-4 border-cyan-600"
                    : "flex items-center px-14 py-0 border-b-4 border-gray-300"
                }
              >
                <Text
                  className={
                    History
                      ? "font-bold text-lg text-cyan-600"
                      : "font-normal text-lg text-gray-300"
                  }
                >
                  Histroy
                </Text>
              </TouchableOpacity>
            </View>
            <View className='mt-2 pb-12'>

            {History && (
              <View className="">
                {data.bids.map((item) => (
                  <DetailsBid bid={item} />
                ))}
              </View>
            )}
           
            {Detail && (
              <View className='mt-4'>
                
                 <Text>{data.description}</Text>
              
              </View>
            )}
            </View>
          </View>
        </View>
      </ScrollView>
      {/* button  */}
      <View className="w-full absolute bottom-0 justify-center items-center z-50 p-4 bg-white backdrop-blur-3xl">
        <View className="flex-row  items-center">
            <View className='w-1/2 block items-center px-2 justify-center '>
            <TouchableOpacity onPress={()=>navigation.navigate("Bid")} className='px-6 py-2 w-full bg-textPrimary rounded-lg  border-textPrimary border-2'>
                <Text className='text-center font-bold text-lg text-white'>Buy Now</Text>
            </TouchableOpacity>
            </View>
            <View className='w-1/2 block items-center px-2 justify-center'>
            <TouchableOpacity className='px-6 py-2 w-full bg-white border-textPrimary border-2 rounded-lg'>
                <Text className='text-center font-bold text-lg text-textPrimary'>Place a Bid</Text>
            </TouchableOpacity>
            </View>
          {/* <RectButton minWidth={100} fontSize={SIZES.large} {...SHADOWS.dark} /> */}
          {/* <RectButton minWidth={100} fontSize={SIZES.large} {...SHADOWS.dark} /> */}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DetailScreen;
