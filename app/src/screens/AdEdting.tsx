import { useNavigation } from '@react-navigation/native';
import { Center } from 'native-base';

import { Button } from '@components/Button';
import { AppNavigatorRoutesProps } from '@routes/app.routes';


export function AdEdting() {
    const navigation = useNavigation<AppNavigatorRoutesProps>(); 

    function handleHome(){
        navigation.navigate('home');
    }

  return (
    <Center flex={1}>
        <Button 
            title={"Criar um Conta"} 
            variant={'gray'} 
            marginTop={10}
            onPress={handleHome}
        />
    </Center>
  );
}