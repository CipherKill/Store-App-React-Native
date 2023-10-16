import {StyleSheet} from 'react-native'
import { colors } from '../../utils/colors';


const iconsize=40;

export const styles=StyleSheet.create({
    container:{
        marginHorizontal:8,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
    },
    title:{
        color:colors.darkGrey
    },
    image:{
        height:iconsize,
        width:iconsize,
        alignSelf:'center'
    },
    imageContainer:{
        backgroundColor:colors.lightGrey,
        padding:10,
        borderRadius:8,
        marginBottom:8
    }
});
