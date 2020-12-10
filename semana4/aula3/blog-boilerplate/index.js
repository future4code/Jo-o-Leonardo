
    addPost = () => {
    const titulo = document.getElementById("titulo-post")
    const tituloValue = titulo.value

    const autor = document.getElementById("autor-post")
    const autorValue = autor.value

    const conteudo = document.getElementById("conteudo-post")
    const conteudoValue = conteudo.value

    const div = document.getElementById("container-de-posts")

    if (tituloValue){
        div.innerHTML += `<h1>${tituloValue}</h1>`
        } else{
            alert('Insira um titulo valido!')
        }

    if (autorValue){
        div.innerHTML += `<h2>${autorValue}</h2>`
        } else{
            alert('Insira um autor valido!')
        }

    if (conteudoValue){
    div.innerHTML += `<p>${conteudoValue}</p>`
        } else{
            alert('Insira o conteudo!')
        }    
        
        titulo.value = ''
        autor.value = ''
        conteudo.value = ''
}