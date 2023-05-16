import { Button as ButtonNativeBase, HStack, IButtonProps, Icon, Text } from 'native-base';
import { WhatsappLogo, Tag } from 'phosphor-react-native';

type Props = IButtonProps & {
  title: string;
  variant?: 'gray' | 'black' | 'blue';
  icon?: string;
}

export function Button({ title, variant = 'gray', icon, ...rest }: Props) {
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
      <HStack>
        {icon === 'wapp' ? (
          <WhatsappLogo color="white" weight="fill" />
        ) : icon === 'tag' ? (
          <Tag color="white" weight="fill" />
        ) : null}
        <Text 
          color={colorText}
          fontFamily="heading"
          fontSize="sm"
          ml={2}
        >
          {title}
        </Text>
      </HStack>
    </ButtonNativeBase>
  );
}