import { Button, Card, Input, Stack, Flex, Center, Box, Image, Icon, Text, HStack, Link } from "@chakra-ui/react"
import { Field } from "@/components/ui/field"
import { PasswordInput, PasswordStrengthMeter } from "@/components/ui/password-input"
import { useRouter } from 'next/router'
import { FaGoogle } from "react-icons/fa6"
import { SiApple } from "react-icons/si"


export default function Login({ cadastrar = true }) {
    const router = useRouter()
    const goPage = () => {
        router.push('teste/cadastro')
    }
    return (
        <Center minHeight="100vh">
            {/* Card com efeito glassmorphism */}
            <Box
                width="25%"
                height="25%"
                p="6"
                bg="rgba(255, 255, 255, 0.2)" // Fundo semi-transparente
                borderRadius="lg"
                boxShadow="lg"
                backdropFilter="blur(5px)" // Desfoque no fundo 
                border="1px solid rgba(255, 255, 255, 0.3)" // Borda sutil
            >
                {!cadastrar && <Box textAlign="center" mb="6">
                    <Image src="https://gainblers.com/imagenes/casas/pokerstarssports/pokerstars-logo.png" alt="LOGO" />
                    <Box as="h2" fontSize="2xl" fontWeight="bold">
                        Login
                    </Box>
                </Box>}
                {cadastrar && <Box textAlign="center" mb="6">
                    <Box as="h2" fontSize="2xl" fontWeight="bold">
                        Cadastrar
                    </Box>
                    <Box fontSize="sm" color="gray.300">
                        Faça seu Cadastro!
                    </Box>
                </Box>}
                <Stack gap="4">
                    <Field label="CPF">
                        <Input placeholder="Digite seu CPF" _placeholder={{ color: "gray.800" }} />
                    </Field>

                    {!cadastrar && <Field label="Senha">
                        <PasswordInput placeholder="Digite sua senha" _placeholder={{ color: "gray.800" }} />
                    </Field>}
                    {cadastrar && <Field label="Senha">
                        <PasswordInput placeholder="Digite sua senha" />
                        <PasswordStrengthMeter value={2} />
                    </Field>}
                    <Button
                        borderRadius={20}
                        bgColor="white"
                        color="black"
                        alignItems="center"
                        justifyContent="center"
                        gap={0} // Adds space between icon and text

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
                        gap={2} // Adds space between icon and text
                    >
                        <Icon fontSize="25px">
                            <SiApple />
                        </Icon>
                        <Text>Entrar com a Apple</Text>
                    </Button>
                    <HStack pt={1} alignSelf={"center"}>
                    </HStack>
                </Stack>
                {!cadastrar && <Flex justifyContent="center" mt="6">
                    <Button variant="outline" colorScheme="whiteAlpha" mr="2" onClick={goPage} >
                        Criar conta
                    </Button>
                    <Button variant="solid" colorScheme="teal">
                        Entre
                    </Button>
                </Flex>}
                {cadastrar && <Flex justifyContent="flex-end" mt="6">
                    <Button variant="outline" colorScheme="whiteAlpha" mr="2">
                        Faça Login
                    </Button>
                    <Button variant="solid" colorScheme="teal" onClick={goPage}>
                        Criar
                    </Button>
                </Flex>}
            </Box>
        </Center>
    );
}

