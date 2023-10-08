import React from 'react';
import { Text,View,Image,Pressable } from 'react-native';
import {styles} from './style';

import Button from '../../../components/button';

const Splash = () => {
    return (
        <View style={styles.container}>
            <Image resizeMode="contain" style={styles.image} source={require("../../../assets/splash_image.png")}/>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>You'll find</Text>
                <Text style={[styles.title,styles.innerTitle]}>all you need</Text>
                <Text style={styles.title}>here</Text>
            </View>

            <Button title='Sign Up'/>
            <Pressable hitSlop={20}>
                <Text style={styles.footerText}>Sign In</Text>
            </Pressable>
        </View>
    );
}

export default Splash;