import { Box, Flex, Heading, Button, Icon, Table, Thead, Tr, Th, Checkbox, Tbody, Td, Text, useBreakpointValue } from "@chakra-ui/react";
import React from "react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Pagination } from "../../components/Pagination";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

export default function UserList() {

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    });

    return (
        <Box>
            <Header />
            <Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
                <Sidebar />

                <Box flex="1" borderRadius={8} bg="gray.800" p="8">
                    <Flex mb="8" justify="space-between" align="center">
                        <Heading size="lg" fontWeight="normal">Utilizadores</Heading>

                        <Button 
                            as="a" 
                            size="sm" 
                            fontSize="sm" 
                            leftIcon={<Icon as={RiAddLine} fontSize={20} />}
                            colorScheme="pink"
                        >
                            Criar novo
                        </Button>
                    </Flex>

                    <Table colorScheme="whiteAlpha">
                        <Thead>
                            <Tr>
                                <Th px={["4", "4", "6"]} color="gray.300" w="8">
                                    <Checkbox colorScheme="pink"/>
                                </Th>
                                <Th>Utilizador</Th>
                                { isWideVersion && <Th>Data de inscrição</Th> }
                                { isWideVersion && <Th w="8"></Th>}
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td px={["4", "4", "6"]}>
                                    <Checkbox colorScheme="pink"/>
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight="bold">Márcio Brandão</Text>
                                        <Text fontSize="small" color="gray.300">brandao.marcio.xix@gmail.com</Text>
                                    </Box>
                                </Td>
                                {                                
                                    isWideVersion && (
                                        <Td>
                                            21 de setembro, 2021
                                        </Td>
                                    )
                                }
                                {
                                    isWideVersion && (
                                        <Td>
                                            <Button 
                                                as="a" 
                                                size="sm" 
                                                fontSize="sm" 
                                                leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                                                colorScheme="purple"
                                            >
                                                Editar
                                            </Button> 
                                        </Td>
                                    )
                                }                                   
                            </Tr>
                            <Tr>
                                <Td px={["4", "4", "6"]}>
                                    <Checkbox colorScheme="pink"/>
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight="bold">Márcio Brandão</Text>
                                        <Text fontSize="small" color="gray.300">brandao.marcio.xix@gmail.com</Text>
                                    </Box>
                                </Td>
                                {                                
                                    isWideVersion && (
                                        <Td>
                                            21 de setembro, 2021
                                        </Td>
                                    )
                                }
                                {
                                    isWideVersion && (
                                        <Td>
                                            <Button 
                                                as="a" 
                                                size="sm" 
                                                fontSize="sm" 
                                                leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                                                colorScheme="purple"
                                            >
                                                Editar
                                            </Button> 
                                        </Td>
                                    )
                                } 
                            </Tr>
                            <Tr>
                                <Td px={["4", "4", "6"]}>
                                    <Checkbox colorScheme="pink"/>
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight="bold">Márcio Brandão</Text>
                                        <Text fontSize="small" color="gray.300">brandao.marcio.xix@gmail.com</Text>
                                    </Box>
                                </Td>
                                {                                
                                    isWideVersion && (
                                        <Td>
                                            21 de setembro, 2021
                                        </Td>
                                    )
                                }
                                {
                                    isWideVersion && (
                                        <Td>
                                            <Button 
                                                as="a" 
                                                size="sm" 
                                                fontSize="sm" 
                                                leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                                                colorScheme="purple"
                                            >
                                                Editar
                                            </Button> 
                                        </Td>
                                    )
                                } 
                            </Tr>
                            <Tr>
                                <Td px={["4", "4", "6"]}>
                                    <Checkbox colorScheme="pink"/>
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight="bold">Márcio Brandão</Text>
                                        <Text fontSize="small" color="gray.300">brandao.marcio.xix@gmail.com</Text>
                                    </Box>
                                </Td>
                                {                                
                                    isWideVersion && (
                                        <Td>
                                            21 de setembro, 2021
                                        </Td>
                                    )
                                }
                                {
                                    isWideVersion && (
                                        <Td>
                                            <Button 
                                                as="a" 
                                                size="sm" 
                                                fontSize="sm" 
                                                leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                                                colorScheme="purple"
                                            >
                                                Editar
                                            </Button> 
                                        </Td>
                                    )
                                } 
                            </Tr>
                        </Tbody>
                    </Table>

                    <Pagination />
                </Box>
            </Flex>
        </Box>
    );
}