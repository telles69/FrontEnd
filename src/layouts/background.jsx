import { Box } from "@chakra-ui/react"

export default function Background() {
    return (
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
    );
};

