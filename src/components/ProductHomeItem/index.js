import React, { useState } from 'react';
import { Pressable,Text, View, Image } from 'react-native';
import { styles } from './style';
import Input from '../input'

const ProductHomeItem=({title,price,image,onPress})=>{

    return(
        <Pressable onPress={onPress} style={styles.container}>
            <Image style={styles.image} source={{uri:image}}/>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.price}>{price}</Text>
        </Pressable>
    );
}

export default React.memo(ProductHomeItem);