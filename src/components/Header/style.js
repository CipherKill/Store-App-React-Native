import {StyleSheet} from 'react-native'
import { colors } from '../../utils/colors';

export const styles=StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    icon:{
        height:24,
        width:24
    },
    title:{
        fontSize:16,
        fontWeight:'500',
        color:colors.darkGrey,
        fontWeight:'bold'
    },
    space:{
        width:24,
    }
});
