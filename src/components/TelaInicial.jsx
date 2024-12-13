import { Button, Card, Input, Stack, Flex, Center, Box, Image, Icon, Text, HStack, Link, Table } from "@chakra-ui/react"
import { useRouter } from "next/router"
import { useState, useEffect } from "react"

export default function Inicial() {

    const verifyAdmin = async () => { 
        const token = localStorage.getItem('token');
        if (!token) {
          router.push('/administrador/login');
        }
    }

    const router = useRouter()
    const goClientes = () =>{
        router.push('/administrador/clientes')
    }

    useEffect(() => {
        verifyAdmin();
     }, []);
 

    return(
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
                    Seleção
                </Box>
                <Button mb="3" colorPalette="red" size="md" variant="outline" onClick={ () => logout()}>Logout</Button>
                <Box>
                <Button variant="solid" size="md" colorScheme="teal" onClick={goClientes}>
                            Clientes 
                        </Button>
                </Box>
            </Box>
            
        </Box>
    </Center>
    )
}

