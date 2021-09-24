import { Box, Flex, Heading, Button, Divider, VStack, SimpleGrid, HStack } from "@chakra-ui/react";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { Input } from '../../components/Form/Input';
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";

type CreateUserFormData = {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
  }
  
const createUserFormSchema = yup.object().shape({
    name: yup.string().required('Nome obrigatório'),
    email: yup.string().required('Email obrigatório').email('Email inválido'),
    password: yup.string().required('Password obrigatória').min(6, 'No mínimo 6 caracteres'),
    password_confirmation: yup.string().oneOf([ 
        null, 
        yup.ref('password')
    ], 'Passwords devem coincidir'),
});

export default function CreateUser() {

    const { register, formState, handleSubmit } = useForm({
        resolver: yupResolver(createUserFormSchema) as any
    });

    const handleCreateUser: SubmitHandler<CreateUserFormData> = async (values, event) => {
        event.preventDefault();
        await new Promise(resolve => setTimeout(resolve, 1000));

        console.log(values);
    }

    return (
        <Box>
            <Header />
            <Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
                <Sidebar />

                <Box
                  as="form"
                  flex="1"
                  borderRadius={8}
                  bg="gray.800"
                  p={["6","8"]}
                  onSubmit={handleSubmit(handleCreateUser)}
                >
                    <Heading size="lg" fontWeight="normal">Criar utilizador</Heading>

                    <Divider my="6" borderColor="gray.700"/>

                    <VStack spacing={["6", "8"]}>
                        <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
                            <Input
                                name="name"
                                label="Nome completo"
                                {...register('name')}
                                error={formState.errors.name}
                            />
                            <Input
                                name="email"
                                label="Email"
                                type="email"
                                {...register('email')}
                                error={formState.errors.email}
                            />
                        </SimpleGrid>
                        <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
                            <Input
                                name="password"
                                label="Password"
                                type="password"
                                {...register('password')}
                                error={formState.errors.password}
                            />
                            <Input
                                name="password_confirmation"
                                label="Confirmar password"
                                type="password"
                                {...register('password_confirmation')}
                                error={formState.errors.password_confirmation}
                            />
                        </SimpleGrid>
                    </VStack>

                    <Flex mt="8" justify="flex-end">
                        <HStack spacing="4">
                            <Link href="/users" passHref>
                                <Button as="a" colorScheme="whiteAlpha">Cancelar</Button>
                            </Link>
                            <Button
                                colorScheme="pink"
                                type="submit"
                                isLoading={formState.isSubmitting}
                            >
                                Guardar
                            </Button>
                        </HStack>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    );
}