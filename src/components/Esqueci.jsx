import { Button, Card, Input, Stack, Flex, Center, Box, Image, Icon, Text, HStack, Link, Table } from "@chakra-ui/react"
import { Field } from "@/components/ui/field"
import { PasswordInput, PasswordStrengthMeter } from "@/components/ui/password-input"
import { useRouter } from 'next/router'
import { FaGoogle } from "react-icons/fa6"
import { SiApple } from "react-icons/si"
import { CheckboxCard } from "@/components/ui/checkbox-card"
import { NativeSelectField, NativeSelectRoot } from "@/components/ui/native-select"
import axios from '../utils/axios';
import { useState, useEffect } from "react"
import React from 'react';
import { RiPencilFill } from "react-icons/ri";

export default function Forgot({forgot1, allData={}, flag, forgot2, forgot3}) {

    const [passo , setPasso] = useState(1)
    const [email, setEmail] = useState('')
    const [codigo, setCodigo] = useState('')
    const [senha, setSenha] = useState('')
    const dois1 = {email, codigo}
    const dois2 = {senha, email}

    const router = useRouter()
    const goLogin = () => {
        router.push('/administrador/login')
    }

    const passo1 = () => {
        forgot1(email)
        if(flag === true){
            setPasso(2)
        }else{
            console.log('Email troxa')
        }
    }
    const passo2 = () => {
        forgot2(dois1)
        if(flag === true){
        setPasso(3)
        }else{
            console.log('Codigo troxa')
        }
    }
    const passo3 = () =>{
        forgot3(dois2)
        if(flag === true){
        goLogin()
        }else{
            console.log('Senha nova troxa')
        }
    }
return(
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
                    <Button variant="solid" colorScheme="teal" onClick={passo1}>
                            Proximo 
                        </Button>
                        </Flex>
                        </>)}
                        {passo === 2 &&(
                    <>
                    <Field>
                        <Field label="Código">
                        <Input onChange={(a) => setCodigo(a.target.value)} placeholder="Digite o Código" _placeholder={{ color: "gray.800" }} />
                        </Field>
                    </Field>
                    <Flex justifyContent="right" mt="6">
                    <Button variant="solid" colorScheme="teal" onClick={passo2}>
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
                    <Button variant="solid" colorScheme="teal" onClick={passo3}>
                            Confirmar 
                        </Button>
                        </Flex>
                        </>)}
                        
                </Box>
        </Center>
)
}