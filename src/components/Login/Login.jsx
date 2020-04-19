import React from 'react'
import style from './Login.module.css'
import { reduxForm, Field } from 'redux-form'
import { Input } from '../common/FormsControls/FormsControl'
import { requiredField } from '../../utils/validators/validators'
import { connect } from 'react-redux'
import { login, logout } from '../../Redux/authReducer'
import { Redirect } from 'react-router-dom'
const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.Email, formData.password, formData.rememberMe)
    console.log(formData)
  }
  if (props.isAuth) {
    return <Redirect to={'/profile'} />
  } else
    return (
      <div className={style.loginForm}>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit} />
      </div>
    )
}
const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          validate={[requiredField]}
          type="text"
          placeholder={'Email'}
          name={'Email'}
          component={Input}
        />
      </div>
      <div>
        <Field
          validate={[requiredField]}
          type="text"
          placeholder={'Password'}
          type={'password'}
          name={'password'}
          component={Input}
        />
      </div>
      <div className={style.remember}>
        <Field type={'checkbox'} name={'rememberMe'} component={Input} />
        <span>remember me</span>
      </div>
      {props.error && <div className={style.error}>{props.error}</div>}
      <div>
        <button>Log in</button>
      </div>
    </form>
  )
}
const LoginReduxForm = reduxForm({
  form: 'login',
})(LoginForm)
const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
})
export default connect(mapStateToProps, { login, logout })(Login)
