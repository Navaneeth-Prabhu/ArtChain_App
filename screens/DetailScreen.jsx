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
import { CircleButton, GradientText, RectButton } from "../components/Buttons";
import { COLORS, SIZES, SHADOWS, FONTS, assets } from "../constants";
import DetailsBid from "../components/DetailsBid";
import { useNavigation } from "@react-navigation/native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { LinearGradient } from "expo-linear-gradient";

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
              {/* <FontAwesomeIcon icon="mug-saucer" color="blue" secondaryColor="red" secondaryOpacity={ 0.4 } /> */}
              <Text className="text-2xl font-bold text-textPrimary">
                {data.name}
              </Text>
              <Text className="text-gray-600 font-bold">{data.creator}</Text>
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
                {/* <Text
                  className={
                    History
                      ? "font-bold text-lg text-cyan-600"
                      : "font-bold text-lg text-gray-300"
                  }
                >
                  Histroy
                </Text> */}
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
                    <DetailsBid bid={item} />
                  ))}
                </View>
              )}

              {Detail && (
                <View className="mt-4">
                  <Text className='text-textPrimary text-sm font-normal mb-10'>{data.description}</Text>
                </View>
              )}
            </View>
          </View>
        </View>
      </ScrollView>
      {/* button  */}
      <View className="w-full absolute bottom-0 justify-center items-center z-50 p-4 bg-white backdrop-blur-3xl">
        <View className="flex-row  items-center">
          <View className="w-1/2 block items-center px-2 justify-center ">
            <TouchableOpacity
              onPress={() => navigation.navigate("Buy",{data})}
              className=" w-full "
            >
              <LinearGradient
                colors={["#6849E8", "#8A6AEE", "#6EC2FA"]} //orginal
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                borderColor={["#6849E8", "#8A6AEE", "#6EC2FA"]}
                style={{
                  paddingHorizontal: 24,
                  paddingVertical: 10,
                  borderRadius: 12,
                }}
              >
                <Text className="text-white text-center font-bold text-lg">
                  Buy
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
          <View className="w-1/2 block items-center px-2 justify-center">
            {/* <TouchableOpacity
              onPress={() => navigation.navigate("Bid")}
              className="px-6 py-2 w-full bg-white border-textPrimary border-2 rounded-lg"
            >
              <Text className="text-center font-bold text-lg text-textPrimary">
                Place a Bid
              </Text>
            </TouchableOpacity> */}
            <TouchableOpacity
              onPress={() => navigation.navigate("Bid",{data})}
              // className='bg-red-500'
              // className="px-6 py-2 w-full bg-white border-textPrimary border-2 rounded-lg"
            >
              <LinearGradient
                colors={["#6849E8", "#8A6AEE", "#6EC2FA"]} //orginal
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}  
                style={styles.linearGradient}
              >
                <View style={styles.innerContainer}>
                  {/* <Text style={styles.buttonText}>Place a Bid</Text> */}
                  <GradientText style={styles.buttonText} text="Place a Bid"/>
                </View>
              </LinearGradient>
            </TouchableOpacity>
          </View>
          {/* <RectButton minWidth={100} fontSize={SIZES.large} {...SHADOWS.dark} /> */}
          {/* <RectButton minWidth={100} fontSize={SIZES.large} {...SHADOWS.dark} /> */}
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

export default DetailScreen;
