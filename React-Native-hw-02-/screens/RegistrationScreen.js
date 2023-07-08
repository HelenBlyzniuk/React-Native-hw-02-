import {
  Text,
  TextInput,
  View,
  Image,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  
} from "react-native";

import { useState } from "react";

export function RegistrationScreen() {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require("./Images/photoBG.png")}
      >
        <TouchableWithoutFeedback
          onPress={() => {
            setIsFocused(false);
          }}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <View style={styles.formWrapper}>
              <View
                style={{ ...styles.form, paddingBottom: isFocused ? 32 : 45 }}
              >
                <View style={styles.imageContainer}>
                 <View style={styles.iconBtn}>
                    <TouchableOpacity>
                      <Image
                        style={styles.icon}
                        source={require("./Images/add.jpg")}
                      />
                    </TouchableOpacity>
                  </View>
                  </View>

                <Text style={styles.title}>Реєстрація</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Логін"
                  onFocus={() => {
                    setIsFocused(true);
                  }}
                />
               
                <TextInput
                  style={styles.input}
                  placeholder="Адреса електронної пошти"
                  onFocus={() => {
                    setIsFocused(true);
                  }}
                />
                
                <View>
                <TextInput
                  style={styles.input}
                  placeholder="Пароль"
                  onFocus={() => {
                    setIsFocused(true);
                  }}
                />
                <TouchableOpacity style={styles.showPassword}>
                  <Text style={styles.showPassword_text}>Показати</Text>
                </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.btn_sign}>
                  <Text style={styles.btn_sign_text}>Зареєстуватися</Text>
                </TouchableOpacity>

                <Text style={styles.sentence}>Вже є акаунт? Увійти</Text>
              </View>
            </View>
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  title: {
    fontSize: 30,
    color: "#212121",
    marginTop: 89,
    marginBottom: 30,
    textAlign:"center",
  },
  input: {
    height: 50,
    width: "100%",
    backgroundColor: "#F6F6F6",
    fontSize: 16,
    paddingLeft: 13,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 6,
    marginBottom: 15,
    color: "#BDBDBD",
  },
  formWrapper: {
    paddingTop: 92,
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: "#FFFFFF",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    justifyContent: "center",
    marginTop:"30%",
    paddingBottom: 43,
  },
  btn_sign: {
    fontSize: 16,
    backgroundColor: "#FF6C00",
    color: "#FFFFFF",
    marginTop: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    width: "100%",
    height: 51,
    marginBottom: 15,
  },
  sentence: {
    textAlign:"center",
    color: "#1B4371",
    fontSize: 16,
    fontWeight: 400,
  },
  showPassword_text:{
    color: "#1B4371",
    fontSize: 16,
    fontWeight: 400,
  },
  showPassword:{
    position:"absolute",
    top:13,
    right:13,
  },
  image: {
    height: 812,
    width: 378,
  },
  btn_sign_text: {
    color: "#FFFFFF",
    fontSize: 16,
  },
  icon: {
    width: 25,
    height: 25,
  },
  iconBtn: {
    position: "absolute",
    left: "90%",
    top: "65%",
  },
  imageContainer:{
    position: "absolute",
    left: "33%",
    top: "-15%",
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },

});



// import React, { useState, useCallback, useEffect } from "react";
// import {
//   StyleSheet,
//   TextInput,
//   View,
//   ImageBackground,
//   Text,
//   TouchableOpacity,
//   Platform,
//   KeyboardAvoidingView,
//   Image,
//   TouchableWithoutFeedback,
//   Keyboard,
//   ScrollView,
// } from "react-native";



// export const RegistrationScreen = () => {
  

//   const [isShowKeyboard, setIsShowKeyboard] = useState(false);
 

//   // useEffect(() => {
//   //   setInterval(() => {
//   //     setVisible(!visible);
//   //   }, 2000);
//   // }, []);

 
//    function handleSubmit() {
   
//       setIsShowKeyboard(false);
//       Keyboard.dismiss();

//     }
  

//   return (
//     <TouchableWithoutFeedback onPress={handleSubmit}>
//       <View style={styles.container}>
//         <ImageBackground
//           source={require("./Images/photoBG.png")}
//           style={styles.image}
//         >
//           <KeyboardAvoidingView
//             behavior={Platform.OS === "ios" ? "padding" : "height"}
//           >
            

//             <View
//               style={{
//                 ...styles.formWrapper, marginTop: isShowKeyboard ? -100 : 0,
                 
//               }}
//             >
//               <View style={styles.imgBox}>
                
//                   <View style={styles.iconBtn}>
//                     <TouchableOpacity >
//                       <Image
//                         style={styles.icon}
//                         source={require("./Images/add.jpg")}
//                       />
//                     </TouchableOpacity>
//                   </View>
//               </View>
//               <Text style={styles.title}>Регистрация</Text>

//               <View
//                 style={{
//                   ...styles.form,
//                   paddingBottom: isShowKeyboard ? 32 : 45,
//                 }}
//               >
//                 <View style={styles.inputuserName}>
//                   <TextInput
//                     style={
//                       styles.input
//                      }
//                     textAlign={"left"}
//                     placeholderTextColor={"#BDBDBD"}
//                     textContentType="userName"
            
//                     placeholder="Логин"
//                     onFocus={() => {
//                       setIsShowKeyboard(true)
                        
//                     }}
                    
                    
//                   />
//                 </View>
//                 <View style={styles.inputMail}>
//                   <TextInput
//                     style={
//                       styles.input
//                       }
//                     textAlign={"left"}
//                     placeholderTextColor={"#BDBDBD"}
                  
//                     placeholder="Адрес электронной почты"
//                     onFocus={() => {
//                       setIsShowKeyboard(true)
                        
//                     }}
                   
                    
//                   />
//                 </View>

//                 <View style={styles.inputPassword}>
//                   <TextInput
//                     style={styles.input
//                     }
//                     textAlign={"left"}
                   
//                     placeholder="Пароль"
//                     onFocus={() => {
//                       setIsShowKeyboard(true)}
                    
//                     }
                    
//                   />
//                   <Text
//                     style={styles.showPass}
//                   >
//                     Показать
//                   </Text>
//                 </View>
//                 <TouchableOpacity
//                   // style={styles.button}
//                   style={{
//                     ...styles.button,
//                     marginTop: isShowKeyboard ? 30 : 43,
//                   }}
//                   activeOpacity={0.8}
//                   onPress={handleSubmit}
//                 >
//                   <Text style={styles.buttonText}>Зарегистрироваться</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity >
//                   <Text style={styles.aside}>Уже есть аккаунт? Войти</Text>
//                 </TouchableOpacity>
//               </View>
//             </View>
//           </KeyboardAvoidingView>
//         </ImageBackground>
//       </View>
//     </TouchableWithoutFeedback>
//   );}
                


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   image: {
//     flex: 1,
//     resizeMode: "cover",
//     justifyContent: "flex-end",
//   },
//   lottie: { width: 100, height: 100 },
//   formWrapper: {
//     paddingTop: 92,
//     paddingLeft: 16,
//     paddingRight: 16,
//     backgroundColor: "#FFFFFF",
//     borderTopRightRadius: 25,
//     borderTopLeftRadius: 25,
//     justifyContent: "center",
//   },
//   imgBox: {
//     position: "absolute",
//     left: "35%",
//     top: "-15%",
//     width: 120,
//     height: 120,
//     backgroundColor: "#F6F6F6",
//     borderRadius: 16,
//   },
//   avatar: {
//     borderRadius: 16,
//     width: "100%",
//     height: "100%",
//   },
//   iconBtn: {
//     position: "absolute",
//     left: "90%",
//     top: "65%",
//   },
//   icon: {
//     width: 25,
//     height: 25,
//   },
//   iconBtnDel: { position: "absolute", left: "85%", top: "65%" },
//   iconDel: {
//     width: 35,
//     height: 35,
//   },
//   title: {
//     fontFamily: "RobotoMedium",
//     fontStyle: "normal",
//     fontSize: 30,
//     lineHeight: 35,
//     letterSpacing: 0.16,
//     color: "#212121",
//     textAlign: "center",
//   },
//   input: {
//     fontFamily: "RobotoRegular",
//     fontStyle: "normal",
//     fontSize: 16,
//     lineHeight: 19,
//     color: "#212121",
//     paddingLeft: 16,
//     borderWidth: 1,
//     height: 50,
//     borderRadius: 8,
//   },
//   inputuserName: {
//     marginTop: 32,
//   },
//   inputMail: {
//     marginTop: 16,
//   },
//   inputPassword: {
//     marginTop: 16,
//   },
//   showPass: {
//     fontFamily: "RobotoRegular",
//     fontStyle: "normal",
//     lineHeight: 19,
//     fontSize: 16,
//     position: "absolute",
//     top: 16,
//     left: 260,
//     color: "#1B4371",
//   },
//   button: {
//     // marginTop: 43,
//     backgroundColor: "#FF6C00",
//     height: 61,
//     borderRadius: 100,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   buttonText: {
//     fontFamily: "RobotoRegular",
//     fontStyle: "normal",
//     lineHeight: 19,
//     color: "#FFFFFF",
//   },
//   aside: {
//     fontFamily: "RobotoRegular",
//     fontStyle: "normal",
//     lineHeight: 19,
//     marginTop: 16,
//     textAlign: "center",
//     color: "#1B4371",
//   },
// });
