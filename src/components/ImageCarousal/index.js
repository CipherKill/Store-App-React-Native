import React,{useState} from 'react'
import { Image, FlatList, View, Text, Dimensions } from 'react-native';
import {styles} from './style'

const ImageCarousal=({images})=>{

    const {height,width}=Dimensions.get('window')
    const [activeIndex,setActiveIndex]=useState(0);

    const handleScroll=(e)=>{
        const horizontalOffset=e.nativeEvent.contentOffset.x;
        const index=Math.round(horizontalOffset/width)
        setActiveIndex(index);
    };

    const renderImage=({item})=>{
        return (
            <Image source={{uri:item}} style={styles.image}/>
        );
    }

    return (
        <View>
            <FlatList horizontal pagingEnabled onMomentumScrollEnd={handleScroll} data={images} renderItem={renderImage} keyExtractor={(a,index)=>String(index)}/>
            <View style={styles.pagination}>
                {images.map((_,i)=>(
                    <View key={i} style={[styles.paginationLine, (i===activeIndex)?styles.activeLine:{}]}/>
                ))}
            </View>
        </View>
    );
}

export default ImageCarousal;