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

export default function Dialog2({DoItCreate, look, allCargos=[]}) {
    const [nome, setNome] = useState('')
    const [senha, setSenha] = useState('')
    const [email, setEmail] = useState('')
    const [cpf, setCPF] = useState('')
    const [idCargo, setCargo] = useState('')
    const [estudante, setEstudante] = useState(false)
    const [error, SetError] = useState('')
    const envio = {nome, email, cpf, senha, idCargo, estudante}

    const envio2 = async () => {
        if(envio){
            DoItCreate(envio)
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
                            <CheckboxCard estudante={estudante} onCheckedChange={(e) => setEstudante(!!e.checked)} label="Estudante" />
                            </Field>
                        </Field>
                    </Stack>
                </DialogBody>
                <DialogFooter>
                    <DialogActionTrigger asChild>
                        <Button variant="outline">Cancel</Button>
                    </DialogActionTrigger>
                    <Button onClick={()=> envio2()}>Save</Button>
                </DialogFooter>
                <DialogCloseTrigger />
            </DialogContent>
        </DialogRoot>
    )
}