import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Image, Box, VStack, Center, Text, Pressable } from 'native-base';
import { useForm, Controller } from 'react-hook-form'
import { Eye, EyeSlash, PencilSimpleLine} from 'phosphor-react-native';

import Logo from '@assets/LogoP.png';
import Avatar from '@assets/Avatar.png';
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { AuthNavigatorRoutesProps } from '@routes/auth.routes';



export function SignUp() {
    const { control } = useForm();
    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordConfrim, setShowPasswordConfirm] = useState(false);  
    const navigation = useNavigation<AuthNavigatorRoutesProps>();  

    const toggleShowPassword = () => {
        setShowPassword(!showPassword)
    };

    const toggleShowPasswordConfirm = () => {
        setShowPasswordConfirm(!showPasswordConfrim)
    };    

    function handleNewAccount(){
        navigation.navigate('signIn');
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

                <Box position='relative' marginBottom={5}>
                    <Image
                        source={Avatar}
                        alt="Avatar"
                        w={88} 
                        h={88}
                        borderRadius='full'
                    />
                    <Pressable 
                        onPress={() => { /* ação ao clicar */ }}
                        position='absolute'
                        bottom={0}
                        right={0}
                        p={2}
                        bg="blue.500"
                        borderRadius='full'
                    >
                        <PencilSimpleLine color="white"/>
                    </Pressable >
                </Box>          

                <Controller 
                    control={control}
                    name="name"
                    rules={{required: 'Informe o nome'}}
                    render={({ field: { onChange }}) => (
                        <Input
                            placeholder="Nome"
                            onChangeText={onChange}
                        />
                    )}
                />

                <Controller 
                    control={control}
                    name="email"
                    rules={{required: 'Informe o e-mail'}}
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
                    name="phone"
                    rules={{required: 'Informe o telefone'}}
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
                    rules={{required: 'Informe a senha'}}
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
                    rules={{required: 'Informe a senha'}}
                    render={({ field: { onChange }}) => (
                        <Input
                            placeholder="Confirme a Senha"
                            secureTextEntry={!showPasswordConfrim}
                            onChangeText={onChange}
                            type={showPasswordConfrim ? 'text' : 'password'}
                            InputRightElement={
                                <Pressable  onPress={toggleShowPasswordConfirm} style={{paddingRight: 10}}>
                                    {showPasswordConfrim ? <Eye /> : <EyeSlash/>}
                                </Pressable >
                            }
                        />
                    )}
                />                

                <Button title={"Criar"} variant={'black'} marginTop={10}/>

                <Text fontSize={14} color={"gray.300"} marginTop={10}>
                    Já tem um conta?
                </Text>

                <Button 
                    title={"Ir para o login"} 
                    variant={'gray'} 
                    marginTop={2}
                    onPress={handleNewAccount}
                />

            </Center>
        </VStack>
    );
}