import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { StyleSheet, View } from 'react-native';
// import { RegistrationScreen } from './screens/RegistrationScreen';
import { LoginScreen } from './screens/LoginScreen/LoginScreenForm';

export default function App() {
  const [fontsLoaded] = useFonts({
    'RobotoBold': require("./screens/fonts/Roboto-Black.ttf"),
    'RobotoRegular': require("./screens/fonts/Roboto-Regular.ttf"),
    'RobotoMedium': require("./screens/fonts/Roboto-Medium.ttf"),
  });
  return (
    <View style={styles.container}>
      
      <StatusBar style="auto" />
      {/* <RegistrationScreen/> */}
      <LoginScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop:20,
  },
});
