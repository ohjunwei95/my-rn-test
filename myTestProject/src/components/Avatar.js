import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { StyleConstant } from '@assets/json/MyStyle';


export default Avatar = ({ size = 10}) => {
    
    const calSize = 10 * size;
    const customStyle = { height: calSize, width: calSize, borderRadius: calSize/2 };


    return <View style={{...styles.avatar, ...customStyle}}></View>;
}

const styles = StyleSheet.create({
    avatar: { 
        backgroundColor: StyleConstant.orange,
    }
});