import React, {useState} from 'react';
import {View,Text} from 'react-native';
import {styles} from './style';
import { SafeAreaView } from 'react-native-safe-area-context';

import Button from '../../../components/button'
import AuthHeader from '../../../components/authheader/index'
import Input from '../../../components/input';
import CheckBox from '../../../components/checkbox';
import Seperator from '../../../components/seperator';
import GoogleLogin from '../../../components/googleLogin';


const Signup=({navigation})=>{

    const [isChecked,setIsChecked]=useState(false);

    const handleSignIn=()=>navigation.navigate('Signin');
    const handleBackPress=()=>navigation.goBack();

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <AuthHeader title="Sign Up" onBackPress={handleBackPress}/>

                <Input label='Name' placeholder='Enter name here'/>
                <Input label='Email' placeholder='example@poop.com'/>
                <Input label='Password' placeholder='*******' isPassword/>

                <View style={styles.agreeRow}>
                    <CheckBox checked={isChecked} handleChecked={setIsChecked}/>
                    <Text style={styles.agreeText}>I agree with the <Text style={styles.bolder}>Terms</Text> &#38; <Text style={styles.bolder}>Privacy</Text></Text>
                </View>

                <Button title='Sign Up' customStyle={styles.buttonMods}/>

                <Seperator text="Or sign up with"/>

                <GoogleLogin/>

                <Text style={styles.footerText}>
                    Already have an account?
                    <Text onPress={handleSignIn} style={styles.footerLink}> Sign In</Text>
                </Text>
            </View>
        </SafeAreaView>
    );
}

export default React.memo(Signup);