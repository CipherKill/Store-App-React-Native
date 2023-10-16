import React from "react";
import {View,Text,FlatList} from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import {products} from '../../../data/products'
import {styles} from './styles';
import FavoriteItem from "../../../components/FavoriteItem";
import Header from "../../../components/Header"

const Favorites=({navigation})=>{

    const renderItem=({item})=>{

        const onProductPress=()=>{
            navigation.navigate('ProductDetails',{product:item})
        }
        

        return (<FavoriteItem onPress={onProductPress} title={item.title} price={item.price} image={item.image}/>);
    }

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Header title="Favorites" showLogout/>
                <FlatList data={products} renderItem={renderItem} keyExtractor={(items,index)=>String(index)} style={styles.listContainer}/>
            </View>
        </SafeAreaView>
    );
}


export default Favorites;