import { Box, CircularProgress } from '@mui/material';
import * as Styled from "./Carregando.styled";

function Carregando() {
    return (
        <>
            <Styled.BoxCarregando p={10}>
                <CircularProgress />
            </Styled.BoxCarregando>
        </>
    )
}


export default Carregando