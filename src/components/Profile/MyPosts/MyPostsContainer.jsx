// import React from "react";
import MyPosts from './MyPosts'
import { addPostActionCreator } from '../../../Redux/profileReducer'
import { connect } from 'react-redux'

const mapToStateProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addPost: (newPostBody) => {
      dispatch(addPostActionCreator(newPostBody))
    },
  }
}

const MyPostsContainer = connect(mapToStateProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer
