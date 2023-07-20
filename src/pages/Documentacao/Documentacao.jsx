import { Typography } from "@mui/material";
import * as Styled from "./Documentacao.styled";
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(comando, descricao) {
    return { comando, descricao };
}

const rows = [
    createData('!addvideo', 'Adiciona o vídeo da url na lista de reprodução'),
    createData('!currentvideo', 'Exibe video reproduzindo no momento'),
    createData('!tutorial', 'Lista os comandos utilizáveis no bot '),
    createData('!videolist', 'Link da página de reprodução de vídeos'),
];

const rowsMod = [
    createData('!delvideo', 'Exclui o vídeo na posição n da lista de reprodução'),
    createData('!promotevideo', 'Move o video indicado para a posição #1 da playlist'),
    createData('!skipvideo', 'Pula vídeo reproduzindo no momento'),
    createData('!cleanlist', 'Limpa a lista de reprodução de vídeos'),
];

function Documentacao() {

    return (
        <>
            <Styled.Container>
                <Styled.Titulo variant='h2'>Documentação</Styled.Titulo>
                <Styled.SubTitulo variant='h3'>Sobre</Styled.SubTitulo>
                <Styled.Espacamento>
                    <Typography variant="body1">
                        O aumcebot é um bot para twitch com o objetivo de criar playlist de vídeos com interação do chat.
                    </Typography>
                </Styled.Espacamento>


                <Styled.SubTitulo variant='h3'>Como configurar</Styled.SubTitulo>
                <Styled.Espacamento>
                    <Typography variant="body1">
                        Atualmente só é possível utilizar o bot em um canal da twitch por vez.
                    </Typography>
                    <ol>
                        <li>
                            <Typography variant="body1">
                                Para utilizar o bot entre em contato com a desenvolvedora (notoya_zita) pelo susurro na twitch solicitando o uso do mesmo e aguarde ele ser configurado para a sua live stream.
                            </Typography>
                        </li>
                        <li>
                            <Typography variant="body1">
                                Após receber a confirmação que o bot foi configurado corretamente basta adicionar o usuário aumcebot (usuário do bot) como moderador da live.
                            </Typography>
                        </li>
                    </ol>
                </Styled.Espacamento>

                <Styled.SubTitulo variant='h3'>Comandos</Styled.SubTitulo>
                <Styled.Espacamento>
                    <TableContainer component={Paper}>
                        <Styled.TituloTabela
                            sx={{ flex: '1 1 100%' }}
                            variant="h6"
                            id="tableTitle"
                            component="div"
                        >
                            Padrão
                        </Styled.TituloTabela>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell sx={{ fontWeight: 'bold' }}>Comando</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }}>Descrição</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow
                                        key={row.comando}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {row.comando}
                                        </TableCell>
                                        <TableCell>{row.descricao}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Styled.Espacamento>

                
                    <TableContainer component={Paper}>
                        <Styled.TituloTabela
                            sx={{ flex: '1 1 100%' }}
                            variant="h6"
                            id="tableTitle"
                            component="div"
                        >
                            Moderador
                        </Styled.TituloTabela>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell sx={{ fontWeight: 'bold' }}>Comando</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }}>Descrição</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rowsMod.map((row) => (
                                    <TableRow
                                        key={row.comando}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {row.comando}
                                        </TableCell>
                                        <TableCell>{row.descricao}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    

            </Styled.Container>
        </>
    )
}

export default Documentacao
