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
            const response = await axios.post(`http://localhost:3333/send`,{
                email
            })
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

    const forgot2 = async (data=[]) =>{
        try {
            const response = await axios.post(`http://localhost:3333/code`,{
                ...data
            })
            if (response.data) {
                setAllData(response.data);
                setFlag(true)
            }else{
                setError('Email não encontrado 3333')
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
            if (response.data) {
                setAllData(response.data);
                setFlag(true)
            }else{
                setError('Email não encontrado 4444')
            }
        } catch (error) {
            setError("erro forgot3")
        }
    }
    return(
    <Box>
    <Background></Background>
    <Forgot forgot1={forgot1} allData={allData} flag={flag} forgot2={forgot2} forgot3={forgot3}></Forgot>
    </Box>
)
}