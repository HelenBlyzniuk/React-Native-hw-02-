import { Text, TextInput, View,Button,StyleSheet,Image } from "react-native";


export function RegistrationScreen(){
    return(
        <View style={styles.form}>
            <Image/>
            <View>
                <Image/>
            </View>

            <Text style={styles.title}>Реєстрація</Text>
            <TextInput style={styles.input} placeholder='Логін'/>
            <TextInput style={styles.input} placeholder='Адреса електронної пошти'/>
            <TextInput style={styles.input} placeholder='Пароль'/>
            <Button title="Зареєстуватися" style={styles.btn_sign}/>
            
            <Text style={styles.sentense}>Вже є акаунт? Увійти</Text>

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
        borderColor: "1px solid #E8E8E8",
        borderRadius: 6,
        marginBottom:15,
        color:'#BDBDBD ',
    },
    form:{
        padding:16,
    },
    btn_sign:{
         
        fontSize:16,
        backgroundColor:"#FF6C00",
        color:"#FFFFFF",
        marginTop:40,  
    },
    sentense:{
        color:"#1B4371",
        fontSize:16,
        fontWeight:400,
    }
  });