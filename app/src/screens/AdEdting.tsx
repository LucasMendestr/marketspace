import { useNavigation } from '@react-navigation/native';
import { FlatList, View, HStack, Pressable, Image, Text, Box, ScrollView, VStack, AddIcon, Input, Radio, Switch, Checkbox} from 'native-base';

import { AppNavigatorRoutesProps } from '@routes/app.routes';
import { ArrowLeft } from 'phosphor-react-native';
import { Button } from '@components/Button';
import { useState } from 'react';
import Luminaria from '@assets/Luminaria.png'


export function AdEdting() {
    const navigation = useNavigation<AppNavigatorRoutesProps>(); 
    const [isTradeAcepted, setIsTradeAcepted] = useState(false);
    const [isBoletoAcepted, setIsBoletoAcepted] = useState(false);
    const [isPixAcepted, setIsPixAcepted] = useState(false);
    const [isCashAcepted, setIsCashAcepted] = useState(false);
    const [isCredidCardAcepted, setIsCreditCardAcepted] = useState(false);
    const [isDebitCardAcepted, setIsDebitCardAcepted] = useState(false);

    const [imgs, setImgs] = useState([
      {
        uri: Luminaria,
      }
    ]);

    function handleGoToHome(){
        navigation.navigate('home');
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
    <View flex={1}>
      <ScrollView bg={'gray.700'} flex={1} mt={8}> 
        <View flex={1} mb={32}>
          <HStack alignItems="center" ml={5} mb={3}>
            <Pressable onPress={handleGoToHome}>
              <ArrowLeft/>
            </Pressable>

            <Text flex={1} textAlign="center" fontSize={20} fontWeight={'bold'}>
              Criar anúncio
            </Text>
          </HStack>

          <View px={5} mb={8}>
            <Text fontSize={16} fontWeight={'bold'}>
              Imagens
            </Text>

            <Text mt={2}>
              Escolha até 3 imagens para mostrar o quanto seu produto é incrível!!
            </Text>

            <FlatList
              data={imgs}
              renderItem={({ item }) => <Image source={item.uri} size={100} borderRadius={6} mr={2} />}
              horizontal
              keyExtractor={item => item.uri}
              ListFooterComponent={
                imgs.length < 3 ? (
                  <Pressable>
                    <Box w={100} h={100} borderRadius={6} bg={'gray.500'} justifyContent="center" alignItems="center">
                      <AddIcon size={8} color="gray.400" style={{ marginTop: 6 }} />
                    </Box>
                  </Pressable>

                ) : (
                  <Box />
                )
              }
            />

            <Text mt={5}>
              Sobre o produto
            </Text>
              <Input
                  placeholder="Titulo do anúncio"
                  type='text'
                  backgroundColor={"white"}
                  borderWidth={0}
              />

              <Input
                  placeholder="Descrição do anúncio"
                  type='text'
                  backgroundColor={"white"}
                  borderWidth={0}
                  mt={2}
                  multiline
                  h={160}
                  textAlignVertical='top'
              />

              <VStack mt={5}>
                <Radio.Group name='tipo' flexDirection={'row'} >
                  <Radio value='novo' ml={5} fontSize={2}>
                    Produto novo
                  </Radio>

                  <Radio value='usado' ml={5}>
                    Produto usado
                  </Radio>
                </Radio.Group>
              </VStack>

              <Text my={5}>
                Venda
              </Text>

              <Input
                placeholder="Valor do Produto"
                InputLeftElement={
                    <Text ml={5}>R$</Text>
                }
              />

              <Text mt={4}>
                Aceita Troca
              </Text>
              
              <Switch right={305} isChecked={isTradeAcepted} onToggle={handleTradedAcepted} mb={6}/>

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

          </View>
        </View>
      </ScrollView>
      
      <VStack bg="white" shadow={4} h={90} position="absolute" bottom={0} left={0} right={0}>
        <HStack px={5} pt={5} alignItems={'space-between'} justifyContent={'space-between'}>
          <Box w={170} >
            <Button title={'Cancelar'} variant={'gray'} />
          </Box>
          <Box w={170} >
            <Button title={'Avançar'} variant={'black'}/>
          </Box>
        </HStack>
      </VStack>
    </View>  
  );
}