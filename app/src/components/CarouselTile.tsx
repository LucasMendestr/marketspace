import { Image, View } from 'native-base';

import { ProductDTO } from '@dtos/ProductDTO';
import { ImagesDTO } from '@dtos/ImagesDTO';
import { Dimensions } from 'react-native';

type Props =  {
  data: ImagesDTO;
};

const screenWidth= Dimensions.get('window').width;

export function CarouselTile({ data, ...rest }: Props) {
  return (
    <View  {...rest}>
        <Image 
          source={{ uri: `${data.path}` }}
          alt="Imagem do exercício"
          w={screenWidth}
          h={72}
          resizeMode="cover"
        />
    </View>
  );
}