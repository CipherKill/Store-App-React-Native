import {Dimensions, StyleSheet} from 'react-native'
import { colors } from '../../utils/colors';


const iconsize=40;

const {width} = Dimensions.get('window')

export const styles=StyleSheet.create({
    container:{
        margin:8,
    },
    title:{
        color:'black',
        paddingVertical:8
    },
    image:{
        height:220,
        width:width/2.4,
        alignSelf:'center',
        borderRadius:8
    },
    price:{
        color:'black',
        fontWeight:'bold',
        // paddingTop:3,
        paddingBottom:8
    }
});
