import { ActivityIndicator, Image, StyleSheet } from "react-native";
import { useState, useEffect } from "react";


const RemoteImage = ({ img }) => {
    console.log("....................",img)
    const [ratio, setRatio] = useState(1);
  
    useEffect(() => {
      if (img) {
        img?.getSize(img, (width, height) => setRatio(width / height));
      }
    }, []);
  
   
  return (
    <Image
      source={{
        uri: img,
      }}
      style={[styles.image, { aspectRatio: ratio }]}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    width: "50%",
    borderRadius: 15,
  },
});

export default RemoteImage;