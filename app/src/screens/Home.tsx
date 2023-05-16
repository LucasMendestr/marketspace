import React, { useState } from "react";
import { Center, VStack, Text, Box, HStack, Pressable, Modal, View, Switch, Checkbox} from "native-base";
import { Tag, ArrowRight, MagnifyingGlass, Sliders, XCircle, X } from 'phosphor-react-native';
import { FlatList } from "react-native";

import { Button } from "@components/Button";
import { UserPhoto } from "@components/UserPhoto";
import { Input } from "@components/Input";
import Avatar from '@assets/Avatar.png';
import { AddsTile } from "@components/AddsTile";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";

export function Home() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isNewAcepted, setIsNewAcepted] = useState(false);
    const [isUsedAcepted, setIsUsedAcepted] = useState(false);
    const [isTradeAcepted, setIsTradeAcepted] = useState(false);
    const [isBoletoAcepted, setIsBoletoAcepted] = useState(false);
    const [isPixAcepted, setIsPixAcepted] = useState(false);
    const [isCashAcepted, setIsCashAcepted] = useState(false);
    const [isCredidCardAcepted, setIsCreditCardAcepted] = useState(false);
    const [isDebitCardAcepted, setIsDebitCardAcepted] = useState(false);
    const navigation = useNavigation<AppNavigatorRoutesProps>(); 

    const [adds, setAdds] = useState([
        {
          title: 'Luminária pendente',
          price: '20,00',
        },
        {
          title: 'Luminária pendente',
          price: '20,00',
        },
        {
          title: 'Luminária pendente',
          price: '20,00',
        },
      ]);


      function goto(){
          navigation.navigate('adDetails');
      }


      function handleModalOff () {
        setIsModalOpen(false);
      }

      function handleNewAcepted () {
        setIsNewAcepted(!isNewAcepted);
      }

      function handleUsedAcepted () {
        setIsUsedAcepted(!isUsedAcepted);
      }

      function handleTradedAcepted () {
        setIsTradeAcepted(!isTradeAcepted);
      }

      function handleBoletoAcepted () {
        setIsBoletoAcepted(!isBoletoAcepted)
      }

      function handlePixAcepted () {
        setIsPixAcepted(!isPixAcepted)
      }

      function handleCashAcepted () {
        setIsCashAcepted(!isCashAcepted)
      }

      function handleCreditCardAcepted () {
        setIsCreditCardAcepted(!isCredidCardAcepted)
      }

      function handleDebitCardAcepted () {
        setIsDebitCardAcepted(!isDebitCardAcepted)
      }
      
    return (
        <VStack flex={1} bg={"gray.700"} alignItems="center">
            <VStack marginTop={8}>
                <HStack alignItems="center">
                    <UserPhoto 
                        source={Avatar}
                        size={16}
                        alt="Imagem do usuário"
                        mr={4}
                    />

                    <VStack flex={1} alignItems="center" justifyContent="center" ml={-10}>
                        <Text>
                            Boas vindas,
                        </Text>

                        <Text>
                            Maria!
                        </Text>
                    </VStack>

                    <Button title="+ Criar anuncio" variant={'black'} w={139}/>
                </HStack>

                <Text textAlign="left" fontSize={14} fontWeight="regular" mt={10}>
                    Seus produtos anunciados para venda
                </Text>

                <Center backgroundColor='rgba(100, 122, 199, 0.1)' w={327} h={66} >
                    <HStack alignItems="center" >
                        <Box paddingLeft={2}>
                            <Tag />
                        </Box>

                        <VStack flex={1} ml={5}>
                            <Text fontSize={20} fontWeight={"bold"}>4</Text>
                            <Text fontSize={12}>anúncios ativos</Text>
                        </VStack>

                        <Pressable paddingRight={2}>
                            <HStack>
                                <Text paddingRight={2} color={"blue.700"} fontSize={12}>
                                    Meus anúncios
                                </Text>
                                <ArrowRight color="rgba(100, 122, 199, 1)" size={16}/>
                            </HStack>
                        </Pressable>
                    </HStack>
                </Center>

                <Text marginTop={8} textAlign="left">
                    Compre produtos variados
                </Text>

                <Input
                    placeholder="Buscar anúncio"
                    type='text'
                    backgroundColor={"white"}
                    borderWidth={0}
                    InputRightElement={
                        <>
                            <Pressable style={{ paddingRight: 10}}>
                                <MagnifyingGlass weight="bold"/>
                            </Pressable>
                            <Box width="1px" bg="gray.500" height="60%" />
                            <Pressable style={{ paddingRight: 10, paddingLeft: 10 }} onPress={() => setIsModalOpen(true)}>
                                <Sliders weight="bold"/>
                            </Pressable>
                        </>
                    }
                />
            </VStack>

            <FlatList
                data={adds}
                renderItem={({ item }) => (
                    <AddsTile title={item.title} price={item.price} onPress={goto}/>
                )}
                numColumns={2}
                keyExtractor={(item, index) => index.toString()}
                style={{width: "85%"}}
            />

            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} safeAreaTop={true}>
                <Modal.Content width={'100%'} marginBottom={0} marginTop={'auto'} bg={'white'} justifyContent={'flex-end'}>
                    <VStack padding={6}>
                        <HStack justifyContent={'space-between'} marginBottom={6}>
                            <Text fontSize={20} fontWeight={'bold'} color={'gray.100'}>
                                Filtrar anúncios
                            </Text>

                            <Pressable onPress={handleModalOff}>
                                <X color="#9F9BA1"/>
                            </Pressable>
                        </HStack>

                        <Text fontSize={14} fontWeight={'bold'} mb={3}>Condição</Text>

                        <HStack alignItems={'center'} mb={6}>
                            <Pressable 
                                bg={'blue.500'} 
                                flexDirection={'row'} 
                                alignItems={'center'} 
                                borderRadius={9999} 
                                h={28} 
                                w={76} 
                                justifyContent={'center'} 
                                onPress={handleNewAcepted}
                                marginRight={2}
                            >
                                <Text mx={1}>Novo</Text>
                                {isNewAcepted ? 
                                    <XCircle weight="fill" color="#EDECEE" size={15}/>: 
                                    <View/>
                                }
                            </Pressable>

                            <Pressable 
                                bg={'blue.500'} 
                                flexDirection={'row'} 
                                alignItems={'center'} 
                                borderRadius={9999} 
                                h={28} 
                                w={76} 
                                justifyContent={'center'} 
                                onPress={handleUsedAcepted}
                            >
                                <Text mx={1}>Usado</Text>
                                { isUsedAcepted ? 
                                    <XCircle weight="fill" color="#EDECEE" size={15}/>: 
                                    <View/>
                                }
                            </Pressable>
                        </HStack>

                        <Text fontSize={14} fontWeight={'bold'}>Aceita troca?</Text>

                        <Switch right={280} isChecked={isTradeAcepted} onToggle={handleTradedAcepted} mb={6}/>

                        <Text fontSize={14} fontWeight={'bold'} mb={3}>Meios de pagamento aceitos</Text>
                            
                        <HStack mb={2}>
                            <Checkbox boxSize={18} size={18} isChecked={isBoletoAcepted} colorScheme="blue" value={"Boleto"} onChange={handleBoletoAcepted} aria-label="Boleto"/>
                            <Text fontSize={16} ml={2}>Boleto</Text>
                        </HStack>

                        <HStack mb={2}>
                            <Checkbox boxSize={18} isChecked={isPixAcepted} colorScheme="blue" value={"Boleto"} onChange={handlePixAcepted} aria-label="Pix"/>
                            <Text fontSize={16} ml={2}>Pix</Text>
                        </HStack>

                        <HStack mb={2}>
                            <Checkbox boxSize={18} isChecked={isCashAcepted} colorScheme="blue" value={"Boleto"} onChange={handleCashAcepted} aria-label="Dinheiro"/>
                            <Text fontSize={16} ml={2}>Dinheiro</Text>
                        </HStack>

                        <HStack mb={2}>
                            <Checkbox boxSize={18} isChecked={isCredidCardAcepted} colorScheme="blue" value={"Boleto"} onChange={handleCreditCardAcepted} aria-label="Cartão de Crédito"/>
                            <Text fontSize={16} ml={2}>Cartão de Crédito</Text>
                        </HStack>

                        <HStack mb={16}>
                            <Checkbox boxSize={18} isChecked={isDebitCardAcepted} colorScheme="blue" value={"Boleto"} onChange={handleDebitCardAcepted} aria-label="Cartão de Débito"/>
                            <Text fontSize={16} ml={2}>Cartão de Débito</Text>
                        </HStack>

                        <HStack>
                            <Button title={"Resetar filtros"} w={40} mr={3}></Button>
                            <Button title={"Aplicar filtros"} variant={'black'} w={40}></Button>
                        </HStack>
                        
                    </VStack>
                </Modal.Content>    
            </Modal>
        </VStack>
    );
}