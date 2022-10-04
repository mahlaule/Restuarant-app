import React, { useState, useEffect } from 'react';

import { View, Text, Button, StyleSheet,Image,ImageBackground, TextInput } from 'react-native';
import Header from '../components/Header';

import { auth } from '../components/config/firebase'
import { signInWithEmailAndPassword , sendPasswordResetEmail} from 'firebase/auth';

const Login = ({navigation}) => {
   

    //states
    //login states
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //error state
    const [errMsg, setErrMsg] = useState('');

    useEffect(()=>{
        if (auth.currentUser) {
            navigation.navigate('Home');
        }
    }, [])

    //function to log in
    const loginWithEmail = async() => {
        //error handling
        //check if email is empty
        if (email === '') {
            //problem
            setErrMsg('Email is required to log in');
        } else {
            //check if password is empty
            if (password === '') {
                //problem
                setErrMsg('Password is required to login')
            } else {
                await signInWithEmailAndPassword(auth, email, password).then(
                    userCridential => {
                        navigation.navigate('Home')
                    }
                ).catch(
                    err => {
                        setErrMsg(err.message);
                    }
                )
            }
        }
    }
    const forgotPass = ()=>{
        const auth = getAuth();
        sendPasswordResetEmail(auth, email)
          .then(() => {
            // Password reset email sent!
            // ..
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
          });
    }



  return (
    <View style={styles.container}>
        
   <Image source={require('../assets/log.jpg')} style={{height:200,width:200, marginLeft:15,borderRadius:50}} />
    <Text style={{color:"#f47174",fontWeight:'bold',fontSize:20}}>LOGIN HERE:</Text>
        <View>
            {errMsg === '' ? (<Text style={styles.goodErr}></Text>) : (<Text style={styles.badErr}>{errMsg}</Text>)}
        </View>
        <View>
            <View>
                <Text>Email</Text>
                <TextInput onChangeText={value => setEmail(value)}style={{backgroundColor:"white",width:200,padding:10}} />
            </View>

            <View>
                <Text>Password:</Text>
                <TextInput onChangeText={value => setPassword(value)} style={{backgroundColor:"white",width:200,marginBottom:5,padding:10}}/>
            </View>

            <Button title='Login' onPress={loginWithEmail} />
            <View>
                <Text>Don't have an account?</Text>
                <Button title='Register' onPress={() => navigation.navigate('Register')} />
            </View>
            <View>
              
            </View>

        </View>
        <View>
        
   
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
        width:650,
        height:700,
        backgroundColor:"#F0FFF0",
        alignItems:"center"
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

export default Login