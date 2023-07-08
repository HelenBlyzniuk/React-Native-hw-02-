import { Text, TextInput, View,StyleSheet,ImageBackground,TouchableOpacity,KeyboardAvoidingView } from "react-native";

import { useState } from "react";

export function LoginScreen(){
    const [isFocused, setIsFocused]=useState(false);
    return(
   
         <View>
         <ImageBackground style={styles.image} source={require('../Images/photoBG.png')}>
            
             <KeyboardAvoidingView   behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
         <View style={{...styles.form,paddingBottom:isFocused?50:143}}>
             <Text style={styles.title}>Увійти</Text>
            
             <TextInput style={styles.input} placeholder='Адреса електронної пошти' onFocus={()=>{setIsFocused(true)}}/>
             <TextInput style={styles.input} placeholder='Пароль'onFocus={()=>{setIsFocused(true)}}/>
             <TouchableOpacity style={styles.btn_sign}>
                 <Text style={styles.btn_sign_text}>Увійти</Text>
             </TouchableOpacity>
             
             <Text style={styles.sentence}>Немає акаунту? Зареєструватися</Text>
             
         </View>
         </KeyboardAvoidingView>
         </ImageBackground>
         </View>

    )
}
const styles = StyleSheet.create({
  
    title:{
        fontSize:30,
        color:'#212121',
        marginTop:32,
        marginBottom:30,
    },
    input:{
        height:50,
        width:"100%",
        backgroundColor:'#F6F6F6',
        fontSize:16,
        paddingLeft:13,
        borderWidth: 1,
        borderColor: "#E8E8E8",
        borderRadius: 6,
        marginBottom:15,
        color:'#BDBDBD',
    },
    form:{
        padding:16,
        marginBottom:0,
        marginTop:"auto", 
        backgroundColor:"#FFFFFF",
        borderRadius:25,
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    btn_sign:{
        fontSize:16,
        backgroundColor:"#FF6C00",
        color:"#FFFFFF",
        marginTop:40, 
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:100,
        width:"100%",
        height:51,
        marginBottom:15,
       
    },
    sentense:{
        color:"#1B4371",
        fontSize:16,
        fontWeight:400,
        
    },
    image:{
       height:812,
       width:375,
    },
    btn_sign_text:{
        color:"#FFFFFF",
        fontSize:16,
    },
  
  });