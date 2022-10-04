import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Header = ({title}) => {
  return (
    <View style={styles.container}>
        <Text>{title}</Text>
        <Text> To the restuarant app</Text>
    </View>
  )
}


const styles = StyleSheet.create({
    container:{
        padding: 15,
        
    },
})

export default Header