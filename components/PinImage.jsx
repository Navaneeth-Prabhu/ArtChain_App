import { View, Image, Text, StyleSheet, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import RemoteImage from "./RemoteImage";

const Pin = (props) => {
    const { id,img } = props.img;
    console.log("............///////////////////",img)

  const navigation = useNavigation();

  const onLike = () => {};

//   const goToPinPage = () => {
//     navigation.navigate("Pin", {  });
//   };

  return (
    <Pressable style={styles.pin}>
      <View key={id}>
        <RemoteImage img={img} />
        <Pressable onPress={onLike} style={styles.heartBtn}>
          <AntDesign name="hearto" size={16} color="black" />
        </Pressable>
      </View>

      <Text style={styles.title} numberOfLines={2}>
        asdf
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  pin: {
    width: "100%",
    padding: 4,
  },
  title: {
    fontSize: 16,
    lineHeight: 22,
    fontWeight: "600",
    margin: 5,
    color: "#181818",
  },
  heartBtn: {
    backgroundColor: "#D3CFD4",
    position: "absolute",
    bottom: 10,
    right: 10,
    padding: 5,
    borderRadius: 50,
  },
});

export default Pin;