import React, {useState} from "react";
import {View,TextInput,Text, Pressable, Image} from 'react-native';
import {styles} from './style'

const Input = ({label, placeholder, isPassword, onChangeText, value}) => {
    
    const [isPasswordVisible,setPasswordVisibility]=useState(false);

    const onEyePress=()=>setPasswordVisibility(!isPasswordVisible);

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.inputContainer}>
                <TextInput value={value} onChangeText={onChangeText} style={styles.input} placeholder={placeholder} secureTextEntry={isPassword && !isPasswordVisible}/>
                
                {isPassword ? (
                    <Pressable onPress={onEyePress}>
                        <Image style={styles.eye} source={isPasswordVisible ? require('../../assets/eye_closed.png') : require('../../assets/eye.png')}/>
                    </Pressable>
                ):null}
            </View>
        </View>
    );
}

export default React.memo(Input);
