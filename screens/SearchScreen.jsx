import { View, Text, SafeAreaView, Image, TextInput } from "react-native";
import React from "react";
import FooterNav from "../components/FooterNav";
import { assets, COLORS, SIZES } from "../constants";

const SearchScreen = () => {
  return (
    <SafeAreaView className="flex-1">
      <View className='p-4 bg-yellow-400'>

      <View style={{ marginTop: SIZES.font }}>
        <View className='w-full rounded-2xl px-4 py-3 flex-row border-2 border-textPrimary items-center'
          // style={{
          //   width: "100%",
          //   borderRadius: SIZES.font,
          //   backgroundColor: COLORS.gray,
          //   flexDirection: "row",
          //   alignItems: "center",
          //   paddingHorizontal: SIZES.font,
          //   paddingVertical: SIZES.small - 2,
          // }}
        >
          <Image
            source={assets.search}
            resizeMode="contain"
            style={{ width: 20, height: 20, marginRight: SIZES.base }}
          />
          <TextInput
            placeholder="Search NFTs"
            style={{ flex: 1 }}
            // onChangeText={}
          />
        </View>
      </View>
      </View>
    </SafeAreaView>
  );
};

export default SearchScreen;
