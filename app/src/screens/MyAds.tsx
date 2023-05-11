import React, { useState } from 'react';
import { Select, VStack, Text, HStack, Pressable, Heading, Spacer, FlatList, } from 'native-base';
import {  Plus } from 'phosphor-react-native';
import { useNavigation } from '@react-navigation/native';

import { AddsTile } from '@components/AddsTile';
import { AppNavigatorRoutesProps } from '@routes/app.routes';


export function MyAds() {
    const navigation = useNavigation<AppNavigatorRoutesProps>(); 
    const [selectedOption, setSelectedOption] = useState('option1');
    const options = [
      { label: 'Opção 1', value: 'option1' },
      { label: 'Opção 2', value: 'option2' },
      { label: 'Opção 3', value: 'option3' },
    ];    

    function goto(){
        navigation.navigate('adEdting');
    }

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


    return (
        <VStack flex={1} bg={"gray.700"} alignItems="center">
            <VStack marginTop={8} marginX={5} alignItems="center">
                <HStack alignItems="center" justifyContent="space-between">
                    <Heading >Meus anúncios</Heading>
                    <Pressable position="absolute" right={-100}> 
                        <Plus />
                    </Pressable>
                </HStack>

                <HStack alignItems="center" marginTop={8} marginBottom={3}>
                    <Text mr={2}>9</Text>
                    <Text>anúncios</Text>
                    <Spacer/>
                    <Select
                        selectedValue={selectedOption}
                        minWidth={200}
                        accessibilityLabel="Choose Service"
                        onValueChange={(value) => setSelectedOption(value)}
                        width={150}
                    >
                        {options.map((option) => (
                            <Select.Item
                                key={option.value}
                                label={option.label}
                                value={option.value}
                            />
                        ))}
                    </Select>
                </HStack>

                <FlatList
                    data={adds}
                    renderItem={({ item }) => (
                        <AddsTile title={item.title} price={item.price} onPress={goto}/>
                    )}
                    numColumns={2}
                    keyExtractor={(item, index) => index.toString()}
                    style={{width: "85%"}}
                />

            </VStack>
        </VStack>
    );
}