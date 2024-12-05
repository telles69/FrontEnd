import { Button, Card, Input, Stack, Flex, Center, Box, Image, Icon, Text, HStack, Link } from "@chakra-ui/react"
import { Field } from "@/components/ui/field"
import { PasswordInput, PasswordStrengthMeter } from "@/components/ui/password-input"
import { useRouter } from 'next/router'
import { FaGoogle } from "react-icons/fa6"
import { SiApple } from "react-icons/si"
import { CheckboxCard } from "@/components/ui/checkbox-card"
import { NativeSelectField, NativeSelectRoot } from "@/components/ui/native-select"
import axios from '../utils/axios';
import { useState, useEffect } from "react"
import { Checkbox } from "@/components/ui/checkbox"

export default function Cadastro({allData=[], look, handleClick, allCargos=[]}) {

    const [nome, setNome] = useState('')
    const [senha, setSenha] = useState('')
    const [email, setEmail] = useState('')
    const [CPF, setCPF] = useState('')
    const [cargo, setCargo] = useState('')
    const [ocupacao, setOcupacao] = useState(false)
    const [error, SetError] = useState('')

    // const look2 = () => {
    //     look;
    // }
    
    // const look = async () => {
    //     try {
    //         const response = await axios.get('/cargo')
    //         console.log(response)
    //         if (response.data && Array.isArray(response.data)) {
    //             SetAllCargos(response.data);
    //             console.log("responde cargo");
    //         } else {
    //             SetError("No valid data found or response format is incorrect");
    //         }
    //     } catch (error) {
    //         return res.status(500).send({ message: "Erro otario" })
    //     }
    // }

    // const handleClick = async () => {
    //     try {
          
    //        const Usuario = await axios.post('/usuario', { 
    //          nome: nome,
    //          senha: senha,
    //          email: email, 
    //          cpf: CPF,
    //          idCargo: cargo,
    //          estudante: ocupacao
    //       })
    //       if(handleClick){
    //         location.reload()
    //       }
    //     } catch (error) {
    //       console.log(error.message);
          
    //     }
    // }

    // useEffect(() => {
    //     look;
    // }, []);

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
                            Cadastro
                        </Box>
                    </Box>
                    <Stack gap="4">


                        <Field>
                            <Field label="Nome">
                                <Input onChange={(a) => setNome(a.target.value)} placeholder="Digite seu Nome" _placeholder={{ color: "gray.800" }} />
                            </Field>
                            <Field label="Email">
                                <Input onChange={(a) => setEmail(a.target.value)} placeholder="Digite seu Email" _placeholder={{ color: "gray.800" }} />
                            </Field>
                            <Field label="CPF">
                                <Input onChange={(a) => setCPF(a.target.value)} placeholder="Digite seu CPF" _placeholder={{ color: "gray.800" }} />
                            </Field>
                            <Field label="Senha">
                                <PasswordInput onChange={(a) => setSenha(a.target.value)} placeholder="Digite sua senha" _placeholder={{ color: "gray.800" }} />
                            </Field>
                            <Field label="Cargo">
                                <NativeSelectRoot variant="subtle" size="lg" width="240px">
                                    <NativeSelectField  onChange={(e) => setCargo(e.currentTarget.value)} placeholder="Selecione uma opcao" onClick={look}>
                                    {allCargos.map((a) => (
                                        <option value={a.id}>{a.descricao}</option>
                                    ))}
                                    </NativeSelectField>
                                </NativeSelectRoot>
                            </Field>
                            <Field label="Ocupação">
                                {/* <CheckboxCard onChange={(a) => setOcupacao(!!a.target.value)} label="Estudante"/> */}
                                <CheckboxCard ocupacao={ocupacao} onCheckedChange={(e) => setOcupacao(!!e.checked)} label="Estudante" />
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
                    <Flex justifyContent="flex-end" mt="6">
                        <Button variant="outline" colorScheme="whiteAlpha" mr="2" onClick={goLogin}>
                            Faça Login
                        </Button>
                        <Button variant="solid" colorScheme="teal" onClick={handleClick}>
                            Criar
                        </Button>
                    </Flex>
                </Box>
            </Center>
        );
    }

