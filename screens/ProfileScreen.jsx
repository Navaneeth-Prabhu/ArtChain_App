import { View, Text, SafeAreaView, Image, ScrollView } from "react-native";
import React, { useMemo } from "react";
import FooterNav from "../components/FooterNav";
import RemoteImage from "../components/RemoteImage";
import MasonryList from "@react-native-seoul/masonry-list";
import Pin from "../components/PinImage";
import { assets, SHADOWS } from "../constants";
import { GradientText } from "../components/Buttons";

const myNfts = [
  {
    id: 1,
    img: "https://i.pinimg.com/736x/0e/28/59/0e2859e5cb496b7910167d2995c316e5.jpg",
  },
  {
    id: 2,
    img: "https://i.pinimg.com/564x/5c/95/59/5c955918cb5429b97a101b94b97c3905.jpg",
  },
  {
    id: 3,
    img: "https://i.pinimg.com/564x/fd/4d/7d/fd4d7d66eb976f99d6e3fae16d3ded99.jpg",
  },
  {
    id: 4,
    img: "https://i.pinimg.com/564x/65/af/af/65afafe0a5116646dc83c6027097b2bf.jpg",
  },
  {
    id: 5,
    img: "https://i.pinimg.com/564x/8e/2e/ac/8e2eacca2dab590da023cec83a2a20d7.jpg",
  },
  {
    id: 6,
    img: "https://i.pinimg.com/564x/fc/a1/2c/fca12c81eedd743eeee0c0a7bb69a9c5.jpg",
  },
  {
    id: 7,
    img: "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iV4SDQ2SyAjw/v2/1200x-1.jpg",
  },
];
const FurnitureCard = ({ item }) => {
  const randomBool = useMemo(() => Math.random() < 0.5, []);
  // const {theme} = useTheme();

  return (
    <SafeAreaView>

    <View
      key={item.id}
      className="p-2 overflow-hidden "
      style={[{ marginTop: 12, flex: 1 }]}
    >
      <Image
        source={{ uri: item.img }}
        style={{
          height: randomBool ? 150 : 280,
          alignSelf: "stretch",
        }}
        resizeMode="cover"
        className="rounded-2xl"
      />
      {/* <Text
        style={{
          marginTop: 8,
          // color: theme.text,
        }}
      >
        asdf
      </Text> */}
    </View>
    </SafeAreaView>
  );
};

const renderItem = ({ item, i }) => {
  return (
    <FurnitureCard item={item} style={{ marginLeft: i % 2 === 0 ? 0 : 12 }} />
  );
};

const ProfileScreen = () => {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView className="bg-white">
        <View className="px-4 py-4 absolute z-20">
          <View className="flex-row w-[360px] justify-end items-center mt-2">
            {/* <Text className="text-white text-2xl font-bold dark:text-white mt-2">
              __navaNeeth__
            </Text> */}

            <View className="flex-row space-x-2">
              <View className="h-10 w-10 border-2 border-gray-300 bg-white/30 rounded-full items-center justify-center">
                <Image
                style={{tintColor:'white'}}
                  className=" h-6 w-6"
                  source={require("../assets/icons/add.png")}
                />
              </View>
              <View className="h-10 w-10 border-2 border-gray-300 bg-white/30 rounded-full items-center justify-center">
                <Image
                 style={{tintColor:'white'}}
                  className=" h-6 w-6"
                  source={require("../assets/icons/setting.png")}
                />
              </View>
            </View>
          </View>
        </View>

        <View className="bg-white rounded-b-[40px]" style={{ ...SHADOWS.dark }}>
          <View className="w-full bg-blue-700 items-center h-56 rounded-b-[40px] overflow-hidden">
            <View className="bg-red-400 h-full w-full">
              {/* <View className="h-20 w-20 bg-purple-700 items-center justify-center rounded-full overflow-hidden p-1">
              <Image source={assets.profile}/>
            </View> */}
              {/* <Image className="w-full h-full bg-green-500 " source={{uri:"https://images.ctfassets.net/p4n9cqsquyq8/HVR292GRW1K0NqSieTGs0/ef20934e5bc510cb75039de7331dd629/Cool_Cats_NFTs__The_Best_NFT_Community_In_2022_.webp"}}/> */}
              <Image
                className="w-full h-full bg-green-500 "
                source={{
                  uri: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/820e0194033957.5e7424bb876bb.jpg",
                }}
              />
            </View>
          </View>
          <View className="">
            <View className="flex-col  items-center space-y-2  bg-white pb-8 rounded-b-[40px]">
              <View className="p-1 rounded-full bg-white -mt-10 h-22 w-22 items-center justify-center">
                <View className="h-20 w-20 bg-purple-700 items-center justify-center rounded-full overflow-hidden ">
                  <Image className="w-20 h-20" source={assets.profile} />
                </View>
              </View>
              <Text className="font-bold text-lg text-textPrimary">@dizzy</Text>
              <View className="flex-row space-x-8">
                <View className="flex-col items-center  w-16">
                  <Text className="text-lg font-bold text-textPrimary">4</Text>
                  <Text className="text-gray-600 font-semibold">Following</Text>
                </View>
                <View className="flex-col items-center  w-16">
                  <Text className="text-lg font-bold text-textPrimary">
                    135
                  </Text>
                  <Text className="text-gray-600 font-semibold">Followers</Text>
                </View>
                <View className="flex-col items-center  w-16">
                  <Text className="text-lg font-bold text-textPrimary">
                    347
                  </Text>
                  <Text className="text-gray-600 font-semibold">Likes</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View className="mb-20">
          <View className=" p-3 items-center mt-2">
            <Text className="border-b-2 px-4 border-borderPurple">
              <GradientText
                text="My NFTs"
                style={{ fontWeight: "bold", fontSize: 18 }}
              />
            </Text>
            {/* <Text className='font-bold text-lg text-center px-6 border-b-2 text-textPrimary border-textPrimary'>My NFTs</Text> */}
          </View>

          <MasonryList
            style={{ alignSelf: "stretch" }}
            contentContainerStyle={{
              paddingHorizontal: 24,
              alignSelf: "stretch",
            }}
            showsVerticalScrollIndicator={false}
            numColumns={2}
            data={myNfts}
            renderItem={renderItem}
          />
          {/* {myNfts?.map((item) => (
            <View key={item.id}>
              <Pin img={item} />
            </View>
          ))} */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;
