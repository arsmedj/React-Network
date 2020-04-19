import React from 'react'
import style from './Users.module.css'
import { NavLink } from 'react-router-dom'
import { getUserProfile } from '../../Redux/profileReducer'
const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
  let pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }
  if (props.isAuth === false) {
    return <div>You need login to see more</div>
  } else
    return (
      <div>
        <div>
          {pages.map((page) => {
            return (
              <span
                className={props.currentPage === page && style.selectedPage}
                onClick={(e) => {
                  {
                    props.onPageChanged(page)
                  }
                }}
              >
                {page}
              </span>
            )
          })}
        </div>
        {props.users.map((user) => {
          return (
            <div key={user.id} className={style.user}>
              <NavLink to={`/profile/${user.id}`}>
                <img
                  src={
                    user.photos.small != null
                      ? user.photos.small
                      : 'https://www.stickpng.com/assets/images/585e4bcdcb11b227491c3396.png'
                  }
                  className={style.img}
                ></img>
              </NavLink>
              <div>
                <div>{user.name}</div>
                <div>{user.status}</div>
              </div>
              <div className="btn">
                {user.followed === true ? (
                  <button
                    disabled={props.followingInProgress.some(
                      (id) => id === user.id
                    )}
                    onClick={() => {
                      props.unfollow(user.id)
                    }}
                    className={style.followed}
                  >
                    Вы подписаны
                  </button>
                ) : (
                  <button
                    disabled={props.followingInProgress.some(
                      (id) => id === user.id
                    )}
                    onClick={() => {
                      props.follow(user.id)
                    }}
                    className={style.unfollowed}
                  >
                    Подписаться
                  </button>
                )}
              </div>
            </div>
          )
        })}
      </div>
    )
}

export default Users
