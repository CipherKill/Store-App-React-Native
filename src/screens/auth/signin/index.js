import React, {useState} from 'react';
import {View,Text} from 'react-native';
import {styles} from './style';
import { SafeAreaView } from 'react-native-safe-area-context';

import Button from '../../../components/button'
import AuthHeader from '../../../components/authheader/index'
import Input from '../../../components/input';
import Seperator from '../../../components/seperator';
import GoogleLogin from '../../../components/googleLogin';


const SignIn=({navigation})=>{

    const [isChecked,setIsChecked]=useState(false);

    const handleSignUp=()=>navigation.navigate('Signup');

    const handleBack=()=>{
        navigation.goBack()
    }

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <AuthHeader onBackPress={handleBack} title="Sign In"/>

                <Input label='Email' placeholder='example@poop.com'/>
                <Input label='Password' placeholder='*******' isPassword/>


                <Button title='Sign In' customStyle={styles.buttonMods}/>

                <Seperator text="Or sign in with"/>

                <GoogleLogin/>

                <Text style={styles.footerText}>
                    Don't have an account?
                    <Text onPress={handleSignUp} style={styles.footerLink}> Sign Up</Text>
                </Text>
            </View>
        </SafeAreaView>
    );
}

export default React.memo(SignIn);