import React from 'react'
import style from './ProfileInfo.module.css'
import Preloader from '../../common/preloader/preloader'
import ProfileStatus from './ProfileStatus'
import { NavLink } from 'react-router-dom'
const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  } else {
    let { profile } = props
    return (
      <div>
        <div className={style.avatar}>
          <NavLink to={`/profile/${props.userId}`} />
        </div>
        <ProfileStatus
          status={props.status}
          updateStatus={props.updateStatus}
        ></ProfileStatus>
        <div className={style.description}>
          <p>{profile.aboutMe}</p>
          <p>{profile.lookingForAJobDescription}</p>
          <p>{profile.fullName}</p>
        </div>
      </div>
    )
  }
}

export default ProfileInfo
