import { useNavigation } from '@react-navigation/native';
import { FlatList, View, Image, Text } from 'native-base';
import { useEffect, useRef, useState } from 'react';
import { Dimensions } from 'react-native';

import { AppNavigatorRoutesProps } from '@routes/app.routes';


const movieData = [
  { id: '1', title: 'Item 1', description: 'Description 1', image: 'https://via.placeholder.com/350x150' },
  { id: '2', title: 'Item 2', description: 'Description 2', image: 'https://via.placeholder.com/350x150' },
  { id: '3', title: 'Item 3', description: 'Description 3', image: 'https://via.placeholder.com/350x150' },
  { id: '4', title: 'Item 4', description: 'Description 4', image: 'https://via.placeholder.com/350x150' },
];

const screenWidth= Dimensions.get('window').width;

export function AdDetails() {
    const navigation = useNavigation<AppNavigatorRoutesProps>(); 
    const flatListRef=useRef();
    const indexRef=useRef(0);

  function onScroll(event: { nativeEvent: { contentOffset: { x: number } } }) {
    const ind = event.nativeEvent.contentOffset.x / screenWidth;
    const roundIndex = Math.round(ind);
    indexRef.current = roundIndex;
  }

  return (
    <View bg={'amber.200'} flex={1}> 
      <FlatList
        data={movieData}
        keyExtractor={item=>item.id.toString()}
        renderItem={({ item }) => (
          <View width={screenWidth}>
            <Image source={{ uri: item.image }} style={{ flex: 1 }} alt={item.description}/>
            <Text>{item.title}</Text>
            <Text>{item.description}</Text>
          </View>
        )}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={true}
        ref={flatListRef}
        onScroll={onScroll}
        initialNumToRender={0}
      />
    </View>
  );
}