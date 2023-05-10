import React, { Component, useState } from 'react';
import { Select, VStack, Text, HStack, Pressable, Heading, Spacer, } from 'native-base';
import {  Plus } from 'phosphor-react-native';

import Avatar from '@assets/Avatar.png';
import { Input } from "@components/Input";

export function MyAds() {
    const [selectedOption, setSelectedOption] = useState('option1');
    const options = [
      { label: 'Opção 1', value: 'option1' },
      { label: 'Opção 2', value: 'option2' },
      { label: 'Opção 3', value: 'option3' },
    ];    
    return (
        <VStack flex={1} bg={"gray.700"} alignItems="center">
            <VStack marginTop={8} marginX={5} alignItems="center">
                <HStack alignItems="center" justifyContent="space-between">
                    <Heading >Meus anúncios</Heading>
                    <Pressable position="absolute" right={-100}> 
                        <Plus />
                    </Pressable>
                </HStack>

                <HStack alignItems="center" marginTop={8}>
                    <Text>9</Text>
                    <Text>anúncios</Text>
                    <Spacer/>
                    <Select
                        selectedValue={selectedOption}
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

            </VStack>
        </VStack>
    );
}