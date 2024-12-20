import { Button, Card, Input, Stack, Flex, Center, Box, Image } from "@chakra-ui/react"
import { Field } from "@/components/ui/field"
import { HStack } from "@chakra-ui/react"
import Login from "@/components/LoginCard"
import Background from "@/layouts/background"
import axios from "axios"
import { Alert } from "@/components/ui/alert"
import { useRouter } from 'next/router'
import { useState, useEffect } from "react"
import Forgot from "@/components/Esqueci"
import React from 'react';
import { Toaster ,toaster } from "@/components/ui/toaster"

export default function Demo() {

    const[allData, setAllData]=useState({})
    const[error, setError]=useState('')
    const [passo , setPasso] = useState(1)
    const [email, setEmail] = useState('')
    const [code, setCode] = useState('')
    const [senha, setSenha] = useState('')
    const dois1 = {email, code}
    const dois2 = {senha, email}

    const forgot1 = async (email) => {
        try {
            
            const response = await axios.post(`http://localhost:3333/send`,{
                email
            })
            if (response.data.type === 'success') {
                setAllData(response.data);
                setPasso(2)
            }else{
                toaster.create({
                    description: "Email Invalido",
                    type: "error",
                  })
            }
        } catch (error) {
            setError("erro forgot1")
        }
    }

    const forgot2 = async (data=[]) =>{
        try {
            const response = await axios.post(`http://localhost:3333/code`,{
                ...data
            })
            if (response.data.type === 'success') {
                setAllData(response.data);
                setPasso(3)
            }else{
                toaster.create({
                    description: "Código incorreto",
                    type: "error",
                  })
            }
        } catch (error) {
            setError("erro forgot2")
        }
    }
    const forgot3 = async (data=[]) =>{
        try {
            const response = await axios.post(`http://localhost:3333/newPassword`,{
                ...data
            })
            if (response.data.type === 'success') {
                setAllData(response.data);
                setPasso(4)
                goLogin()
            }else{
                toaster.create({
                    description: "Ocorreu um erro",
                    type: "error",
                  })
            }
        } catch (error) {
            setError("erro forgot3")
        }
    }
    
    const router = useRouter()
    const goLogin = () => {
        router.push('/administrador/login')
    }
    return(
    <Box>
    <Background></Background>
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
                            Esqueci minha senha
                        </Box>
                    </Box>
                {passo === 1 &&(
                    <>
                    <Field>
                        <Field label="Email">
                        <Input onChange={(a) => setEmail(a.target.value)} placeholder="Digite seu Email" _placeholder={{ color: "gray.800" }} />
                        </Field>
                    </Field>
                    <Flex justifyContent="right" mt="6">
                    <Button variant="solid" colorScheme="teal" onClick={() => forgot1(email)}>
                            Proximo 
                        </Button>
                        </Flex>
                        </>)}
                        {passo === 2 &&(
                    <>
                    <Field>
                        <Field label="Código">
                        <Input onChange={(a) => setCode(a.target.value)} placeholder="Digite o Código" _placeholder={{ color: "gray.800" }} />
                        </Field>
                    </Field>
                    <Flex justifyContent="right" mt="6">
                    <Button variant="solid" colorScheme="teal" onClick={() => forgot2(dois1)}>
                            Proximo 
                        </Button>
                        </Flex>
                        </>)}
                        {passo === 3 &&(
                    <>
                    <Field>
                        <Field label="Nova Senha">
                        <Input onChange={(a) => setSenha(a.target.value)} placeholder="Digite a nova senha" _placeholder={{ color: "gray.800" }} />
                        </Field>
                    </Field>
                    <Flex justifyContent="right" mt="6">
                    <Button variant="solid" colorScheme="teal" onClick={() => forgot3(dois2)}>
                            Confirmar 
                        </Button>
                        </Flex>
                        </>)}
                        
                </Box>
                <Toaster />
        </Center>
    </Box>
)
}