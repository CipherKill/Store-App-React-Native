import React, { useState } from 'react';
import { Pressable,Text, View, Image } from 'react-native';
import { styles } from './style';
import Input from '../input'

const Header=({title,onBackPress,onSearch, onLogout, showLogout,showSearch,showBack,keyword})=>{

    const [showSearchInput, setShowSearchInput]=useState(false);

    const handleSearchClick=()=>{
        setShowSearchInput(e=>!e)
    }

    

    return (
        <View>

            <View style={styles.container}>
                {
                    showBack?(
                        <Pressable hitSlop={20} onPress={onBackPress}>
                            <Image source={require('../../assets/icon.png')} style={styles.icon}/>
                        </Pressable>
                    ) : showSearch?(
                        <Pressable hitSlop={20} onPress={handleSearchClick}>
                            <Image source={require('../../assets/search.png')} style={styles.icon}/>
                        </Pressable>
                    ) : (
                        <View style={styles.space}/>
                    )
                }

                <Text style={styles.title}>{title}</Text>

                {
                    showLogout?(
                        <Pressable hitSlop={20} onPress={onLogout}>
                            <Image source={require('../../assets/takeout.png')} style={styles.icon}/>
                        </Pressable>
                    ) : (
                        <View style={styles.space}/>
                    )
                }

            </View>

            {showSearchInput?(
                <Input placeholder='Enter Keyword' onChangeText={onSearch} value={keyword}/>
            ):null}
        </View>
    );
}

export default React.memo(Header);