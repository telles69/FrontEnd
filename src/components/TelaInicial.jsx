import { Button, Card, Input, Stack, Flex, Center, Box, Image, Icon, Text, HStack, Link, Table } from "@chakra-ui/react"
import { useRouter } from "next/router"

export default function Inicial() {

    const router = useRouter()
    const goClientes = () =>{
        router.push('/administrador/clientes')
    }

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
                <Box>
                <Button variant="solid" colorScheme="teal" onClick={goClientes}>
                            Clientes 
                        </Button>
                </Box>
            </Box>
            
        </Box>
    </Center>
    )
}

