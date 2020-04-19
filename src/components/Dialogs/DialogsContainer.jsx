import { sendMessageActionCreator } from '../../Redux/dialogsReducer'
import { connect } from 'react-redux'
import withAuthRedirectComponent from '../../hoc/withAuthRedirect'
import Dialogs from './Dialogs'

const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
    isAuth: state.auth.isAuth,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: (newMessageBody) => {
      dispatch(sendMessageActionCreator(newMessageBody))
    },
  }
}
let AuthRedirectComponent = withAuthRedirectComponent(Dialogs)
const DialogsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthRedirectComponent)

export default DialogsContainer
