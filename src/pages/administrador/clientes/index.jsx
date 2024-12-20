import { Button, Card, Input, Stack, Flex, Center, Box, Image } from "@chakra-ui/react"
import Background from "@/layouts/background";
import Clientes from "@/components/Clientes";
import axios from '../../../utils/axios';
import { useState, useEffect } from "react"

const Demo = () => {

    const [error, SetError] = useState('')
    const [allData, SetAllData] = useState([])
    const [allCargos, SetAllCargos] = useState([])

    const handleclick = async () => {
        try {
            const response = await axios.get('/usuario/get-junta')
            console.log("Isso é um response do client")
            console.log(response)
            if (response && Array.isArray(response)) {
                SetAllData(response);
            }
        } catch (error) {
            SetError("erro handleclick")
        }
    }

    const deleta = async (id) => {
        try {
            const response = await axios.delete(`/usuario/${id}`)
            response;
            if(response){
                SetAllData(allData.filter(a => a.id !== id));
            }
        } catch (error) {
            SetError("erro deleta")
        }
    }

//Dialog

const look = async () => {
    try {
        const response = await axios.get('/cargo')
        if (response.data && Array.isArray(response.data)) {
            SetAllCargos(response.data);
            console.log("responde cargo");
        } 
    } catch (error) {
        SetError("Otario look")
    }
}

const DoIt = async (id1, data=[]) => {
    try {
        const Usuario = await axios.post(`/usuario/${id1}`, {
           ...data
        })
        if(DoIt){
            location.reload()
          }
    } catch (error) {
        SetError("Otario DoIt")
    }
}   
    if(error){
        return <Box>{error}</Box>        
    }

    //Dialog Create

    const DoItCreate = async (data={}) => {
        try {
            const Usuario = await axios.post(`/usuario`, {
                ...data
            })
            if(DoIt){
                location.reload()
              }
        } catch (error) {
            SetError("Otario DoItCreate")
        }
    }  

    return (
        <Box>
            <Background></Background>
            <Clientes data={allData} handleclick={handleclick} deleta={deleta} look={look} DoIt={DoIt} allCargos={allCargos} DoItCreate={DoItCreate}/>
        </Box>
    );
};

export default Demo