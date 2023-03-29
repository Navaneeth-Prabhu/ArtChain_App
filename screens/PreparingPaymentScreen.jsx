import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'

const PreparingPaymentScreen = ({route}) => {
    const navigation = useNavigation()
    const { data } = route.params;

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Success',{data})
        }, 3000);
    }, [])
    
  return (
    <View className='flex justify-center items-center w-full h-full'>
     <Animatable.Image source={require("../assets/images/loading-carga.gif")}
     animation='slideInUp'
     iterationCount={1}
     className='w-52 h-52'/>
    </View>
  )
}

export default PreparingPaymentScreen