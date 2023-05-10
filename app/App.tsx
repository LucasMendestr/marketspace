import { useFonts, Karla_400Regular, Karla_700Bold } from '@expo-google-fonts/karla';
import { StatusBar } from 'react-native';
import { NativeBaseProvider } from "native-base";
import { Loading } from "@components/Loading";
import { THEME } from './src/theme';
import { Routes } from '@routes/index';
import { SignUp } from '@screens/SignUp';
import { SignIn } from '@screens/SignIn';
import { Home } from '@screens/Home';
import { MyAds } from '@screens/MyAds';

export default function App() {
  const [fontsLoaded] = useFonts({ Karla_400Regular, Karla_700Bold});
  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar 
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <Routes /> : <Loading />}
    </NativeBaseProvider>
  );
}