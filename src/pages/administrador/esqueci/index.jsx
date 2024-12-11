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
import Forgot from "@/components/Esqueci"

export default function Demo() {

    const[allData, setAllData]=useState({})
    const[error, setError]=useState('')
    const[flag, setFlag]=useState(false)

    const forgot1 = async (email) => {
        try {
            const response = await axios.get(`http://localhost:3333/usuario/findemail/${email}`)
            console.log("Isso é um response")
            console.log(response.data)
            if (response.data) {
                setAllData(response.data);
                console.log("Isso é um allData")
                console.log(allData)
                setFlag(true)
            }else{
                setError('Email não encontrado 2222')
            }
        } catch (error) {
            setError("erro forgot1")
        }
    }

    return(
    <Box>
    <Background></Background>
    <Forgot forgot1={forgot1} allData={allData} flag={flag}></Forgot>
    </Box>
)
}