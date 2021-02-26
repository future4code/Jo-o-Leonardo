import React from 'react'
import { ScreenContainer, LogoImage, SignUpButtonContainer } from "./styled"
import logo from '../../assets/logo.png'
import { Button } from '@material-ui/core'
import LoginForm from './LoginForm'
import { goToRegister } from '../../Routes/Coordinator'
import { useHistory } from 'react-router-dom'
import useUnprotectedPage from '../../hooks/useUnprotectedPage'

const LoginPage = ({setRightButtonText}) => {
    useUnprotectedPage()
    const history = useHistory()
    
    return( 
            <ScreenContainer>
            <LogoImage src={logo}/>
            <LoginForm setRightButtonText={setRightButtonText}/>
            <SignUpButtonContainer>
            <Button
              onClick={() => goToRegister(history)}
              type={"submit"}
              fullWidth
              variant={"text"}
              color={"primary"}
              margin={'normal'}
              >
                Cadastre-se!
                </Button>
            </SignUpButtonContainer>
        </ScreenContainer>
    )
}

export default LoginPage