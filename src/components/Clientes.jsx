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
import Dialog from "./ClienteDialog"

export default function Clientes() {

    const [allData, SetAllData] = useState([])
    const [error, SetError] = useState('')

    const handleclick = async () => {
        try {
            const response = await axios.get('/usuario/get-junta')
            if (response.data && Array.isArray(response.data)) {
                console.log("nigga")
                SetAllData(response.data);
            } else {
                SetError("No valid data found or response format is incorrect");
            }
        } catch (error) {
            return res.status(500).send({ message: "Erro otario" })
        }
    }

    useEffect(() => {
        handleclick();
    }, []);

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
                <Box textAlign="center" mb="6">
                    <Image src="https://gainblers.com/imagenes/casas/pokerstarssports/pokerstars-logo.png" alt="LOGO" />
                    <Box as="h2" fontSize="2xl" fontWeight="bold">
                        Seleção
                    </Box>
                </Box>
                <Table.Root size="lg">
                    <Table.Header>
                        <Table.Row>
                            <Table.ColumnHeader>Nome</Table.ColumnHeader>
                            <Table.ColumnHeader>Email</Table.ColumnHeader>
                            <Table.ColumnHeader>CPF</Table.ColumnHeader>
                            <Table.ColumnHeader>Estudante</Table.ColumnHeader>
                            <Table.ColumnHeader>Cargo</Table.ColumnHeader>
                            <Table.ColumnHeader textAlign="end">Editar</Table.ColumnHeader>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {allData.map((a) => (
                            <Table.Row key={a.id}>
                                <Table.Cell>{a.nome}</Table.Cell>
                                <Table.Cell>{a.email}</Table.Cell>
                                <Table.Cell>{a.cpf}</Table.Cell>
                                {a.estudante && <Table.Cell>Sim</Table.Cell>}
                                {!a.estudante && <Table.Cell>Não</Table.Cell>}
                                <Table.Cell>{a.idCargo}</Table.Cell>
                                <Table.Cell textAlign="end"><Dialog></Dialog></Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table.Root>
            </Box>
        </Center>
    );
}

