import { Text, TextInput, View,Image,StyleSheet,ImageBackground,TouchableOpacity,KeyboardAvoidingView } from "react-native";

import { useState } from "react";


export function RegistrationScreen(){
    const [isFocused, setIsFocused]=useState(false);
    return(
       
        <View style={styles.container}>
        <ImageBackground style={styles.image} source={require('./Images/photoBG.png')}>
            
            <KeyboardAvoidingView   behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View style={{...styles.form,marginTop:isFocused?'50%':'70%'}}>
            <Text style={styles.title}>Реєстрація</Text>
            <TextInput style={styles.input} placeholder='Логін' onFocus={()=>{setIsFocused(true)}}/>
            <TextInput style={styles.input} placeholder='Адреса електронної пошти' onFocus={()=>{setIsFocused(true)}}/>
            <TextInput style={styles.input} placeholder='Пароль'onFocus={()=>{setIsFocused(true)}}/>
            <TouchableOpacity style={styles.btn_sign}>
                <Text style={styles.btn_sign_text}>Зареєстуватися</Text>
            </TouchableOpacity>
            
            <Text style={styles.sentense}>Вже є акаунт? Увійти</Text>
            
        </View>
        </KeyboardAvoidingView>
        </ImageBackground>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
    },
  
    title:{
        fontSize:30,
        color:'#212121',
        marginTop:93,
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
        backgroundColor:"#FFFFFF",
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius:25,
       borderTopRightRadius:25,
        
        
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
    icon:{
        width:25,
        height:25,
    },
    photoContainer:{
        flex: 1,
        width:120,
        height:120,
        borderRadius:16,
        border:1,
        backgroundColor:"#1B4371",
        // position:"absolute",
        // top:"50%"
        

    }
    
  });