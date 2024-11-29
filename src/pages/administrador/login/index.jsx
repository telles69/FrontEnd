import { Button, Card, Input, Stack, Flex, Center, Box, Image } from "@chakra-ui/react"
import { Field } from "@/components/ui/field"
import { HStack } from "@chakra-ui/react"
import Login from "@/components/LoginCard"
import Background from "@/layouts/background"

const Demo = () => {
    return (
        <Box>
            <Background></Background>
            <Login></Login>
        </Box>
    );
};

export default Demo