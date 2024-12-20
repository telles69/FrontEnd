import { Button, Card, Input, Stack, Flex, Center, Box, Image, Icon, Text, HStack, Link, Table } from "@chakra-ui/react"
import { Field } from "@/components/ui/field"
import { PasswordInput, PasswordStrengthMeter } from "@/components/ui/password-input"   
import { CheckboxCard } from "@/components/ui/checkbox-card"
import { NativeSelectField, NativeSelectRoot } from "@/components/ui/native-select"
import { useState, useEffect } from "react"
import React from 'react';
import { RiPencilFill } from "react-icons/ri";
import { DialogBody, DialogCloseTrigger, DialogContent, DialogFooter, DialogHeader, DialogRoot, DialogTitle, DialogTrigger, DialogActionTrigger } from "@/components/ui/dialog"

export default function Dialog({data = [], look, DoIt, allCargos=[]}) {
    const [id, setId] = useState('')
    const [nome, setNome] = useState(data.nome)
    const [senha, setSenha] = useState(data.senha)
    const [email, setEmail] = useState(data.email)
    const [cpf, setCPF] = useState(data.cpf)
    const [idCargo, setCargo] = useState('')
    const [estudante, setEstudante] = useState(false)
    const [error, SetError] = useState('')
    const envioEditar = {id, nome, email, cpf, senha, idCargo, estudante}

    const envio3 = async () => {
        setId(data.id)
        if(id){
            envio2()
        }
    }

    const envio2 = async () => {
        if(envioEditar){
            DoIt(id, envioEditar)
        }
    }
   
    return (
        <DialogRoot>
            <DialogTrigger asChild>
                <Button variant="outline" size="sm" onClick={look}>
                    <RiPencilFill />
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Editar Informações</DialogTitle>
                </DialogHeader>
                <DialogBody>
                    <Stack gap="4">
                        <Field>
                            <Field label="Nome" required errorText="Campo obrigatório">
                                <Input value={nome} onChange={(a) => setNome(a.target.value)} placeholder="Digite seu Nome" _placeholder={{ color: "gray.800" }} />
                            </Field>
                            <Field label="Email" required>
                                <Input value={email} onChange={(a) => setEmail(a.target.value)} placeholder="Digite seu Email" _placeholder={{ color: "gray.800" }} />
                            </Field>
                            <Field label="CPF" required>
                                <Input value={cpf}  onChange={(a) => setCPF(a.target.value)} placeholder="Digite seu CPF" _placeholder={{ color: "gray.800" }} />
                            </Field>
                            <Field label="Senha" required>
                                <PasswordInput value={senha}  onChange={(a) => setSenha(a.target.value)} placeholder="Digite sua senha" _placeholder={{ color: "gray.800" }} />
                            </Field>
                            <Field label="Cargo" required errorText="Selecione um cargo">
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
                    <Button onClick={() => envio3()}>Save</Button>
                </DialogFooter>
                <DialogCloseTrigger />
            </DialogContent>
        </DialogRoot>
    )
}