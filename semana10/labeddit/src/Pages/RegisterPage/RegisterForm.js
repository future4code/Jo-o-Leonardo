import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { InputsContainer, SignUpFormContainer } from './styled'
import { useHistory } from 'react-router-dom'
import useForm from '../../hooks/useForm'
import { register } from '../../services/user'

const RegisterForm = ({setRightButtonText}) => {
    const history = useHistory()
    const [form, onChange, clear] = useForm({ email: '', password: '', username: '' })

    const onSubmitForm = (event) => {
        event.preventDefault()
        register(form, clear, history, setRightButtonText)
    }

    return (
        <form onSubmit={onSubmitForm}>
            <SignUpFormContainer>
                <InputsContainer>
                <TextField
                    name={'email'}
                    value={form.email}
                    onChange={onChange}
                    label={'E-mail'}
                    variant={'outlined'}
                    type={'email'}
                    fullWidth
                    required
                    margin={'normal'}
                    />
                <TextField
                    name={'password'}
                    value={form.password}
                    onChange={onChange}
                    label={'Senha'}
                    variant={'outlined'}
                    type={'password'}
                    fullWidth
                    required
                    margin={'normal'}
                    />
                 <TextField
                    name={'username'}
                    value={form.username}
                    onChange={onChange}
                    label={'Nome de usuário'}
                    variant={'outlined'}
                    type={'text'}
                    fullWidth
                    required
                    margin={'normal'}
                    />
                </InputsContainer>
                <Button
                    color={'primary'}
                    variant={'contained'}
                    type={'subit'}
                    fullWidth
                > Efetuar Cadastro! </Button>
            </SignUpFormContainer>
        </form>
    )
}

export default RegisterForm

