import { Image, Text, Box, VStack, HStack } from "native-base";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
    title: String;
    price: String;
}

import Luminaria from '@assets/Luminaria.png'

export function AddsTile({ title, price, ...rest }: Props) {
    return (
        <TouchableOpacity {...rest}>
            <Box
                overflow={"hidden"}
                marginY={2}
                marginX={1}
                width={"160"}
                borderRadius={6}
                position="relative"
            >
            <Image source={Luminaria} alt={title.toString()} width={"100%"} />
            <VStack padding={3} flex={1} width={160}>
                <Text fontSize={14} fontWeight={"regular"} mb={2} width={80} color={"gray.200"}>
                    {title}
                </Text>
                    <HStack justifyContent={"space-between"} alignItems={"center"}>
                    <Text color={"gray.100"} fontSize={"14"} fontWeight={"bold"}>
                    R$ {price}
                    </Text>
                </HStack>            
            </VStack>
            <Box
                position="absolute"
                top={2}
                right={2}
                bg="blue.700"
                borderRadius={20}
                width={43}
                height={17}
                display="flex"
                justifyContent="center"
                alignItems="center"
            >
                    <Text fontSize={10} fontWeight={"bold"} color={"white"}>
                        Novo
                    </Text>
                </Box>
            </Box>
        </TouchableOpacity>

    );
}