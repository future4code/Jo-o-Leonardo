import React from "react";
export desfault ListaPosts

class ListaPosts extends React.Component {

    state = {
        posts: [

            {
                nomeUsuario: 'paulinha'
                fotoUsuario: 'https://picsum.photos/50/50'
                fotoPost: 'https://picsum.photos/200/250'
            },
            {
                nomeUsuario: 'juliana'
                fotoUsuario: 'https://picsum.photos/50/60'
                fotoPost: 'https://picsum.photos/200/230'
            },
            {
                nomeUsuario: 'Ricardo'
                    fotoUsuario: 'https://picsum.photos/50/40'
                    fotoPost: 'https://picsum.photos/200/220'
            }
                }

    render() {

        const listaDeComponentes = this.state.pessoas.map((pessoa) => {

            return (
                <div className={'app-container'}>
                    <Post
                        {posts.nomeUsuario}
                        {posts.fotoUsuario}
                        {posts.fotoPost}
                    />
                </div>
            )
            
            
        ]
    }
