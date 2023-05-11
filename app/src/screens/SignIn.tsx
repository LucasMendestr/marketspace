import { VStack, Image, Text, Center, Heading, } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { useForm, Controller } from 'react-hook-form'
import { useState } from "react";
import { Eye, EyeSlash } from 'phosphor-react-native';

import Logo from '@assets/LogoG.png';
import { Input } from "@components/Input";
import { TouchableOpacity } from "react-native";
import { Button } from "@components/Button";
import { AuthNavigatorRoutesProps } from '@routes/auth.routes';


export function SignIn() {
    const { control } = useForm();
    const [showPassword, setShowPassword] = useState(false);
    const navigation = useNavigation<AuthNavigatorRoutesProps>();

    const toggleShowPassword = () => {
        setShowPassword(!showPassword)
    };

    function handleNewAccount(){
        navigation.navigate('signUp');
    }
    
    return (
        <VStack flex={1} bg={"gray.600"}>
            <Center my={24} px={4}>
                <Image 
                    source={Logo}
                    alt="Logo"
                    w={90}
                    h={60}
                />

                <Text fontSize={24} fontWeight="bold">
                    marketspace
                </Text>

                <Text fontSize={14} color={"gray.300"}>
                    Seu espaço de compra e venda
                </Text>

                <Heading color={"gray.200"} marginTop={20} marginBottom={2} fontSize={14}>
                    Acesse sua conta
                </Heading>                

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
                    name="password"
                    rules={{required: 'Informe a senha'}}
                    render={({ field: { onChange }}) => (
                        <Input
                            placeholder="Senha"
                            secureTextEntry={!showPassword}
                            onChangeText={onChange}
                            type={showPassword ? 'text' : 'password'}
                            InputRightElement={
                                <TouchableOpacity onPress={toggleShowPassword} style={{paddingRight: 10}}>
                                    {showPassword ? <Eye /> : <EyeSlash/>}
                                </TouchableOpacity>
                            }
                        />
                    )}
                />

                <Button title={"Entrar"} variant={'blue'} marginTop={10}/>

                <Text fontSize={14} color={"gray.300"} marginTop={5}>
                    Ainda não tem acesso?
                </Text>

                <Button 
                    title={"Criar um Conta"} 
                    variant={'gray'} 
                    marginTop={10}
                    onPress={handleNewAccount}
                />

            </Center>
        </VStack>
    );
}