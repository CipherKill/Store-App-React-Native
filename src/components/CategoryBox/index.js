import React, { useState } from 'react';
import { Pressable,Text, View, Image } from 'react-native';
import { styles } from './style';
import Input from '../input'
import { colors } from '../../utils/colors';

const CategoryBox=({title,image,onPress,isSelected})=>{

    return(
        <Pressable onPress={onPress} style={styles.container}>
            <View style={[styles.imageContainer, isSelected&&{backgroundColor:colors.mainColor}]}>
                <Image style={styles.image} source={{uri:image}}/>
            </View>
            <Text style={[styles.title,isSelected&&{fontWeight:'600'}]}>{title}</Text>
        </Pressable>
    );
}

export default React.memo(CategoryBox);