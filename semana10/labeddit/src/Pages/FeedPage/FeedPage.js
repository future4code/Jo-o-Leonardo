import React from "react"
import PostCards from '../../Components/PostCard/PostCard'
import useProtectedPage from '../../hooks/useProtectedPage'
import { PostListContainer, AddPostButton } from './styled'
import useRequestData from '../../hooks/useRequestData'
import { BASE_URL } from '../../constants/urls'
import { Add } from '@material-ui/icons'
import { useHistory } from 'react-router-dom'
import { goToCreatePost, goToPost } from '../../Routes/Coordinator'

const FeedPage = () => {
  useProtectedPage()
  const history = useHistory()
  const recipes = useRequestData([], `${BASE_URL}/posts`)

  const onClickCard = (id) => {
    goToPost(history, id)
  }

    return (
      <div></div>
      )}
    

export default FeedPage
      