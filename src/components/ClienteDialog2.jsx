import { Button, Card, Input, Stack, Flex, Center, Box, Image, Icon, Text, HStack, Link, Table } from "@chakra-ui/react"
import { Field } from "@/components/ui/field"
import { PasswordInput, PasswordStrengthMeter } from "@/components/ui/password-input"
import { CheckboxCard } from "@/components/ui/checkbox-card"
import { NativeSelectField, NativeSelectRoot } from "@/components/ui/native-select"
import { useState, useEffect } from "react"
import React from 'react';
import { DialogBody, DialogCloseTrigger, DialogContent, DialogFooter, DialogHeader, DialogRoot, DialogTitle, DialogTrigger, DialogActionTrigger } from "@/components/ui/dialog"

export default function Dialog2({ DoItCreate, look, allCargos = [] }) {
    const [nome, setNome] = useState('')
    const [senha, setSenha] = useState('')
    const [email, setEmail] = useState('')
    const [cpf, setCPF] = useState('')
    const [idCargo, setCargo] = useState('')
    const [estudante, setEstudante] = useState(false)
    const [errors, setErrors] = useState('')
    const envio = { nome, email, cpf, senha, idCargo, estudante }

    const envio2 = async () => {
        if (validateFields()) {
            DoItCreate(envio)
        }
    }

    const validateFields = () => {
        const newErrors = {}
        if (!nome) newErrors.nome = "O nome é obrigatório"
        if (!email) newErrors.email = "O email é obrigatório"
        if (!cpf) newErrors.cpf = "O CPF é obrigatório"
        if (!senha) newErrors.senha = "A senha é obrigatória"
        if (!idCargo) newErrors.idCargo = "O cargo é obrigatório"

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
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
                                <Input
                                    onChange={(a) => setNome(a.target.value)}
                                    placeholder="Digite seu Nome"
                                    _placeholder={{ color: "gray.800" }}
                                    borderColor={errors.nome ? "red.500" : "black"} />
                                    {errors.nome && <Text color="red.500" fontSize="sm">{errors.nome}</Text>}
                            </Field>
                            <Field label="Email">
                                <Input
                                    onChange={(a) => setEmail(a.target.value)}
                                    placeholder="Digite seu Email"
                                    _placeholder={{ color: "gray.800" }}
                                    borderColor={errors.nome ? "red.500" : "black"} />
                                    {errors.nome && <Text color="red.500" fontSize="sm">{errors.nome}</Text>}
                            </Field>
                            <Field label="CPF">
                                <Input
                                    onChange={(a) => setCPF(a.target.value)}
                                    placeholder="Digite seu CPF"
                                    _placeholder={{ color: "gray.800" }} 
                                    borderColor={errors.nome ? "red.500" : "black"}/>
                                    {errors.nome && <Text color="red.500" fontSize="sm">{errors.nome}</Text>}
                            </Field>
                            <Field label="Senha">
                                <PasswordInput
                                    onChange={(a) => setSenha(a.target.value)}
                                    placeholder="Digite sua senha"
                                    _placeholder={{ color: "gray.800" }} 
                                    borderColor={errors.nome ? "red.500" : "black"}/>
                                    {errors.nome && <Text color="red.500" fontSize="sm">{errors.nome}</Text>}
                            </Field>
                            <Field label="Cargo">
                                <NativeSelectRoot
                                    variant="subtle"
                                    size="lg"
                                    width="240px">
                                    <NativeSelectField
                                        borderColor={errors.nome ? "red.500" : "black"}
                                        onChange={(e) => setCargo(e.currentTarget.value)}
                                        placeholder="Selecione uma opcao">
                                        {errors.nome && <Text color="red.500" fontSize="sm">{errors.nome}</Text>}
                                        {allCargos.map((a) => (
                                            <option value={a.id}>{a.descricao}</option>
                                        ))}
                                    </NativeSelectField>
                                </NativeSelectRoot>
                            </Field>
                            <Field label="Ocupação">
                                <CheckboxCard
                                    estudante={estudante}
                                    onCheckedChange={(e) => setEstudante(!!e.checked)}
                                    label="Estudante" />
                            </Field>
                        </Field>
                    </Stack>
                </DialogBody>
                <DialogFooter>
                    <DialogActionTrigger asChild>
                        <Button variant="outline">Cancel</Button>
                    </DialogActionTrigger>
                    <Button onClick={() => envio2()}>Save</Button>
                </DialogFooter>
                <DialogCloseTrigger />
            </DialogContent>
        </DialogRoot>
    )
}