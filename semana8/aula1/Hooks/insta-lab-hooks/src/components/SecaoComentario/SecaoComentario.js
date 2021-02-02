import React, {useState} from 'react'
import styled from "styled-components"

const CommentContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
`

const InputComment = styled.input `
    width: 100%;
    margin-right: 5px;
`

const SecaoComentario = (props) => {

	const [secaoComentario, setSecaoComentario] = useState(false)
	const [comentarios, setComentarios] = []

	onChangeComentario = (event) => {
		setComentarios({comentarios: event.target.value})
	}

	render() {
		return <CommentContainer>
			<InputComment
				placeholder={'Comentário'}
				value={comentarios}
				onChange={onChangeComentario}
			/>
			<button onClick={() => {props.enviarComentario(setComentarios)}}>Enviar</button>
		</CommentContainer>
}


export default SecaoComentario