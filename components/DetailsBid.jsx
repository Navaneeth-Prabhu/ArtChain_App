import React from "react";
import { View, Text, Image } from "react-native";
import { COLORS, SIZES, FONTS, assets } from "../constants";

const DetailsBid = ({ bid }) => {
  return (  

    <View
      className="w-full flex-row justify-between items-center border-b-2 border-gray-200 py-2"
      key={bid.id}
    >
      <View className="flex-row items-center space-x-3">
        <Image
          source={bid.image}
          resizeMode="contain"
          style={{ width: 48, height: 48 }}
        />

        <View>
          <Text
            style={{
              // fontFamily: FONTS.semiBold,
              fontSize: SIZES.small,
              color: COLORS.primary,
            }}
          >
            Bid placed by {bid.name}
          </Text>
          <Text
            style={{
              // fontFamily: FONTS.regular,
              fontSize: SIZES.small - 2,
              color: COLORS.secondary,
              marginTop: 3,
            }}
          >
            {bid.date}
          </Text>
        </View>
      </View>
      <View className="">
        <View className="flex-row justify-center">
          <Image
            source={assets.eth}
            resizeMode="contain"
            style={{ width: 20, height: 20, marginRight: 2 }}
          />

          <Text
            style={{
              fontFamily: FONTS.medium,
              fontSize: SIZES.font,
              color: COLORS.primary,
            }}
          >
            {bid.price}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default DetailsBid;
