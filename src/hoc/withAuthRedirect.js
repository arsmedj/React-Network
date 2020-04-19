import React from 'react'
import { Redirect } from 'react-router-dom'

const withAuthRedirectComponent = (Component) => {
  class RedirectComponent extends React.Component {
    constructor(props) {
      super(props)
    }
    render() {
      if (this.props.isAuth === false) {
        return <Redirect to={'/login'}></Redirect>
      } else {
        return <Component {...this.props} />
      }
    }
  }
  return RedirectComponent
}
export default withAuthRedirectComponent
