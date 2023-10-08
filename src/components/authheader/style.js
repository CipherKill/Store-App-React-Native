import {StyleSheet} from 'react-native'
import { colors } from '../../utils/colors';

export const styles=StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center',
        marginBottom:50
    },
    image:{
        height:18,
        width:18
    },
    title:{
        fontSize:26,
        fontWeight:'500',
        color:colors.mainColor,
        paddingHorizontal:16
    }
});
