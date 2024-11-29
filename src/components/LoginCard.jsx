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


export default function Login() {

    const [nome, setNome] = useState('')
    const [senha, setSenha] = useState('')
    const [email, setEmail] = useState('')
    const [CPF, setCPF] = useState('')
    const [cargo, setCargo] = useState('')
    const [ocupacao, setOcupacao] = useState(false)
    
    const handleClick = async () => {
        try {
          
           const Usuario = await axios.post('/user/login', { //mudar
             nome: nome,
             senha: senha,
             email: email, 
             CPF: CPF,
             cargo: cargo,
             ocupacao: ocupacao
          })
          localStorage.setItem('token', Usuario.token)
          setData(Usuario.username)
          alert('Seu usuario e: ${data}')
        } catch (error) {
          console.log(error.message);
          
        }
    }

    const router = useRouter()
    const goCreate = () => {
        router.push('/administrador/cadastro')
    }
    const goLogin = () => {
        router.push('/administrador/login')
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
                            Login
                        </Box>
                    </Box>
                    <Stack gap="4">

                        <Field >
                            <Field label="CPF">
                                <Input placeholder="Digite seu CPF" _placeholder={{ color: "gray.800" }} />
                            </Field>
                            <Field label="Senha">
                                <PasswordInput placeholder="Digite sua senha" _placeholder={{ color: "gray.800" }} />
                            </Field>
                        </Field>

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
                        <Button variant="outline" colorScheme="whiteAlpha" mr="2"    >
                            Criar conta
                        </Button>
                        <Button variant="solid" colorScheme="teal">
                            Entre
                        </Button>
                    </Flex>
                </Box>
            </Center>
        );
    }

