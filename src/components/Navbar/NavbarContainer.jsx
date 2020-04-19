import { connect } from 'react-redux'
import Navbar from './Navbar'

const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
    // isAuth: state.auth.isAuth,
  }
}

const NavbarContainer = connect(mapStateToProps, {})(Navbar)

export default NavbarContainer
