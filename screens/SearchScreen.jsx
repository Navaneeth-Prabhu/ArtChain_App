import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import FooterNav from "../components/FooterNav";
import { assets, COLORS, SIZES } from "../constants";
import { NFTData } from "../constants";
import HomeHeader from "../components/HomeHeader";
import NftCard3 from "../components/NftCard3";

const SearchScreen = () => {
  const [nftData, setnftData] = useState([]);
  const { searchText, searchResults } = useState("");

  const handleSearch = (value) => {
    console.log(value);
    if (!value.length) return setnftData([]);
    const filteredData = NFTData.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );

    if (filteredData.length) {
      setnftData(filteredData);
    } else {
      setnftData(NFTData);
    }
  };
  return (
    <SafeAreaView className="flex-1">
      <View className="p-4">
        <View style={{ marginTop: SIZES.font }}>
          <View className="w-full mb-4 rounded-2xl px-4 py-3 flex-row border-2 border-textPrimary items-center">
            <Image
              source={assets.search}
              resizeMode="contain"
              style={{ width: 20, height: 20, marginRight: SIZES.base,tintColor:'black' }}
            />
            <TextInput
              placeholder="Search NFTs"
              style={{ flex: 1 }}
              value={searchText}
              onChangeText={(text) => handleSearch(text)}
            />
          </View>
        </View>
        <View className=" mb-56">
          <FlatList
            data={nftData}
            renderItem={({ item }) => <NftCard3 data={item} />}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            // ListHeaderComponent={<HomeHeader />}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SearchScreen;
