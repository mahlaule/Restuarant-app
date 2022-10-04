

import { View, Text, StyleSheet, TextInput, Button,Image } from 'react-native';
import Header from '../components/Header'



const Home = ({navigation}) => {




return(
    <View style={styles.container}>

<Text style={styles.welcome}>welcome to my restuarant app</Text>

<View style={{flexDirection:"row"}}>
    <View style={styles.pics}>
        <Text style={{marginLeft:30}} >Burgers</Text>
<Image source={require('../assets/shopping.png')} style={{height:100,width:130}} />
</View>
<View>
<Text style={{marginLeft:30}} >Drinks</Text>
<Image source={require('../assets/drink.jpg')} style={{height:100,width:130, marginLeft:15}} />

</View>
<View>
<Text style={{marginLeft:30}} >Dessert</Text>
<Image source={require('../assets/dess.jpg')} style={{height:100,width:130, marginLeft:15}} />
</View>
<View>
<Text style={{marginLeft:30}} >Appertizer</Text>
<Image source={require('../assets/appe.jpg')} style={{height:100,width:130, marginLeft:15}} />
</View>
</View>
<View style={{alignItems:"center"}}>
    <Text style={{textDecorationStyle:"dotted",fontSize:40,color:"orange",textDecorationColor:"blue"}}>Main Course</Text>
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
    </View>
    <View style={styles.cont4}>
    <Image source={require('../assets/steak.jpg')} style={{height:150,width:200,borderRadius:50}}/>
    <Text>steak</Text>
    </View>


    </View>
</View>
    <Button title='Order Now' onPress={() => navigation.navigate('List')} />
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
    }
    
})

export default Home