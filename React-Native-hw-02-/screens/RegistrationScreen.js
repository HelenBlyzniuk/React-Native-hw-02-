import { Text, TextInput, View,Image,StyleSheet,ImageBackground,TouchableOpacity,KeyboardAvoidingView } from "react-native";




export function RegistrationScreen(){
    return(
        <View>
        <ImageBackground style={styles.image} source={require('./Images/photoBG.png')}>
            <View style={styles.photoContainer}>
                <Image source={require('./Images/add.jpg')} style={styles.icon}/>
            </View>
            <KeyboardAvoidingView>
        <View style={styles.form}>
            <Text style={styles.title}>Реєстрація</Text>
            <TextInput style={styles.input} placeholder='Логін'/>
            <TextInput style={styles.input} placeholder='Адреса електронної пошти'/>
            <TextInput style={styles.input} placeholder='Пароль'/>
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
        marginBottom:64,
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
        color:"#1B4371",

    }
    
  });