import React,{Component} from 'react';
import {View,ImageBackground,Image, Button,Text} from 'react-native';
import Home from './Home';




 const Welcome = ()=>
{
    
        return(
            <View 
            style={{flex:1,justifyContent:'center',alignItems:'center',padding:10}}
            >
                <Text style={{fontSize:25}}>
                    {"Welcome To SeqAR"}
                </Text>
                <Text style={{fontSize:25}}>
                    {"Click Here TO get Started"}
                </Text>
                <Button title='Get Started' 
                />
            </View>
        );
    }
// 
// const styles= StyleSheet.create({
//     Container:{
//         flex:1,
//         justifyContent:'centre',
//         alignItems:'centre'
//     }
// });
export default Welcome