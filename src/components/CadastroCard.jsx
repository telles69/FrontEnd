import { Button, Input, Stack, Flex, Center, Box, Image, Icon, Text, HStack } from "@chakra-ui/react"
import { Field } from "@/components/ui/field"
import { PasswordInput } from "@/components/ui/password-input"
import { useRouter } from 'next/router'
import { CheckboxCard } from "@/components/ui/checkbox-card"
import { NativeSelectField, NativeSelectRoot } from "@/components/ui/native-select"
import { useState } from "react"

export default function Cadastro({ allData = [], look, handleClick, allCargos = [] }) {

    const [nome, setNome] = useState('')
    const [senha, setSenha] = useState('')
    const [email, setEmail] = useState('')
    const [cpf, setCPF] = useState('')
    const [idCargo, setCargo] = useState('')
    const [estudante, setEstudante] = useState(false)
    const [errors, setErrors] = useState('')

    const validateFields = () => {
        const newErrors = {}
        if (!nome) newErrors.nome = "O nome é obrigatório"
        if (!email) newErrors.email = "O email é obrigatório"
        if (!cpf) newErrors.cpf = "O CPF é obrigatório"
        if (!senha) newErrors.senha = "A senha é obrigatória"
        if (!idCargo) newErrors.idCargo = "O cargo é obrigatório"

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const envio2 = async () => {
        if (validateFields()) {
            handleClick({ nome, email, cpf, senha, idCargo, estudante })
        }
    }

    const router = useRouter()
    const goLogin = () => router.push('/administrador/login')

    return (
        <Center minHeight="100vh">
            <Box
                width="25%"
                p="6"
                bg="rgba(255, 255, 255, 0.2)"
                borderRadius="lg"
                boxShadow="lg"
                backdropFilter="blur(20px)"
                border="1px solid rgba(255, 255, 255, 0.3)"
            >
                <Box textAlign="center" mb="6">
                    <Image src="https://gainblers.com/imagenes/casas/pokerstarssports/pokerstars-logo.png" alt="LOGO" />
                    <Box as="h2" fontSize="2xl" fontWeight="bold">Cadastro</Box>
                </Box>
                <Stack gap="4">
                    <Field label="Nome">
                        <Input 
                            onChange={(e) => setNome(e.target.value)} 
                            placeholder="Digite seu Nome"
                            border="1px solid" borderColor={errors.nome ? "red.500" : "black"}
                            
                            _placeholder={{color: "black"}}
                        />
                        {errors.nome && <Text color="red.500" fontSize="sm">{errors.nome}</Text>}
                    </Field>
                    <Field label="Email">
                        <Input 
                            onChange={(e) => setEmail(e.target.value)} 
                            placeholder="Digite seu Email"
                            border="1px solid" 
                            borderColor={errors.email ? "red.500" : "black"}
                            _placeholder={{color: "black"}}
                        />
                        {errors.email && <Text color="red.500" fontSize="sm">{errors.email}</Text>}
                    </Field>
                    <Field label="CPF">
                        <Input 
                            onChange={(e) => setCPF(e.target.value)} 
                            placeholder="Digite seu CPF"
                            border="1px solid" 
                            borderColor={errors.cpf ? "red.500" : "black"}
                            _placeholder={{color: "black"}}
                        />
                        {errors.cpf && <Text color="red.500" fontSize="sm">{errors.cpf}</Text>}
                    </Field>
                    <Field label="Senha">
                        <PasswordInput 
                            onChange={(e) => setSenha(e.target.value)} 
                            placeholder="Digite sua senha"
                            border="1px solid" 
                            borderColor={errors.senha ? "red.500" : "black"}
                            _placeholder={{color: "black"}}
                        />
                        {errors.senha && <Text color="red.500" fontSize="sm">{errors.senha}</Text>}
                    </Field>
                    <Field label="Cargo">
                        <NativeSelectRoot variant="subtle" size="lg" width="240px">
                            <NativeSelectField 
                                onChange={(e) => setCargo(e.currentTarget.value)} 
                                placeholder="Selecione uma opção"
                                border="1px solid" 
                                borderColor={errors.idCargo ? "red.500" : "black"}
                                onClick={look}
                            >
                                {allCargos.map((a) => (
                                    <option key={a.id} value={a.id}>{a.descricao}</option>
                                ))}
                            </NativeSelectField>
                        </NativeSelectRoot>
                        {errors.idCargo && <Text color="red.500" fontSize="sm">{errors.idCargo}</Text>}
                    </Field>
                    <Field label="Ocupação">
                        <CheckboxCard 
                            estudante={estudante} 
                            onCheckedChange={(e) => setEstudante(e.checked)} 
                            label="Estudante" 
                        />
                    </Field>
                </Stack>
                <Flex justifyContent="flex-end" mt="6">
                    <Button variant="outline" colorScheme="whiteAlpha" mr="2" onClick={goLogin}>
                        Faça Login
                    </Button>
                    <Button variant="solid" colorScheme="teal" onClick={envio2}>
                        Criar
                    </Button>
                </Flex>
            </Box>
        </Center>
    )
}

