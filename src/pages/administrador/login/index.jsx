import { Button, Card, Input, Stack, Flex, Center, Box, Image } from "@chakra-ui/react"
import { Field } from "@/components/ui/field"
import { HStack } from "@chakra-ui/react"
import Login from "@/components/LoginCard"
import Background from "@/layouts/background"
import axios from "axios"
import { Alert } from "@/components/ui/alert"
import { useRouter } from 'next/router'
import { useState, useEffect } from "react"
import { Toaster, toaster } from "@/components/ui/toaster"


const Demo = () => {
    const [error, SetError] = useState('')
    const[contador, setContador] = useState(1)

    const router = useRouter()
    const goInicial = () => {
        router.push('/administrador/inicial')
    }
    const toast = () => {
        toaster.create({
            description: "Credenciais invalidas",
            type: "error",
        })
    }
    const DoLogin = async (email, senha) => {
        try {
            const response = await axios.post('http://localhost:3333/usuario/login', {
                email: email,
                senha: senha
            })
            localStorage.setItem('token', response.token)
            if (localStorage.getItem && response.status === 200) {
                goInicial()
                setContador(contador + 1)
            }
        } catch (error) {
            SetError("Otario");
        }
    }

    return (
        <Box>
            <Background></Background>
            <Login DoLogin={DoLogin}></Login>
            {/* {contador === 1 &&(
                toast()
            )} */}
            <Toaster />
        </Box>
    );
};

export default Demo