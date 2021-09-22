import { Button } from "@chakra-ui/react";

interface ItemProps {
    number: number;
    isCurrent?: boolean;
}

export function Item({ isCurrent = false, number }: ItemProps) {
    if (isCurrent) {
        return (
            <Button 
                size="sm"
                fontSize="xs"
                w="4"
                colorScheme="pink"
                disabled
                _disabled={{
                    bg: "pink.500",
                    cursor: 'default'
                }}
            >
                {number}
            </Button>            
        );
    } else {
        return (
            <Button 
                size="sm"
                fontSize="xs"
                w="4"
                colorScheme="pink"
                bg="gray.700"
                _hover={{
                    bg: "gray.600"
                }}
            >
                {number}
            </Button>            
        );
    }
}