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
import { DialogBody, DialogCloseTrigger, DialogContent, DialogFooter, DialogHeader, DialogRoot, DialogTitle, DialogTrigger, DialogActionTrigger } from "@/components/ui/dialog"

export default function Dialog2() {
    const [nome, setNome] = useState('')
    const [senha, setSenha] = useState('')
    const [email, setEmail] = useState('')
    const [CPF, setCPF] = useState('')
    const [cargo, setCargo] = useState('')
    const [ocupacao, setOcupacao] = useState(false)
    const [allCargos, SetAllCargos] = useState([])
    const [error, SetError] = useState('')


    const look = async () => {
        try {
            const response = await axios.get('/cargo')
            console.log(response)
            if (response.data && Array.isArray(response.data)) {
                SetAllCargos(response.data);
                console.log("responde cargo");
            } else {
                SetError("No valid data found or response format is incorrect");
            }
        } catch (error) {
            return res.status(500).send({ message: "Erro otario" })
        }
    }

    const DoIt = async () => {
        try {
            const Usuario = await axios.post(`/usuario`, {
                nome: nome,
                senha: senha,
                email: email,
                cpf: CPF,
                idCargo: cargo,
                estudante: ocupacao
            })
            if(DoIt){
                location.reload()
              }
        } catch (error) {
            console.log(error.message);
        }
    }  


    return (
        <DialogRoot>
            <DialogTrigger asChild>
                <Button variant="outline" size="sm" onClick={look}>
                    Adicionar Novo Cadastro
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Criar novo cadastro</DialogTitle>
                </DialogHeader>
                <DialogBody>
                    <Stack gap="4">
                        <Field>
                            <Field label="Nome">
                                <Input onChange={(a) => setNome(a.target.value)} placeholder="Digite seu Nome" _placeholder={{ color: "gray.800" }} />
                            </Field>
                            <Field label="Email">
                                <Input onChange={(a) => setEmail(a.target.value)} placeholder="Digite seu Email" _placeholder={{ color: "gray.800" }} />
                            </Field>
                            <Field label="CPF">
                                <Input onChange={(a) => setCPF(a.target.value)} placeholder="Digite seu CPF" _placeholder={{ color: "gray.800" }} />
                            </Field>
                            <Field label="Senha">
                                <PasswordInput onChange={(a) => setSenha(a.target.value)} placeholder="Digite sua senha" _placeholder={{ color: "gray.800" }} />
                            </Field>
                            <Field label="Cargo">
                                <NativeSelectRoot variant="subtle" size="lg" width="240px">
                                    <NativeSelectField onChange={(e) => setCargo(e.currentTarget.value)} placeholder="Selecione uma opcao">
                                    {allCargos.map((a) => (
                                        <option value={a.id}>{a.descricao}</option>
                                    ))}
                                    </NativeSelectField>
                                </NativeSelectRoot>
                            </Field>
                            <Field label="Ocupação">
                            <CheckboxCard ocupacao={ocupacao} onCheckedChange={(e) => setOcupacao(!!e.checked)} label="Estudante" />
                            </Field>
                        </Field>
                    </Stack>
                </DialogBody>
                <DialogFooter>
                    <DialogActionTrigger asChild>
                        <Button variant="outline">Cancel</Button>
                    </DialogActionTrigger>
                    <Button onClick={DoIt}>Save</Button>
                </DialogFooter>
                <DialogCloseTrigger />
            </DialogContent>
        </DialogRoot>
    )
}