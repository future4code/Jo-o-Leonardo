import { Button, TextField, Typography } from "@material-ui/core"
import React from "react"
import { LoginForm } from "./styles"

const LoginPage = () => {
    return <div>
        <Typography variant="h1" align={"center"} gutterBottom>Login</Typography>
        <LoginForm>
            <TextField label={"Email"} type={"email"}/>
            <TextField label={"Senha"} type={"password"}/>
            <Button variant={'contained'} color={'primary'} type={"submit"}>Entrar</Button>
        </LoginForm>
        </div>
}

export default LoginPage