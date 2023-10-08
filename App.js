import React from 'react'
import {View,Text, SafeAreaView} from 'react-native';
import Splash from './src/screens/auth/splash';
import SignUp from './src/screens/auth/signup';
import SignIn from './src/screens/auth/signin';


const App=()=>{
  return (
    <SafeAreaView>
      <View>
        {/* <Splash/> */}
        {/* <SignUp/> */}
        <SignIn/>
      </View>
    </SafeAreaView>
  );
}

export default App;

//https://www.figma.com/file/jIZMJpjRWyQQWFICqkdSci/Listicle-app?type=design&node-id=407-2923&mode=design