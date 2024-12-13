import { Button, Card, Input, Stack, Flex, Center, Box, Image } from "@chakra-ui/react"
import { Field } from "@/components/ui/field"
import { HStack } from "@chakra-ui/react"
import Login from "@/components/LoginCard"
import Background from "@/layouts/background"
import axios from "../../../utils/axios"
import { Alert } from "@/components/ui/alert"
import { useRouter } from 'next/router'
import { useState, useEffect } from "react"
import { toast, ToastContainer } from "react-toastify";
import "toastify-js/src/toastify.css";

const Demo = () => {
    const [error, SetError] = useState('')
    const[vars, SetVars] = useState('')

    const router = useRouter()
    const goInicial = () => {
        router.push('/administrador/inicial')
    }
    
    const DoLogin = async (email, senha) => {
        try {
            const response = await axios.post('http://localhost:3333/usuario/login', {
                email: email,
                senha: senha
            })
            if (response.type === 'sucess') {
                localStorage.setItem('token', response.data.token)
                goInicial()
            }else{
                toast.error(response.message)
            }
        } catch (error) {
            SetError("Otario");
        }
    }

    return (
        <Box>
            <Background></Background>
            <Login DoLogin={DoLogin}></Login>
            <ToastContainer/>
        </Box>
    );
};

export default Demo