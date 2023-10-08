import React from "react";
import { TouchableOpacity, View, Text, Image } from "react-native";
import { styles } from "./style";

const CheckBox=({checked,handleChecked})=>{
    return (
        <TouchableOpacity activeOpacity={0.9} onPress={()=>handleChecked(!checked)} style={styles.container}>
            {checked?(
                <View style={styles.innerContainer}>
                    <Image style={styles.checkIcon} source={require('./../../assets/check.png')}/>
                </View>
            ):null}
        </TouchableOpacity>
    );
}

export default React.memo(CheckBox);