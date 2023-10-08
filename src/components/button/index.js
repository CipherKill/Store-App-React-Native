import React from 'react';
import { Pressable,Text,TouchableOpacity } from 'react-native';
import { styles } from './style';

const Button=({title,onPress,customStyle})=>{

    return (
        <TouchableOpacity activeOpacity={0.6} onPress={onPress} style={[styles.container,customStyle]}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    );
}

export default React.memo(Button);