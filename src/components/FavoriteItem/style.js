import {StyleSheet} from 'react-native'
import { colors } from '../../utils/colors';


export const styles=StyleSheet.create({
    container:{
        marginHorizontal:8,
        flexDirection:'row',
        borderBottomWidth:1,
        borderBottomColor:colors.lightGrey,
        paddingVertical:16
    },
    title:{
        color:'black',
        paddingVertical:8
    },
    image:{
        height:100,
        width:100,
        borderRadius:10,
        marginRight:20
    },
    price:{
        color:'black',
        fontWeight:'bold',
        // paddingTop:3,
        paddingBottom:8
    },
    icon:{
        width:24,
        height:24,
        marginLeft:10
    },
    content:{
        flex:1
    }
});
