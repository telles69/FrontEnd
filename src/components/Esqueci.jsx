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

export default function Forgot({forgot1, allData={}, flag}) {

    const [passo , setPasso] = useState(1)
    const [email, setEmail] = useState('')
    const [codigo, setCodigo] = useState('')
    const [senha, setSenha] = useState('')

    const before = () =>{
        forgot1(email)
        before2()
    }

    const before2 = () =>{
        forgot1(email)
        passo1()
    }
    
    const passo1 = () => {
        // console.log("controller1")
        // console.log(flag)
        // forgot1(email)
        // console.log("controller2")
        // console.log(flag)
        if(flag === true){
             console.log(flag)
            setPasso(2)
        }else{
            console.log('Email troxa')
            console.log(allData)
        }
    }
    const passo2 = () => {
        setPasso(3)
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
                    <Button variant="solid" colorScheme="teal" onClick={before}>
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
                    <Button variant="solid" colorScheme="teal">
                            Confirmar 
                        </Button>
                        </Flex>
                        </>)}
                        
                </Box>
        </Center>
)
}