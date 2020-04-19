import React from 'react'
import style from './MyPosts.module.css'
import Post from './Post/Post'
import { Field, reduxForm } from 'redux-form'
import { requiredField } from '../../../utils/validators/validators'
import { Textarea } from '../../common/FormsControls/FormsControl'

const MyPosts = (props) => {
  let postsElements = props.posts.map((post) => {
    return <Post message={post.post} likesCount={post.likesCount}></Post>
  })

  let onAddPost = (values) => {
    props.addPost(values.newPostBody)
  }
  return (
    <div className={style.MyPosts}>
      <h2>My posts</h2>
      <div>
        <AddPostFormRedux onSubmit={onAddPost} />
      </div>
      <div className={style.posts}>{postsElements.reverse()}</div>
    </div>
  )
}

const AddPostForm = (props) => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <Field
          validate={[requiredField]}
          component={Textarea}
          placeholder="Add post"
          name="newPostBody"
          placeholder={'Add post'}
        ></Field>
        <button>Add post</button>
      </form>
    </div>
  )
}
const AddPostFormRedux = reduxForm({ form: 'profileAddPostForm' })(AddPostForm)

export default MyPosts
