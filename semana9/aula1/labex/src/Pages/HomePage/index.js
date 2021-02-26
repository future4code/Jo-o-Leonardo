import React from "react"
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import { ButtonsContainer } from "./styles";
import { Link } from 'react-router-dom';

const HomePage = () => {
    return <div>
        <Typography variant="h1" align={"center"} gutterBottom>LabeX</Typography>
        <ButtonsContainer>
            <Link to={'/Login'}>
            <Button variant={'contained'} color={'secondary'}> Área do administrador</Button>
            </Link>
            <Link to={'/inscricao'}>
            <Button variant={'contained'} color={'primary'}>Candidatura</Button>
            </Link>
        </ButtonsContainer>
    </div>
}

export default HomePage