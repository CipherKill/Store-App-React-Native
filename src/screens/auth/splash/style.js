import { StyleSheet } from "react-native";

export const styles =StyleSheet.create({
    container:{
        padding:24,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        height:'100%'
    },
    titleContainer:{
        marginVertical:54,
    },
    image:{
        width:'100%',
        height:200
    },
    title:{
        fontSize:40,
        fontWeight:"bold",
        color:'black',
        textAlign:'center'
    },
    innerTitle:{
        color:'darkorange',
        textDecorationLine:"underline"
    },
    footerText:{
        textAlign:'center',
        color:'#4f63ac',
        fontSize:16,
        fontWeight:'bold',
        marginTop:30
    }
});