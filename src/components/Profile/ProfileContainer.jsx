import React, { Component } from 'react'
import Profile from './Profile'
import { connect } from 'react-redux'
import {
  getUserProfile,
  getStatus,
  updateStatus,
} from './../../Redux/profileReducer'
import { withRouter } from 'react-router-dom'
import withAuthRedirectComponent from '../../hoc/withAuthRedirect'
import { compose } from 'redux'
class ProfileContainer extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = this.props.authoriedUserId
      if (!userId) {
        this.props.history.push('/login')
      }
    }
    this.props.getUserProfile(userId)
    this.props.getStatus(userId)
  }

  render() {
    return (
      <Profile
        {...this.props}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
      />
    )
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  isAuth: state.auth.isAuth,
  status: state.profilePage.status,
  authoriedUserId: state.auth.userId,
})
let ReadyComponent = compose(
  withRouter,
  withAuthRedirectComponent
)(ProfileContainer)

export default connect(mapStateToProps, {
  getUserProfile,
  getStatus,
  updateStatus,
})(ReadyComponent)
