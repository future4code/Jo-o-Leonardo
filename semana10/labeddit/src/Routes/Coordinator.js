export const goToRegister = (history) => {
  history.push("/cadastro")
}

export const goToLogin = (history) => {
  history.push("/login")
}

export const goToFeed = (history) => {
  history.push("/")
}

export const goToPost = (history, id) => {
  history.push(`/detalhes/${id}`)
}

export const goToCreatePost = (history) => {
  history.push('/criar-postagem')
}