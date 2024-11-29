import { Box } from "@chakra-ui/react"
import Inicial from "@/components/TelaInicial";
import Background from "@/layouts/background";

const Demo = () => {
    return (
        <div>
            <Box>
                <Background></Background>
            </Box>
            <Inicial></Inicial>
        </div>
    );
};

export default Demo