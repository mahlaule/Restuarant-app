import React from "react";
import { View,Card,FlatList,SafeAreaView, Text, StyleSheet, TextInput, Button,Image } from 'react-native';


const products =[


    {_id:1,name:'item  price',price:180,quantity:0},
    {_id:2,name:'item 2',price:200,quantity:0},
    {_id:3,name:'item 3',price:70,quantity:0}
]

class ListItem extends React.Component{
   
    render(){
        const{item}= this.props
        const{quantity}= this.setState;

        return(
            <View style ={{flexDirection:"row", justifyContent:'space-between', alignItems:'center',backgroundColor:'#ACD1AF'}}>
                <View style={{flexDirection:"row", flex:"1",alignItems:'center'}}>
                <Image source={require('../assets/korean.jpg')} style={{height:150,width:200,borderRadius:50,marginTop:30}}/>
                    <Text>{item.name}- </Text>
                    
                    <Text>{item.price}</Text>
                </View>
                <View style={{flexDirection:"row",flex:"1",alignItems:'center',backgroundColor:"#ACD1AF"}}></View>
                <Button title="subtract" onPress={this.props.onSubtract}/>
                <Text>{item.quantity}</Text>
                <Button title="Add" onPress={this.props.onAdd}/>
            
               

            </View>
        )
    }

}
class Product extends React.Component{

    state ={
        products,
    }
    onSubtract = (item, index)=>{
        const products =[...this.state.products];
        products[index].quantity -= 1;
        this.setState({products})
    }
    onAdd = (item, index)=>{
    
        const products =[...this.state.products];
        products[index].quantity += 1;
        this.setState({products})
    }
    render(){
        const{products}= this.state;
        let totalQuantity = 0;
        let totalPrice = 0;
        products.forEach((item)=>{
            totalQuantity += item.quantity;
            totalPrice += item.quantity * item.price;

        })


        return(
          
            <SafeAreaView style={{flex:"1",backgroundColor:"#ACD1AF"}}>
            <FlatList data={this.state.products}
            renderItem={({item, index}) =>(<ListItem item={item}
                onSubtract={() => this.onSubtract(item, index)}
                onAdd={()=> this.onAdd(item, index)}
            
            
            />
            
            
            )}
            keyExtractor={item => item._id}/>

            <Text style={{fontSize:30, color:"red"}}>total quantity:{totalQuantity}</Text>
            <Text style={{fontSize:35, color:"red"}}>total price:{totalPrice}</Text>
           
  </SafeAreaView>

        )
    }
}

export default Product;