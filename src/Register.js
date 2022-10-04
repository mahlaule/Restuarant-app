import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput,Image, Button } from 'react-native';
import Header from '../components/Header'
import { auth } from '../components/config/firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth';

const Register = ({navigation}) => {
    //states for error
    const [errMsg, setErrMsg] = useState('');

    //states for new user
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    useEffect(()=>{
        if (auth.currentUser) {
            navigation.navigate('Home');
        } 
    }, [])

    //function to register new user with email and password
    const registerWithEmail = async() => {
        //check if inputs are empty
        if (email === '') {
            //email empty
            setErrMsg('Email is required to register');
            alert('Email is required to register');
        } else {
            if (password === '') {
                //new password empty
                setErrMsg('Password is required to register');
            } else {
                if (confirmPassword === '') {
                    //confirm password empty
                    setErrMsg('Confirm password is required to register');
                } else {
                    if (password !== confirmPassword) {
                        //pasword does not match
                        setErrMsg('Passwords entered does not match');
                    } else {
                        //good to go
                        await createUserWithEmailAndPassword(auth, email, password).then(
                            userCridential => {
                                setErrMsg('');
                                navigation.navigate('Home');
                            }
                        ).catch(
                            err => {
                                setErrMsg(err.message);
                            }
                        )
                    }
                }
            }
        }
    }
  return (
    
    <View style={styles.container}>
        <Image source={require('../assets/log.jpg')} style={{height:200,width:200, marginLeft:15,borderRadius:50}} />
        <Text style={{color:"#f47174",fontWeight:'bold',fontSize:20}}>Register HERE:</Text>
        {errMsg !== '' ? (<View><Text style={styles.badErr}>{errMsg}</Text></View>) : (<View><Text style={styles.goodErr}></Text></View>) }
        <View>
            <View>
                <Text>Email</Text>
                <TextInput onChangeText={value => setEmail(value)} />
            </View>

            <View>
                <Text>Password:</Text>
                <TextInput onChangeText={value => setPassword(value)}style={{backgroundColor:"white",width:200,marginBottom:5,padding:10}} />
            </View>

            <View>
                <Text>Confirm Password:</Text>
                <TextInput onChangeText={value => setConfirmPassword(value)}style={{backgroundColor:"white",width:200,marginBottom:5,padding:10}} />
            </View>
            <Button title='Register' onPress={registerWithEmail} />
            <View>
                <Text>Already have an account?</Text>
                <Button title='Login' onPress={() => navigation.navigate('Login')} />
            </View>

        </View>
    </View>

  )
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
        alignItems:"center",
        backgroundColor:"#F0FFF0",
    },
    badErr: {
        backgroundColor: '#ff0000',
        color: '#ffffff',
    },
    goodErr: {
        backgroundColor: '#00ff00',
        color: '#ffffff',
    },
})

export default Register