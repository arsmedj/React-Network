import React from 'react'
import { Route, withRouter } from 'react-router-dom'
import './App.css'
import DialogsContainer from './components/Dialogs/DialogsContainer'
import UsersContainer from './components/Users/UsersContainer'
import ProfileContainer from './components/Profile/ProfileContainer'
import HeaderContainer from './components/Header/HeaderContainer'
import Login from './components/Login/Login'
import NavbarContainer from './components/Navbar/NavbarContainer'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { initializeApp } from './Redux/appReducer'
import Preloader from './components/common/preloader/preloader'
class App extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.initializeApp()
  }

  render() {
    // debugger
    if (this.props.initialized == false) {
      return <Preloader />
    }
    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <div className="app-wrapper-content">
          <Route path="/dialogs" render={() => <DialogsContainer />}></Route>
          <Route
            path="/profile/:userId?"
            render={() => <ProfileContainer />}
          ></Route>
          <Route path="/login" render={() => <Login />}></Route>
        </div>
        <NavbarContainer></NavbarContainer>
        <UsersContainer></UsersContainer>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
})
export default compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App)
