import Background from "@/layouts/background";
import axios from '../../../utils/axios';
import { useState, useEffect } from "react"
import { FileUploadList, FileUploadRoot, FileUploadTrigger, FileUploadDropzone } from "@/components/ui/file-upload"
import { Button, Card, Input, Stack, Flex, Center, Box, Image, Icon, Text, HStack, Link } from "@chakra-ui/react"
import { Toaster, toaster } from "@/components/ui/toaster"
import { useRouter } from 'next/router'

export default function Demo() {

    const [modelo, setModelo] = useState(null)

    const uploadFile = async () => {
        if (!modelo) {
            toaster.create({
                description: "Por favor, selecione um arquivo para upload.",
                type: "error",
            })
            return;
        }
        const formData = new FormData();
        formData.append("file", modelo);
        try {
            const response = await axios.post("http://localhost:3333/upload/modelo1", formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });

            if (response.type === "success") {
                toaster.create({
                    description: "Arquivo carregado com sucesso!",
                    type: "success",
                })
            } else {
                toaster.create({
                    description: "Erro ao fazer upload do arquivo.",
                    type: "error",
                })
            }
        } catch (error) {
            toaster.create({
                description: "Erro ao enviar o arquivo.",
                type: "error",
            })
        }
    };

    const handleDrop = (e) => {
        const file = e.target.files || e.dataTransfer.files;
        if (file && file.length > 0) {
            setModelo(file[0]);
        }
    }
    const router = useRouter()
    const voltar = async () => {
        router.push('/administrador/inicial')
    }

    return (
        <Box>
            <Background></Background>
            <Center minHeight="100vh">
                <Box
                    width="25%"
                    height="25%"
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
                            Modelo documentação Usuario
                        </Box>
                    </Box>
                    <Box>
                        <FileUploadRoot maxW="xl" alignItems="stretch" maxFiles={10}>
                            <FileUploadDropzone
                                bg="rgba(255, 255, 255, 0.3)"
                                label="Drag and drop here to upload"
                                type="file"
                                name="ola"
                                description=".png, .jpg, .doc, .docx, .pdf up to 5MB"
                                onDrop={handleDrop}
                                onChange={handleDrop}
                                accept=".png, .jpg, .doc, .docx, .pdf"
                            />
                            <FileUploadList modelo={modelo} showSize clearable />
                        </FileUploadRoot>
                    </Box>
                    <HStack justifyContent="center" mt="3" ml="3">
                        <Button variant="outline" onClick={() => voltar()}>Voltar</Button>
                        <Button onClick={() => uploadFile()}>Enviar</Button>
                    </HStack>
                </Box>
            </Center>
            <Toaster />
        </Box>
    )
}