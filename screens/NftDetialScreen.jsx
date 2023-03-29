import {
  View,
  Text,
  FlatList,
  ScrollView,
  Image,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";

import FocusedStatusBar from "../components/FocusedStatusBar";
import {
  CircleButton,
  GradientText,
  RectButton,
  WishlistButton,
} from "../components/Buttons";
import { COLORS, SIZES, SHADOWS, FONTS, assets } from "../constants";
import DetailsBid from "../components/DetailsBid";
import { useNavigation } from "@react-navigation/native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { LinearGradient } from "expo-linear-gradient";
import PreparingPaymentScreen from "./PreparingPaymentScreen";

const NftDetailScreen = ({ route }) => {
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
        <View className="w-full ">
          <View
            className="w-fit h-[500]  overflow-hidden object-contain"
            style={{ ...SHADOWS.dark }}
          >
            <Image
              style={{ ...SHADOWS.dark }}
              className="w-full h-full rounded-b-[22px]"
              source={data.image}
            />

            <View
              className=" absolute w-full px-5"
              top={StatusBar.currentHeight + 10}
            >
              <View className="flex-row justify-between z-30">
                <CircleButton
                  imgUrl={assets.left}
                  handlePress={() => navigation.goBack()}
                />
                <WishlistButton id={data.id} />
              </View>
            </View>
          </View>

          <View className=" w-full h-full p-6  bg-white rounded-t-2xl">
            <View className="flex-row justify-between">
              <View>
                {/* <FontAwesomeIcon icon="mug-saucer" color="blue" secondaryColor="red" secondaryOpacity={ 0.4 } /> */}
                <Text className="text-2xl font-bold text-textPrimary">
                  {data.name}
                </Text>
                <Text className="text-gray-600 font-bold">@{data.creator}</Text>
              </View>
              <View className="flex-row items-center">
                <Image
                  source={assets.eth}
                  resizeMode="contain"
                  style={{ width: 30, height: 30 }}
                />
                <GradientText
                  style={{ fontSize: 18, fontWeight: "bold" }}
                  text={data.price}
                />
                <GradientText style={{ fontSize: 18, fontWeight: "bold" }} />
                {/* <Text className='text-xl font-bold'>{data.price}</Text> */}
              </View>
            </View>
            <View className="mt-6 flex-row items-center justify-center">
              <TouchableOpacity
                onPress={handleDetail}
                className={
                  Detail
                    ? "flex items-center px-14 py-[2px] border-b-2  border-[#6849E8]"
                    : "flex items-center px-14 py-0 border-b-2  border-gray-400"
                }
              >
                {Detail ? (
                  <GradientText
                    text="Details"
                    style={{
                      fontSize: 18,
                      fontWeight: "bold",
                      lineHeight: 24,
                    }}
                  />
                ) : (
                  <Text className={"font-bold text-lg text-gray-400"}>
                    Details
                  </Text>
                )}
              </TouchableOpacity>

              <TouchableOpacity
                onPress={handleHistory}
                className={
                  History
                    ? "flex items-center  px-14 py-[2px] border-b-2 border-[#6849E8]"
                    : "flex items-center  px-14 py-0 border-b-2 border-gray-400"
                }
              >
                {History ? (
                  <GradientText
                    text="History"
                    style={{
                      fontSize: 18,
                      fontWeight: "bold",
                      lineHeight: 24,
                    }}
                  />
                ) : (
                  <Text className={"font-bold text-lg text-gray-400"}>
                    History
                  </Text>
                )}
              </TouchableOpacity>
            </View>
            <View className="mt-2 pb-12">
              {History && (
                <View className="">
                  {data.bids.map((item) => (
                    <DetailsBid key={item.id} bid={item} />
                  ))}
                </View>
              )}

              {Detail && (
                <View className="mt-4">
                  <Text className="text-textPrimary text-sm font-normal mb-10">
                    {data.description}
                  </Text>
                </View>
              )}
            </View>
          </View>
        </View>
      </ScrollView>
      {/* button  */}
      <View className="w-full absolute bottom-0 justify-center items-center z-50 p-4 bg-white backdrop-blur-3xl">
        <View className="flex-row  items-center">
          <View className=" flex-row items-center px-2 space-x-4 justify-center w-full">
            <TouchableOpacity
             onPress={() => navigation.navigate("PreparingPayment", { data })}
              className=" w-1/2"
            >
              <LinearGradient
                colors={["#6849E8", "#8A6AEE", "#6EC2FA"]} //orginal
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                borderColor={["#6849E8", "#8A6AEE", "#6EC2FA"]}
                style={{
                  paddingHorizontal: 26,
                  paddingVertical: 13,
                  borderRadius: 12,
                }}
              >
                
                <Text className="text-white text-center font-bold text-[16px]">
                  Buy
                </Text>
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("PreparingPayment", { data })}
              className=" w-1/2"
            >
              <View className="px-6 py-[10]  justify-center items-center rounded-[12px] border-2 border-[#6849E8]">
                <GradientText
                  text="Place a Bid"
                  style={{
                    fontSize: 16,
                    fontWeight: "bold",
                    lineHeight: 24,
                  }}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    marginTop: 50,
    fontSize: "bold",
  },
  buttonContainer: {
    width: 200,
    alignItems: "center",
  },
  // buttonText: {
  //     textAlign: 'center',
  //     color: '#4C64FF',
  //     padding: 15,
  //     width: 200
  // }
  buttonText: {
    textAlign: "center",
    color: "#4C64FF",
    padding: 15,
    marginLeft: 1,
    marginRight: 1,
    width: 198,
  },

  linearGradient: {
    paddingHorizontal: 3,
    paddingVertical: 3,

    borderRadius: 12, // <-- Outer Border Radius
  },
  innerContainer: {
    borderRadius: 10, // <-- Inner Border Radius
    // margin: 1, // <-- Border Width
    paddingHorizontal: 24,
    paddingVertical: 10,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "transparent",
  },
});

export default NftDetailScreen;
