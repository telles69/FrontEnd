import { Button, Card, Input, Stack, Flex, Center, Box, Image } from "@chakra-ui/react"
import { Field } from "@/components/ui/field"
import { HStack } from "@chakra-ui/react"
import Login from "@/components/LoginCard"

const Demo = () => {
    return (
        <Box>
            {/* Fundo com uma imagem */}
            <Box
                bgRepeat="no-repeat"
                bgSize="cover"
                bgPosition="center"
                bgImage="url('https://wallpapers.com/images/hd/las-vegas-bellagio-fountains-azsz8a5sepqzyzk6.jpg')"
                position="absolute"
                top="0"
                left="0"
                width="100%"
                height="100vh"
                zIndex="-1"
            />

            <Login cadastrar={false}></Login>
        </Box>
    );
};

export default Demo