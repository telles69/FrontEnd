import { Button, Card, Input, Stack, Flex, Center, Box, Image } from "@chakra-ui/react"
import Cadastro from "@/components/CadastroCard";
import Background from "@/layouts/background";
import axios from '../../../utils/axios';
import { useState, useEffect } from "react"

const Demo = () => {

    const [error, SetError] = useState('')
    const [allData, SetAllData] = useState([])
    const [allCargos, SetAllCargos] = useState([])

    async function look() {
        try {
            const response = await axios.get('/cargo')
            if (response.data && Array.isArray(response.data)) {
                SetAllCargos(response.data);
            } 
        } catch (error) {
            SetError("Otario");
        }
    }

    const handleClick = async (data = {}) => {
        try {
           const Usuario = await axios.post('/usuario', { 
             ...data
          })
          if(handleClick){
            location.reload()
          }
        } catch (error) {
            SetError("Otario Handleclick");
          
        }
    }

    return (
        <Box>
            <Background></Background>
            <Cadastro allData={allData} look={look} handleClick={handleClick} allCargos={allCargos}/>
        </Box>
    );
};

export default Demo