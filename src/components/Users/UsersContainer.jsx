import React from 'react'
import { connect } from 'react-redux'
import {
  setCurrentPage,
  getUsers,
  toggleFollow,
  toggleUnfollow,
} from '../../Redux/usersReducer'
import style from './Users.module.css'
import Users from './Users'
import Preloader from '../common/preloader/preloader'
import {
  getUsersSelector,
  getPageSizeSelector,
  getTotalUsersCountSelector,
  getCurrentPage,
  getIsFetching,
  getFollowingProgress,
} from '../../Redux/usersSelectors'
class UsersContainer extends React.Component {
  constructor(props) {
    super(props)
    this.props = props
  }

  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize)
  }

  onPageChanged = (page) => {
    this.props.getUsers(this.props.currentPage, this.props.pageSize)
    this.props.setCurrentPage(page)
  }

  render() {
    return (
      <div className={style.users}>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          follow={this.props.toggleFollow}
          unfollow={this.props.toggleUnfollow}
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          followingProgress={this.props.followingProgress}
          followingInProgress={this.props.followingInProgress}
          isAuth={this.props.isAuth}
        ></Users>
      </div>
    )
  }
}

// const AuthRedirectComponent = (props) => {
//   if (props.isAuth === false) {
//     return <div>You need login to see more</div>
//   } else return <UsersContainer {...props} />
// }

// export default AuthRedirectComponent;

// const mapStateToProps = (state) => {
//   return {
//     users: state.usersPage.users,
//     pageSize: state.usersPage.pageSize,
//     totalUsersCount: state.usersPage.totalUserCount,
//     currentPage: state.usersPage.currentPage,
//     isFetching: state.usersPage.isFetching,
//     followingInProgress: state.usersPage.followingInProgress,
//     // isAuth: state.auth.isAuth,
//   }
// }

const mapStateToProps = (state) => {
  return {
    users: getUsersSelector(state),
    pageSize: getPageSizeSelector(state),
    totalUsersCount: getTotalUsersCountSelector(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingProgress(state),
  }
}

export default connect(mapStateToProps, {
  toggleFollow,
  toggleUnfollow,
  setCurrentPage,
  getUsers,
})(UsersContainer)
