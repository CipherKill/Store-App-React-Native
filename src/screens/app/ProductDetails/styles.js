import {Dimensions, StyleSheet} from 'react-native'
import {colors} from '../../../utils/colors'

const {height} = Dimensions.get('window');

export const styles=StyleSheet.create({
    safe:{
        flex:1
    },
    container:{},
    image:{
        width:'100%',
        height:height*0.45
    },
    content:{
        backgroundColor:'white',
        borderTopLeftRadius:16,
        borderTopRightRadius:16,
        marginTop:-40,
        paddingHorizontal:24
    },
    title:{
        marginTop:40,
        fontSize:24,
        fontWeight:'500',
        color:'black'
    },
    price:{
        fontSize:30,
        fontWeight:'bold',
        marginVertical:8,
        color:'black'
    },
    description:{
        color:colors.darkGrey,
        fontWeight:'300',
        fontSize:20
    },
    footer:{
        padding:24,
        flexDirection:'row',
        alignItems:'center'
    },
    bookmarkContainer:{
        backgroundColor:colors.lightGrey,
        marginRight:16,
        padding:18,
    },
    bookmarkImage:{
        height:30,
        width:30
    },
    backContainer:{
        backgroundColor:'white',
        padding:5,
        margin:25,
        borderRadius:10,
        position:'absolute'
    },
    backImage:{height:25,width:25}

});