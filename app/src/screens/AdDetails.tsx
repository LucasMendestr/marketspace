import { FlatList, View, HStack, Pressable, Image, Text, Box, ScrollView, VStack, Center} from 'native-base';
import { useRef } from 'react';
import { Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ArrowLeft, Barcode, QrCode, Money, CreditCard, Bank } from 'phosphor-react-native';


import { AppNavigatorRoutesProps } from "@routes/app.routes";
import { CarouselTile } from '@components/CarouselTile';
import User from '@assets/User.png';

const screenWidth= Dimensions.get('window').width;
const movieData = [
  { id: '1', path: 'https://via.placeholder.com/350x150' },
  { id: '2', path: 'https://via.placeholder.com/350x150' },
  { id: '3', path: 'https://via.placeholder.com/350x150' },
  { id: '4', path: 'https://via.placeholder.com/350x150' },
];

export function AdDetails() {
    const navigation = useNavigation<AppNavigatorRoutesProps>(); 
    const flatListRef=useRef(0);
    const indexRef=useRef(0);

  function onScroll(event: { nativeEvent: { contentOffset: { x: number } } }) {
    const ind = event.nativeEvent.contentOffset.x / screenWidth;
    const roundIndex = Math.round(ind);
    indexRef.current = roundIndex;
  }

  function handleGoToHome (){
    navigation.navigate('home');
  }

  return (
    <View flex={1}>
      <ScrollView bg={'gray.700'} flex={1} mt={8}> 
        <View flex={1} mb={32}>
          <HStack ml={5} mb={3}>
            <Pressable onPress={handleGoToHome}>
              <ArrowLeft/>
            </Pressable>
          </HStack>

          <FlatList
            data={movieData}
            keyExtractor={item=>item.id.toString()}
            renderItem={({item})=> ( <CarouselTile data={{
              path: item.path,
            }} />
              )}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            ref={flatListRef}
            onScroll={onScroll}
          />

          <View px={5} mb={8}>
            <HStack m={2}>
              <Image source={User} alt='usuario' size={23} mr={2}></Image>
              <Text>Makenna Baptista</Text>
            </HStack>

            <Box
              bg="blue.700"
              borderRadius={20}
              width={43}
              height={17}
              display="flex"
              justifyContent="center"
              alignItems="center"
              mt={8}
            >
              <Text fontSize={10} fontWeight={"bold"} color={"white"}>
                  Novo
              </Text>
            </Box>

            <HStack justifyContent={'space-between'} mt={2}>
              <Text fontSize={20} fontWeight={'bold'}>Bicicleta</Text>

              <HStack alignItems={'center'}>
                <Text fontSize={14} fontWeight={'bold'} color={'blue.500'} pr={2}>R$</Text>
                <Text fontSize={20} fontWeight={'bold'} color={'blue.500'}>120,00</Text>
              </HStack>
            </HStack>

            <Box h={110}>
              <Text>
                dasdas
              </Text>
            </Box>

            <HStack mt={5}>
              <Text fontWeight={'bold'} mr={3}>Aceita Troca?</Text>
              <Text>Sim</Text>
            </HStack>

            <Text mt={2}>Meios de pagamento:</Text>

            <HStack>
              <Barcode/>
              <Text>Boleto</Text>
            </HStack>

            <HStack>
              <QrCode/>
              <Text>Pix</Text>
            </HStack>

            <HStack>
              <Money/>
              <Text>Dinheiro</Text>
            </HStack>

            <HStack>
              <CreditCard/>
              <Text>Cartão de Crédito</Text>
            </HStack>

            <HStack>
              <Bank/>
              <Text>Depósito Bancário</Text>
            </HStack>
          </View>
        </View>
      </ScrollView>
      
      <VStack bg="white" shadow={4} h={90} position="absolute" bottom={0} left={0} right={0}>
        <HStack>
          <Text>R$</Text>
          <Text>120,00</Text>
        </HStack>
      </VStack>
    </View>    
  );
}