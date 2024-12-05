import { Button, Card, Input, Stack, Flex, Center, Box, Image } from "@chakra-ui/react"
import { Field } from "@/components/ui/field"
import { HStack } from "@chakra-ui/react"
import Login from "@/components/LoginCard"
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
            } else {
                SetError("No valid data found or response format is incorrect");
            }
        } catch (error) {
            return res.status(500).send({ message: "Erro otario" })
        }
    }

    const handleClick = async () => {
        try {
           const Usuario = await axios.post('/usuario', { 
             nome: nome,
             senha: senha,
             email: email, 
             cpf: CPF,
             idCargo: cargo,
             estudante: ocupacao
          })
          if(handleClick){
            location.reload()
          }
        } catch (error) {
          console.log(error.message);
          
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