import React, {useState} from 'react';
import {View,Text} from 'react-native';
import {styles} from './style';

import Button from '../../../components/button'
import AuthHeader from '../../../components/authheader/index'
import Input from '../../../components/input';
import Seperator from '../../../components/seperator';
import GoogleLogin from '../../../components/googleLogin';


const SignIn=()=>{

    const [isChecked,setIsChecked]=useState(false);

    const handleSignIn=()=>console.log('sign in')

    return (
        <View style={styles.container}>
            <AuthHeader title="Sign In"/>

            <Input label='Email' placeholder='example@poop.com'/>
            <Input label='Password' placeholder='*******' isPassword/>


            <Button title='Sign In' customStyle={styles.buttonMods}/>

            <Seperator text="Or sign in with"/>

            <GoogleLogin/>

            <Text style={styles.footerText}>
                Don't have an account?
                <Text onPress={handleSignIn} style={styles.footerLink}> Sign Up</Text>
            </Text>
        </View>
    );
}

export default React.memo(SignIn);