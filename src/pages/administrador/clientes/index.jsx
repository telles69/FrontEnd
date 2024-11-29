import { Button, Card, Input, Stack, Flex, Center, Box, Image } from "@chakra-ui/react"
import { Field } from "@/components/ui/field"
import { HStack } from "@chakra-ui/react"
import Login from "@/components/LoginCard"
import Cadastro from "@/components/CadastroCard";
import Background from "@/layouts/background";
import Clientes from "@/components/Clientes";

const Demo = () => {
    return (
        <Box>
            <Background></Background>
            <Clientes></Clientes>

        </Box>
    );
};

export default Demo