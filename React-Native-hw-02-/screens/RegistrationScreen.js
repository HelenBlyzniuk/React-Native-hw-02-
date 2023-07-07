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
            <TextInput placeholder='Адреса електронної пошти'/>
            <TextInput placeholder='Пароль'/>
            <Button title="Зареєстуватися"/>
            <Text>Вже є акаунт? Увійти</Text>

        </View>
    )
}
const styles = StyleSheet.create({
  
    title:{
        fontSize:30,
        color:'#212121',
    },
    input:{
        height:50,
        border:1,
        backgroundColor:'#/BDBDBD',
        fontSize:16,
        paddingLeft:13,
    },
    form:{
        padding:16,
    }
  });