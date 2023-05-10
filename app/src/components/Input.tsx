import { Input as NativeBaseInput, IInputProps } from 'native-base';

export function Input({ ...rest }: IInputProps) {
  return (
    <NativeBaseInput 
      bg="gray.700"
      px={4}
      mb={4}
      borderWidth={0}
      placeholderTextColor="gray.400"
      {...rest}
    />
  );
}