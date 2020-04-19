import React from 'react'
import style from './Profile.module.css'
import MyPostsContainer from './MyPosts/MyPostsContainer'
import ProfileInfo from './ProfileInfo/ProfileInfo'
const Profile = (props) => {
  // debugger
  return (
    <div className={style.profile}>
      <ProfileInfo
        profile={props.profile}
        status={props.status}
        updateStatus={props.updateStatus}
      />
      <MyPostsContainer> </MyPostsContainer>
    </div>
  )
}

export default Profile
