import React, {useEffect, useState} from "react";
import {View,Text,ScrollView,FlatList} from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import Header from '../../../components/Header';
import { styles } from "./styles";
import { categories } from "../../../data/categories";
import {products} from "../../../data/products";
import CategoryBox from "../../../components/CategoryBox";
import ProductHomeItem from "../../../components/ProductHomeItem";

const Home=({navigation})=>{

    const [selectedCategory, setSelectedCategory]=useState('0');
    const [filteredProducts, setFilteredProducts]=useState(products);
    const [keyword,setKeyword]=useState();

    
    useEffect(()=>{
        if(selectedCategory!=0 && !keyword){
            setFilteredProducts(()=>products.filter(product=>product.category===selectedCategory));
        }
        else if(selectedCategory!=0 && keyword){
            setFilteredProducts(()=>products.filter(product=>product.category===selectedCategory&&product.title.toLowerCase().includes(keyword.toLowerCase())));
        }
        else if(selectedCategory==0 && keyword){
            setFilteredProducts(()=>products.filter(product=>product.title.toLowerCase().includes(keyword.toLowerCase())));
        }
        else{
            setFilteredProducts(products);
        }

    },[selectedCategory,keyword]);

    const renderCategoryItem=({item,index})=>{
        return (
            <CategoryBox title={item.title} image={item.image} onPress={()=>setSelectedCategory(item.id)} isSelected={item.id===selectedCategory}/>
            )};

    const renderProductItem=({item,index})=>{

        const onProductPress=(product)=>{
            navigation.navigate('ProductDetails',{product})
        }

        return (
            <ProductHomeItem title={item.title} price={item.price} image={item.image} onPress={()=>onProductPress(item)}/>
        );
    }

    return (
        <SafeAreaView style={{height:'100%'}}>
            <View style={styles.container}>
                <Header title='Find All You Need' showSearch onSearch={setKeyword} value={keyword}/>

                <FlatList showsHorizontalScrollIndicator={false} horizontal style={styles.list} data={categories} renderItem={renderCategoryItem} keyExtractor={(item,index)=>String(index)}/>

                <FlatList 
                    numColumns={2} 
                    data={filteredProducts} 
                    renderItem={renderProductItem} 
                    keyExtractor={(item,index)=>String(index)} 
                    style={styles.productList}
                    ListFooterComponent={<View style={{height:200}}/>}
                />
            </View>
        </SafeAreaView>
    );
}


export default React.memo(Home);