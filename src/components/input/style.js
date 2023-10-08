import {StyleSheet} from 'react-native';
import { colors } from '../../utils/colors';

export const styles=StyleSheet.create({
    container:{
        marginBottom:20,
    },
    label:{
        marginVertical:8,
        color:colors.mainColor,
        fontSize:18,
        fontWeight:'500',
    },
    inputContainer:{
        borderRadius:14,
        borderWidth:1,
        borderColor:colors.inputOutline,
        flexDirection:'row',
        alignItems:'center',
        // justifyContent:'space-between',
        // paddingHorizontal:10
    },
    input:{        
        paddingHorizontal:16,
        paddingVertical:20,
        fontSize:17,
        flex:1
    },
    eye:{
        width:30,
        height:30,
        marginHorizontal:10
    }
});