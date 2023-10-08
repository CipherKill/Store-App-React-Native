import {StyleSheet} from 'react-native'
import { colors } from '../../../utils/colors';

export const styles=StyleSheet.create({
    container:{
        padding:24,
    },
    agreeRow:{
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:4
    },
    agreeText:{
        color:colors.mainColor,
        fontSize:15,
        marginHorizontal:10
    },
    bolder:{
        fontWeight:'bold'
    },
    buttonMods:{
        marginVertical:20
    },
    footerText:{
        color:colors.mainColor,
        marginVertical:20,
        alignSelf:'center',
        fontSize:15
    },
    footerLink:{
        fontWeight:'bold'
    }
});