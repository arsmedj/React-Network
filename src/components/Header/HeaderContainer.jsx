import React, { Component } from 'react'
import Header from './Header'
import { connect } from 'react-redux'
import { getAuthUserData, logout } from '../../Redux/authReducer'
class HeaderContainer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <Header {...this.props} />
  }
}
const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
})
export default connect(mapStateToProps, { logout })(HeaderContainer)
