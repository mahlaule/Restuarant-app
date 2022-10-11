import { View,Card, Text, StyleSheet, TextInput, Button,Image } from 'react-native';
import React, {useState} from 'react';
import Header from '../components/Header'

import {db, auth} from '../components/config/firebase'
import { addDoc, collection } from 'firebase/firestore';


const AddCart = ({navigation}) => {















    return(
        <View style={styles.container}>

<Text style={styles.welcome}>ORDER HERE</Text>


<View style={{alignItems:"center"}}>
    <Text style={{textDecorationStyle:"dotted",fontSize:40,color:"orange",textDecorationColor:"blue"}}></Text>
    <View style={{flexDirection:"row"}}>
        <View style={styles.cont}>
    <Image source={require('../assets/chic.jpg')} style={{height:150,width:200,borderRadius:50}}/>
    <Text>Chicken</Text>
    </View>
    <View style={styles.cont2}>
    <Image source={require('../assets/salad.jpg')} style={{height:150,width:200,borderRadius:50}}/>
    <Text>salad</Text>
    </View>


    </View>
</View>
<View style={{alignItems:"center"}}>
    
    <View style={{flexDirection:"row"}}>
        <View style={styles.cont3}>
    <Image source={require('../assets/korean.jpg')} style={{height:150,width:200,borderRadius:50}}/>
    <Text>Korean</Text>

    <Text>price:R50</Text>
    <Button title='ADD CART' onPress={() => navigation.navigate('products')} />

    </View>
    <View style={styles.cont4}>
    <Image source={require('../assets/steak.jpg')} style={{height:150,width:200,borderRadius:50}}/>
    <Text Style={styles.text}>steak</Text>
    <Text>price:R69</Text>

    <Button title='ADD CART' onPress={() => navigation.navigate('Product')} />


    </View>

    </View>
</View>

          
            
    
    </View>

)
    }







const styles = StyleSheet.create({
    container: {
        width:650,
        height:700,
        backgroundColor:'white'
    },
    welcome:{
        fontSize:40,
        marginLeft:70,
        textTransform:'capitalize'
    },
    cont:{
        backgroundColor:"#ACD1AF",
        width: 250,
        height:200,
        marginBottom:40,
        borderRadius:25
        
    },
    cont2:{
        backgroundColor:"#808080",
        width: 250,
        height:200,
        marginLeft:100,
        borderRadius:25
        
    },
    cont3:{
        backgroundColor:"#CBC3E3",
        width: 250,
        height:200,
        borderRadius:25
        
    },
    cont4:{
        backgroundColor:"#EA9014",
        width: 250,
        height:200,
        marginLeft:100,
        borderRadius:25
    },
    text:{
        fontSize:30,
        color:'white',
        backgroundColor:"blue"
    }
    
})






















export default AddCart