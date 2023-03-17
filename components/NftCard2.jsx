import { View, Text, Image, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { COLORS, SIZES, SHADOWS, FONTS, assets } from "../constants";
import { CircleButton, RectButton } from "./Buttons";

const NftCard2 = ({ data }) => {
    
  const navigation = useNavigation();
  return (
    <View className="p-3">
      <View
        className="w-full h-fit bg-white rounded-2xl overflow-hidden p-3"
        style={{ ...SHADOWS.light }}
      >
        <View className="w-full mb-3 flex-row space-x-2 items-center">
          <View className="bg-red-400 w-8 h-8 rounded-full"></View>
          <Text className="text-textPrimary font-bold">
            <Text className="text-gray-400">@</Text> {data.creator}
          </Text>
        </View>
        <Image source={data.image} className="w-full h-[250px] rounded-xl " />
        <View className='mt-3'>

        <View className="w-full flex-row justify-between">
          <Text className="text-lg text-textPrimary font-bold" >
            {data.name}
          </Text>
          <CircleButton imgUrl={assets.heart} />
        </View>
        <View className='flex-row justify-between'>

        <View style={{ flexDirection: "row", alignItems: "center" }}>
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
            {data.price}
          </Text>
        </View>
        <RectButton
            minWidth={120}
            fontSize={SIZES.font}
            handlePress={() => navigation.navigate("Detail", { data })}
          />
      </View>
        </View>
        </View>
    </View>
  );
};

export default NftCard2;
