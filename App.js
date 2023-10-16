import * as React from 'react'
import {Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Splash from './src/screens/auth/splash';
import SignUp from './src/screens/auth/signup';
import SignIn from './src/screens/auth/signin';
import Favorites from './src/screens/app/Favorites';
import Home from './src/screens/app/Home';
import Profile from './src/screens/app/Profile';
import { colors } from './src/utils/colors';
import ProductDetails from './src/screens/app/ProductDetails';

const Stack=createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Tabs=()=>(
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let icon;

        if (route.name === 'Home') {
          icon = focused ? require('./src/assets/houseHighlight.png') : require('./src/assets/houseIcon.png');
        } 
        
        else if (route.name === 'Favorites') {
          icon = focused ? require('./src/assets/saveHighlight.png') : require('./src/assets/saveIcon.png');
        }

        else if(route.name === 'Profile'){
          icon = focused ? require('./src/assets/profileHighlight.png') : require('./src/assets/profileIcon.png');
        }

        // You can return any component that you like here!
        return <Image style={{width:24, height:24}} source={icon}/>;
      },
      
      headerShown:false,
      tabBarShowLabel:false,
      tabBarStyle:{
        borderTopColor:colors.lightGrey,
        backgroundColor:'white'
      },
      initialRouteName:'Home'

    })}>
      <Tab.Screen name="Home" component={Home}/>
      <Tab.Screen name="Favorites" component={Favorites}/>
      <Tab.Screen name="Profile" component={Profile}/>
    </Tab.Navigator>
)

const App=()=>{
  

  const theme={
    colors:{
      background:'white'
    }
  }

  const isSignedIn=true;

  return (
    <SafeAreaProvider>
      <NavigationContainer theme={theme}>
        <Stack.Navigator>

          {isSignedIn?(
            <>
              <Stack.Screen name="Tabs" component={Tabs} options={{headerShown:false}}/>
              <Stack.Screen name="ProductDetails" component={ProductDetails} options={{headerShown:false}}/>
            </>

          ):(
            <>
              <Stack.Screen name="Splash" component={Splash} options={{headerShown:false}}/>
              <Stack.Screen name="Signin" component={SignIn} options={{headerShown:false}}/>
              <Stack.Screen name="Signup" component={SignUp} options={{headerShown:false}}/>
            </>
            )}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;

//https://www.figma.com/file/jIZMJpjRWyQQWFICqkdSci/Listicle-app?type=design&node-id=407-2923&mode=design