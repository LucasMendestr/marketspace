import { Button as ButtonNativeBase, IButtonProps, Text } from 'native-base';

type Props = IButtonProps & {
  title: string;
  variant?: 'gray' | 'black' | 'blue';
}

export function Button({ title, variant = 'gray', ...rest }: Props) {
    let colorButton;
    let colorButtonPress;
    let colorText;
  
    switch (variant) {
      case 'gray':
        colorButton = 'gray.500';
        colorText = 'gray.200';
        colorButtonPress = 'gray.200';
        break;
      case 'black':
        colorButton = 'gray.100';
        colorText = 'gray.700';
        colorButtonPress = 'gray.700';
        break;
      case 'blue':
        colorButton = 'blue.500';
        colorText = 'gray.700';
        colorButtonPress = 'blue.700';
        break;
      default:
        colorButton = 'gray.500';
        colorText = 'gray.200';
        colorButtonPress = 'gray.200';
    }


  return (
    <ButtonNativeBase
      w="full"
      h={10}
      bg={colorButton}
      borderWidth={0}
      rounded="sm"
      _pressed={{
        bg: colorButtonPress  
      }}
      {...rest}
    >
      <Text 
        color={colorText}
        fontFamily="heading"
        fontSize="sm"
      >
        {title}
      </Text>
    </ButtonNativeBase>
  );
}