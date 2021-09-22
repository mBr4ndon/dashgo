import { Flex, Box, Text, Avatar } from '@chakra-ui/react';

export function Profile() {
    return (
        <Flex align="center">
            <Box mr="4" textAlign="right">
                <Text>Márcio Brandão</Text>
                <Text color="gray.300" fontSize="small">
                    brandao.marcio.xix@gmail.com
                </Text>
            </Box>

            <Avatar size="md" name="Márcio Brandão" src="https://github.com/mBr4ndon.png" />
        </Flex>        
    );
}