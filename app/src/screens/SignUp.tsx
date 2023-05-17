import { Alert } from 'react-native';
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Image, Box, VStack, Center, Text, Pressable } from 'native-base';
import { useForm, Controller } from 'react-hook-form'
import { Eye, EyeSlash, PencilSimpleLine} from 'phosphor-react-native';
import * as yup from 'yup';
import * as ImagePicker from 'expo-image-picker';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import * as FileSystem from 'expo-file-system';

import { api } from "@services/api";
import Logo from '@assets/LogoP.png';
import Avatar from '@assets/Avatar.png';
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { AuthNavigatorRoutesProps } from '@routes/auth.routes';

type FormDataProps = {
    name: string;
    email: string;
    tel: string;
    password: string;
    password_confirm: string;
  }

  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
  
  const signUpSchema = yup.object({
    name: yup.string().required('Informe o nome.'),
    email: yup.string().required('Informe o e-mail').email('E-mail inválido.'),
    //tel: yup.string().required('Informe o Telefone').matches(phoneRegExp, 'Phone number is not valid'),
    password: yup.string().required('Informe a senha').min(6, 'A senha deve ter pelo menos 6 dígitos.'),
    password_confirm: yup.string().required('Confirme a senha.').oneOf([yup.ref('password')], 'A confirmação da senha não confere')
  });


export function SignUp() {
    const { control, handleSubmit, formState: { errors } } = useForm<FormDataProps>({
        resolver: yupResolver(signUpSchema),
      });
    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordConfrim, setShowPasswordConfirm] = useState(false);  
    const navigation = useNavigation<AuthNavigatorRoutesProps>();  
    const [uri, setUri] = useState<string>();

    const toggleShowPassword = () => {
        setShowPassword(!showPassword)
    };

    const toggleShowPasswordConfirm = () => {
        setShowPasswordConfirm(!showPasswordConfrim)
    };    

    function handleGoBack(){
        navigation.navigate('signIn');
    }

    
    async function handleSignUp({ name, email, password, tel }: FormDataProps) {
        const userForm = new FormData();
        if (uri) {
            console.log(uri);
            userForm.append('avatar', uri);
          }
        userForm.append('name', name);
        userForm.append('email', email);
        userForm.append('password', password);
        userForm.append('tel', tel);

        try {
            console.log(userForm);
            const response = await api.patch('/users', userForm, {
                headers: {
                  'Content-Type': 'multipart/form-data'
                }
              });


            // const response = await api.post('/users', userForm);
            console.log(response.data);
          } catch (error) {
            if(axios.isAxiosError(error)) {
              Alert.alert(error.response?.data.message);
            }
          }
    }

    async function handleUserPhotoSelected(){
        try{
            const photoSelected = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                quality: 1,
                aspect: [4, 4],
                allowsEditing: true,
              });
          
              if(photoSelected.canceled) {
                return;
              }
              if(photoSelected.assets[0].uri) {
                setUri(photoSelected.assets[0].uri);
                }
        } catch (error) {
            console.log(error)
        } finally {
            // setPhotoIsLoading(false)
        }
    }


    return (
        <VStack flex={1} bg={"gray.700"}>
            <Center my={8} px={4}>
                <Image 
                    source={Logo}
                    alt="Logo"
                    w={59}
                    h={39}
                />

                <Text fontSize={24} fontWeight="bold">
                    Boas Vindas
                </Text>

                <Text fontSize={14} color={"gray.300"} textAlign="center" alignSelf="center">
                   Crie sua conta e use o espaço para comprar itens variados e vender seus produtos
                </Text>

                <Pressable onPress={handleUserPhotoSelected}>
                    <Box position='relative' marginBottom={5}>
                        <Image
                        source={Avatar}
                        alt="Avatar"
                        w={88} 
                        h={88}
                        borderRadius='full'
                        />
                        <Pressable 
                        onPress={() => {handleUserPhotoSelected}}
                        position='absolute'
                        bottom={0}
                        right={0}
                        p={2}
                        bg="blue.500"
                        borderRadius='full'
                        >
                        <PencilSimpleLine color="white"/>
                        </Pressable>
                    </Box>
                    </Pressable>       

                <Controller 
                    control={control}
                    name="name"
                    render={({ field: { onChange }}) => (
                        <Input
                            placeholder="Nome"
                            onChangeText={onChange}
                        />
                    )}
                />

                <Text color="red.500">{errors.name?.message}</Text>

                <Controller 
                    control={control}
                    name="email"
                    render={({ field: { onChange }}) => (
                        <Input
                            placeholder="E-mail"
                            keyboardType="email-address"
                            autoCapitalize="none"
                            onChangeText={onChange}
                        />
                    )}
                />

                <Controller 
                    control={control}
                    name="tel"
                    render={({ field: { onChange }}) => (
                        <Input
                            placeholder="Telefone"
                            keyboardType="phone-pad"
                            onChangeText={onChange}
                        />
                    )}
                />                                  

                <Controller 
                    control={control}
                    name="password"
                    render={({ field: { onChange }}) => (
                        <Input
                            placeholder="Senha"
                            secureTextEntry={!showPassword}
                            onChangeText={onChange}
                            type={showPassword ? 'text' : 'password'}
                            InputRightElement={
                                <Pressable  onPress={toggleShowPassword} style={{paddingRight: 10}}>
                                    {showPassword ? <Eye /> : <EyeSlash/>}
                                </Pressable >
                            }
                        />
                    )}
                />

                <Controller 
                    control={control}
                    name="password_confirm"
                    render={({ field: { onChange }}) => (
                        <Input
                            placeholder="Confirme a Senha"
                            secureTextEntry={!showPasswordConfrim}
                            onChangeText={onChange}
                            type={showPasswordConfrim ? 'text' : 'password'}
                            returnKeyType="send"
                            InputRightElement={
                                <Pressable  onPress={toggleShowPasswordConfirm} style={{paddingRight: 10}}>
                                    {showPasswordConfrim ? <Eye /> : <EyeSlash/>}
                                </Pressable >
                            }
                        />
                    )}
                />                

                <Button 
                    title={"Criar"} 
                    variant={'black'} 
                    marginTop={10}
                    onPress={handleSubmit(handleSignUp)}
                />

                <Text fontSize={14} color={"gray.300"} marginTop={10}>
                    Já tem um conta?
                </Text>

                <Button 
                    title={"Ir para o login"} 
                    variant={'gray'} 
                    marginTop={2}
                    onPress={handleGoBack}
                />

            </Center>
        </VStack>
    );
}