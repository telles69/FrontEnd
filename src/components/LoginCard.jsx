import { Button, Card, Input, Stack, Flex, Center, Box, Image, Icon, Text, HStack, Link } from "@chakra-ui/react"
import { Field } from "@/components/ui/field"
import { PasswordInput, PasswordStrengthMeter } from "@/components/ui/password-input"
import { useRouter } from 'next/router'
import { FaGoogle } from "react-icons/fa6"
import { SiApple } from "react-icons/si"
import { CheckboxCard } from "@/components/ui/checkbox-card"
import { NativeSelectField, NativeSelectRoot } from "@/components/ui/native-select"
import axios from '../utils/axios';
import { useState } from "react"


export default function Login({DoLogin}) {

    const [senha, setSenha] = useState('')
    const [email, setEmail] = useState('')

    const enviar = async () => {
        if(email && senha){
            DoLogin(email, senha)
    }}

    const router = useRouter()
    const goCreate = () => {
        router.push('/administrador/cadastro')
    }
        return (
            <Center minHeight="100vh">
                <Box
                    width="25%"
                    height="25%"
                    p="6"
                    bg="rgba(255, 255, 255, 0.2)" 
                    borderRadius="lg"
                    boxShadow="lg"
                    backdropFilter="blur(10px)" 
                    border="1px solid rgba(255, 255, 255, 0.3)" 
                >
                    <Box textAlign="center" mb="6">
                        <Image src="https://gainblers.com/imagenes/casas/pokerstarssports/pokerstars-logo.png" alt="LOGO" />
                        <Box as="h2" fontSize="2xl" fontWeight="bold">
                            Login Administrador 
                        </Box>
                    </Box>
                    <Stack gap="4">

                        <Field >
                            <Field label="Email">
                                <Input onChange={(a) => setEmail(a.target.value)} placeholder="Digite seu Email" _placeholder={{ color: "gray.800" }} />
                            </Field>
                            <Field label="Senha">
                                <PasswordInput onChange={(a) => setSenha(a.target.value)} placeholder="Digite sua senha" _placeholder={{ color: "gray.800" }} />
                            </Field>
                        </Field>
                        <Box textAlign="center">
                        <Link href="/administrador/esqueci">Esqueci minha senha</Link>
                        </Box>
                        <Button
                            borderRadius={20}
                            bgColor="white"
                            color="black"
                            alignItems="center"
                            justifyContent="center"
                            gap={0}

                        >
                            <Icon fontSize="18px" style={{ marginLeft: '10px' }} >
                                <FaGoogle />
                            </Icon>
                            <Text pl={0} style={{ marginLeft: '10px' }}>Entrar com o Google</Text>
                        </Button>

                        <Button
                            borderRadius={20}
                            bgColor="white"
                            color="black"
                            alignItems="center"
                            justifyContent="center"
                            gap={2}
                        >
                            <Icon fontSize="25px">
                                <SiApple />
                            </Icon>
                            <Text>Entrar com a Apple</Text>
                        </Button>
                        <HStack pt={1} alignSelf={"center"}>
                        </HStack>
                    </Stack>
                    <Flex justifyContent="center" mt="6">
                        <Button variant="outline" colorScheme="whiteAlpha" mr="2" onClick={goCreate}>
                            Criar conta
                        </Button>
                        <Button variant="solid" colorScheme="teal" onClick={enviar}>
                            Entre
                        </Button>
                    </Flex>
                </Box>
            </Center>
        );
    }

