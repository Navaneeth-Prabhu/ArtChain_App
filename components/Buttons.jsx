import React, { useEffect, useState } from "react";
import { TouchableOpacity, Text, Image, View } from "react-native";

import { COLORS, SIZES, FONTS, SHADOWS, assets } from "../constants";
import { LinearGradient } from "expo-linear-gradient";
import  MaskedView  from "@react-native-masked-view/masked-view";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const WishlistButton = ({ imgUrl,id, ...props }) => {
  console.log(id)
  const [isWishListed, setIsWishListed] = useState(false);
  
  useEffect(() => {
    AsyncStorage.getItem("wishlist")
      .then((wishlist) => {
        if (wishlist) {
          const parsedWishlist = JSON.parse(wishlist);
          setIsWishListed(parsedWishlist.includes(id));
        }
      })
      .catch((error) => console.log(error));
  }, []);
  

  const handlePress = () => {
    setIsWishListed((prevState) => !prevState);
  
    // Update wishlist in local storage
    AsyncStorage.getItem("wishlist")
      .then((wishlist) => {
        if (wishlist) {
          const parsedWishlist = JSON.parse(wishlist);
          const updatedWishlist = isWishListed
            ? parsedWishlist.filter((itemId) => itemId !== id)
            : [...parsedWishlist, id];
          AsyncStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
          console.log(updatedWishlist); // log updated wishlist
          if (isWishListed) {
            console.log(`Removed item ${id} from wishlist`); // log removal of item from wishlist
          } else {
            console.log(`Added item ${id} to wishlist`); // log addition of item to wishlist
          }
        } else {
          AsyncStorage.setItem("wishlist", JSON.stringify([id]));
          console.log(`Added item ${id} to wishlist`); // log addition of item to wishlist
        }
      })
      .catch((error) => console.log(error));
  };
  
  
  return (
    <TouchableOpacity
      style={{
        width: 40,
        height: 40,
        backgroundColor: 'rgba(255, 255, 255, 0.60)',
        borderRadius: SIZES.extraLarge,
        alignItems: "center",
        justifyContent: "center",

        ...props,
      }}
      onPress={handlePress}
    >
      <Image
         source={isWishListed ? assets.heart2 : assets.heart}
        resizeMode="contain"
        style={{ width: 24, height: 24 }}
      />
    </TouchableOpacity>
  );
};
export const CircleButton = ({ imgUrl, handlePress, ...props }) => {
  return (
    <TouchableOpacity
      style={{
        width: 40,
        height: 40,
        backgroundColor: 'rgba(255, 255, 255, 0.60)',
        borderRadius: SIZES.extraLarge,
        alignItems: "center",
        justifyContent: "center",
        // ...SHADOWS.light,
        ...props,
      }}
      onPress={handlePress}
    >
      <Image
        source={imgUrl}
        resizeMode="contain"
        style={{ width: 24, height: 24 }}
      />
    </TouchableOpacity>
  );
};

export const RectButton = ({ minWidth, fontSize, handlePress, ...props }) => {
  return (
    <TouchableOpacity 
      style={{
        backgroundColor: COLORS.primary,
        padding: SIZES.small,
        borderRadius: SIZES.medium,
        minWidth: minWidth,
        ...props,
      }}
      onPress={handlePress}
    >
      <Text
        style={{
        //   fontFamily: FONTS.semiBold,
          fontSize: fontSize,
          color: COLORS.white,
          textAlign: "center",
        }}
      >
        Place a bid
      </Text>
    </TouchableOpacity>

  );
};

export const GradientText=({text,style})=>{
 
  return (
    <View>
       <MaskedView
            style={{ height: 24 }}
            maskElement={ <Text style={[style,{backgroundColor:'transparent'}]}>{text}</Text>}
          >
            <LinearGradient
                colors={["#6849E8", "#8A6AEE", "#6EC2FA"]} ///orginal
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={{ flex: 1 }}
            >
              <Text style={[style,{opacity:0}]}>{text}</Text>
            </LinearGradient>
          </MaskedView>
    </View>
  )
}
export const GradientTextHeading=({text,style})=>{
  
  return (
    <View>
       <MaskedView
            style={{ height: 44 }}
            maskElement={ <Text style={[style,{backgroundColor:'transparent'}]}>{text}</Text>}
          >
            <LinearGradient
                colors={["#6849E8", "#8A6AEE", "#6EC2FA"]} ///orginal
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={{ flex: 1 }}
            >
              <Text style={[style,{opacity:0}]}>{text}</Text>
            </LinearGradient>
          </MaskedView>
    </View>
  )
}
export const GradientButton=({text,style})=>{

  return (
    <View>
       
       <LinearGradient
              // Button Linear Gradient
              // colors={['#8150c7', '#4dc7c6']}
              // colors={["#5250c7", "#8e50c7", "#4dc7c6"]}
              // colors={["#D16BA5", "#86A8E7", "#5FFBF1"]}
              // colors={["#5562F5", "#A38FDC", "#75CAE1"]}
              colors={["#6849E8", "#8A6AEE", "#6EC2FA"]} //orginal
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              borderColor={["#6849E8", "#8A6AEE", "#6EC2FA"]}
              // className="p-4 rounded-xl"
              style={{ padding: SIZES.small,
                borderRadius: SIZES.medium,
                minWidth: minWidth,
                ...props,}}
            >
              <Text className="text-white">{text}</Text>
            </LinearGradient>
         
    </View>
  )
}