import { View, Text, Image, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { assets } from "../constants";

const NftCard = ({ data }) => {
  const navigation = useNavigation();
  return (
    <View className="p-4">
      <View className="w-full h-[300px]">
        <ImageBackground
          source={data.image}
          className="overflow-hidden w-full h-full rounded-md -z-10 flex items-center " 
        >
          {
            <View className="absolute w-full bottom-2 ">
              <View className='rounded-2xl px-4 py-3 mx-3  backdrop-invert bg-white/40' blur>

              <Text>{data.name}</Text>
              <Text>{data.name}</Text>
              </View>
            </View>
           
          }
        </ImageBackground>
      </View>
    </View>
  );
};

export default NftCard;
