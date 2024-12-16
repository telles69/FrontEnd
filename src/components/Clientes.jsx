import { Button, Card, Input, Stack, Flex, Center, Box, Image, Icon, Text, HStack, Link, Table } from "@chakra-ui/react"
import { Field } from "@/components/ui/field"
import { PasswordInput, PasswordStrengthMeter } from "@/components/ui/password-input"
import { useRouter } from 'next/router'
import { CheckboxCard } from "@/components/ui/checkbox-card"
import { NativeSelectField, NativeSelectRoot } from "@/components/ui/native-select"
import axios from '../utils/axios';
import { useState, useEffect } from "react"
import React from 'react';
import { RiPencilFill } from "react-icons/ri";
import Dialog from "./ClienteDialog"
import Dialog2 from "./ClienteDialog2"
import { FaTrash } from "react-icons/fa";
import Pagination from "./Pagination"
import { IoMdArrowRoundBack } from "react-icons/io";

export default function Clientes({ data=[], handleclick, deleta, look, DoIt, allCargos=[], DoItCreate }) {

    const [allData, SetAllData] = useState([])
    const [error, SetError] = useState('')
    const [page, setPage] = useState(1)
    
    const pageSize = 10;

    const visibleItems = data.slice((page - 1) * pageSize, page * pageSize);

    const logout = async () => {
        localStorage.removeItem('token')
        goLogin()
    }

    const verifyAdmin = async () => { //arrumar
        const token = localStorage.getItem('token');
        if (!token) {
          router.push('/administrador/login');
        }
    }
  
    const verifyToken = async () => {
        const token = localStorage.getItem('token');
        console.log("Isso é um token")
        console.log(token)
    }

    const voltar = async () => {
        router.push('/administrador/inicial')
    }

    useEffect(() => {
       verifyAdmin();
       verifyToken();
       handleclick();
    }, []);

    const router = useRouter()
    const goLogin = () => {
        router.push('/administrador/login')
    }
    return (
        <Center minHei ght="100vh">
            <Box
                width="50%"
                height="50%"
                p="6"
                bg="rgba(255, 255, 255, 0.2)"
                borderRadius="lg"
                boxShadow="lg"
                backdropFilter="blur(10px)"
                border="1px solid rgba(255, 255, 255, 0.3)"
            >
                <Box textAlign="center" mb="1">
                    <Box as="h2" fontSize="400%" fontWeight="bold" >
                        Usuários Cadastrados
                    </Box>
                </Box>
                <HStack>
                <Box textAlign="left" mb="3" >
                <Button size="sm" variant="outline" onClick={() => voltar()}><IoMdArrowRoundBack /></Button>
                </Box>
                <Box textAlign="right" mb="3" >
                <Button marginLeft={"60vh"} colorPalette="red" size="sm" marginRight={"2vh"} variant="outline" onClick={ () => logout()}>Logout</Button>
                <Dialog2 DoItCreate={DoItCreate} look={look} allCargos={allCargos}></Dialog2>
                </Box>
                </HStack>
                <Box mb="3">
                <Table.Root size="lg">
                    <Table.Header>
                        <Table.Row backgroundColor= "rgba(255, 255, 255, 0.2)">
                            <Table.ColumnHeader borderRadius="10px 0px 0px 0px" >Id</Table.ColumnHeader>
                            <Table.ColumnHeader >Nome</Table.ColumnHeader>
                            <Table.ColumnHeader >Email</Table.ColumnHeader>
                            <Table.ColumnHeader>CPF</Table.ColumnHeader>
                            <Table.ColumnHeader>Estudante</Table.ColumnHeader>
                            <Table.ColumnHeader>Cargo</Table.ColumnHeader>
                            <Table.ColumnHeader textAlign="end"  borderRadius="0px 10px 0px 0px" >Editar</Table.ColumnHeader>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {visibleItems.map((a) => (
                            <Table.Row key={a.id} backgroundColor= "rgba(255, 255, 255, 0.2)">
                                <Table.Cell >{a.id}</Table.Cell>
                                <Table.Cell >{a.nome}</Table.Cell>
                                <Table.Cell >{a.email}</Table.Cell>
                                <Table.Cell >{a.cpf}</Table.Cell>
                                {a.estudante && <Table.Cell >Sim</Table.Cell>}
                                {!a.estudante && <Table.Cell >Não</Table.Cell>}
                                <Table.Cell >{a.descricao}</Table.Cell>
                                <Table.Cell textAlign="end"><Dialog data={a} look={look} DoIt={DoIt} allCargos={allCargos}></Dialog><Button size="sm" marginLeft={"2vh"} variant="outline" onClick={ () => deleta(a.id)}><FaTrash /></Button></Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table.Root>
                </Box>
                <Pagination datalength={data.length} pageSize={pageSize} page={page} setPage={setPage}></Pagination>
            </Box>
        </Center>
    );
}
