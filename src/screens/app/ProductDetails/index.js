import React from 'react'
import { Image, Linking, Pressable, ScrollView,Text,View } from 'react-native'
import {styles} from './styles'
import { SafeAreaView } from 'react-native-safe-area-context'
import Button from '../../../components/button';
import ImageCarousal from '../../../components/ImageCarousal';


const ProductDetails=({navigation,route})=>{

    const {product}=route.params || null;

    const handleBack=()=>navigation.goBack();

    const onContact=()=>{
        //Make phone call
        Linking.openURL('tel:+916875498745')
        //send email
        Linking.openURL('mailto:app@app.com')
    }


    return (
        <SafeAreaView style={styles.safe}>
            <ScrollView style={styles.container}>
                {product?.images?.length?(
                    <ImageCarousal images={product.images}/>
                ):(
                    <Image source={{uri:product.image}} style={styles.image}/>
                )}
                <View style={styles.content}>
                    <Text style={styles.title}>{product.title}</Text>
                    <Text style={styles.price}>{product.price}</Text>
                    <Text style={styles.description}>{product.description}</Text>
                </View>
                <Pressable onPress={handleBack} style={styles.backContainer}>
                    <Image source={require('../../../assets/icon.png')} style={styles.backImage}/>
                </Pressable>
            </ScrollView>
            <View style={styles.footer}>
                <Pressable style={styles.bookmarkContainer}>
                    <Image source={require('../../../assets/saveHighlight.png')} style={styles.bookmarkImage}/>
                </Pressable>
                <Button title='Contact Seller' onPress={onContact}/>
            </View>
        </SafeAreaView>
    );
}

export default ProductDetails;