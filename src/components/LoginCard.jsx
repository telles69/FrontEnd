import { Button, Card, Input, Stack, Flex, Center, Box, Image } from "@chakra-ui/react"
import { Field } from "@/components/ui/field"
import { PasswordInput, PasswordStrengthMeter } from "@/components/ui/password-input"
export default function Login({ cadastrar = true }) {
    return(
    <Center minHeight="100vh">
                {/* Card com efeito glassmorphism */}
                <Box
                    width="25%"
                    height="25%"
                    p="6"
                    bg="rgba(255, 255, 255, 0.2)" // Fundo semi-transparente
                    borderRadius="lg"
                    boxShadow="lg"
                    backdropFilter="blur(1px)" // Desfoque no fundo 
                    border="1px solid rgba(255, 255, 255, 0.3)" // Borda sutil
                >
                    {!cadastrar && <Box textAlign="center" mb="6">
                        <Box as="h2" fontSize="2xl" fontWeight="bold">
                            Login
                        </Box>
                        <Box fontSize="sm" color="gray.300">
                            Faça login! 
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
                            <Input  placeholder = "Digite seu CPF"/>
                        </Field>

                        {!cadastrar && <Field label="Senha">
                            <PasswordInput placeholder = "Digite sua senha"/>
                        </Field>}
                        {cadastrar && <Field label="Senha">
                            <PasswordInput placeholder = "Digite sua senha"/>
                            <PasswordStrengthMeter value = {2}/>
                        </Field>}
                    </Stack>
                    {!cadastrar && <Flex justifyContent="flex-end" mt="6">
                        <Button variant="outline" colorScheme="whiteAlpha" mr="2">
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
                        <Button variant="solid" colorScheme="teal">
                            Criar
                        </Button>
                    </Flex>}
                </Box>
            </Center>
    );
}
