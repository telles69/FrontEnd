import { Button, Card, Input, Stack, Flex, Center, Box, Image } from "@chakra-ui/react"
import { Field } from "@/components/ui/field"
import { HStack } from "@chakra-ui/react"
import Login from "@/components/LoginCard"
import Cadastro from "@/components/CadastroCard";
import Background from "@/layouts/background";
import Clientes from "@/components/Clientes";
import axios from '../../../utils/axios';
import { useState, useEffect } from "react"

const Demo = () => {

    const [error, SetError] = useState('')
    const [allData, SetAllData] = useState([])

    const handleclick = async () => {
        try {
            const response = await axios.get('/usuario/get-junta')
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

    return (
        <Box>
            <Background></Background>
            <Clientes data={allData} handleclick={handleclick} deleta={deleta}/>
        </Box>
    );
};

export default Demo