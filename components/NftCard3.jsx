import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from "@react-navigation/native";

import { COLORS, SIZES, SHADOWS, FONTS, assets } from "../constants";
import { CircleButton, RectButton, GradientText, WishlistButton } from "./Buttons";
import { LinearGradient } from "expo-linear-gradient";
import { MaskedView } from "@react-native-masked-view/masked-view";
import { useEffect, useState } from "react";

const NftCard3 = ({ data }) => {
  const navigation = useNavigation();
  const [isWishlist, setIsWishlist] = useState(false);

  return (
    <View className="p-3">
      <View
        className="w-full h-fit bg-white rounded-2xl overflow-hidden p-0"
        style={{ ...SHADOWS.dark }}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("Detail", { data })}
        >
          <Image
            source={data.image}
            className="w-full h-[250px] rounded-t-2xl "
          />
        </TouchableOpacity>
        <View className=" p-3">
          <View className="flex-row justify-between">
            <View className=" flex-col justify-between">
              <Text className="text-xl text-textPrimary font-bold">
                {data.name}
              </Text>
              <Text className="text-textPrimary font-medium">
                <Text className="text-gray-400">@</Text> {data.creator}
              </Text>
            </View>
            <View>
              <View>
               
                  <WishlistButton id={data.id}/>
               
              </View>
            </View>
          </View>
          <View className="flex-row justify-between">
            <View className="flex-row items-center">
              <Image
                source={assets.eth}
                resizeMode="contain"
                style={{ width: 20, height: 20, marginRight: 2 }}
              />
              <Text className="font-bold text-base text-textPrimary">
                {data.price}
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate("Detail", { data })}
            >
              <Text className="p-2">
                <GradientText
                  style={{ fontSize: 16, fontWeight: "bold" }}
                  text="Place a Bid"
                />
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default NftCard3;
