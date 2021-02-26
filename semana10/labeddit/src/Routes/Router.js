import React from 'react'
import { Switch, Route} from "react-router-dom"
import FeedPage from '../Pages/FeedPage/FeedPage'
import LoginPage from '../Pages/LoginPage/LoginPage'
import PostPage from '../Pages/PostPage/PostPage'
import RegisterPage from '../Pages/RegisterPage/RegisterPage'
import ErrorPage from '../Pages/ErrorPage/ErrorPage'
import CreatePostPage from '../Pages/CreatePostPage/CreatePostPage'

const Router = ({setRightButtonText}) => {
  return (
      <Switch>
      <Route exact path="/cadastro">
          <RegisterPage setRightButtonText={setRightButtonText}/>
        </Route>
        <Route exact path="/login">
          <LoginPage setRightButtonText={setRightButtonText}/>
        </Route>
        <Route exact path="/">
          <FeedPage/>
        </Route>
        <Route exact path="/detalhes/:id">
          <PostPage/>
        </Route>
        <Route exact path="/criar-postagem">
          <CreatePostPage/>
        </Route>
        <Route>
          <ErrorPage/>
        </Route>
      </Switch>
  )
}

export default Router