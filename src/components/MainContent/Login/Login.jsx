import React, { memo } from 'react'
import cl from './Login.module.css'
import { Field, reduxForm } from 'redux-form'
import { InputFormField } from '../../UI/FormFields/FormFields'
import { email, maxLength, minLength, required, requiredCheckbox } from '../../../util/formValidations'
import { connect } from 'react-redux'
import { login, selectAuth } from '../../../redux/reducers/authReducer'
import { Redirect } from 'react-router-dom'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom'
import withRedirectToProfile from '../../../hoc/withRedirectToProfile'
import Preloader from '../../UI/Preloader/Preloader'
import { LOGIN_FORM } from '../../../util/formConstants'
import withGlobalError from '../../../hoc/withGlobalError'

const maxLength12 = maxLength(12);
const minLength3 = minLength(3);

let LoginForm = memo(({handleSubmit, pristine, invalid, error, isLogging, captchaUrl, isFetchingCaptchaUrl, ...props}) => {
  let captcha = null;
  if(captchaUrl) {
    captcha = isFetchingCaptchaUrl ? <Preloader /> : (<div>
      <div>
        <img key={captchaUrl} src={captchaUrl} alt="captcha" />
      </div>
      <Field name="captcha" validate={[required]} component={InputFormField} />
    </div>)
  }
  
  return isLogging 
    ? <Preloader /> 
    : (
    <form onSubmit={handleSubmit}>
      <div>
        <Field name="email" validate={[required, email]} type="email" component={InputFormField} placeholder='Enter email...' />
      </div>
      <div>
        <Field name="password" validate={[required, minLength3, maxLength12]} type="password" component={InputFormField} placeholder='Enter password...' />
      </div>
      <div>
        <label htmlFor='rememberMe'>
          Remember me
        </label>
        <Field name="rememberMe" type="checkbox" component={InputFormField} />
      </div>
      {captcha}
      <button disabled={pristine || invalid}>Login</button>
      {error && <div className='form-error'>
        {error}
      </div>}
    </form>
  )
})

LoginForm = reduxForm({
  form: LOGIN_FORM,
})(LoginForm)

let Login = ({login, isLogging, captchaUrl, isFetchingCaptchaUrl, ...props}) => {
  const onSubmit = (formData) => {
    login(formData)
  }

  return (
    <div>
      <h1>Login</h1>
      <LoginForm isFetchingCaptchaUrl={isFetchingCaptchaUrl} isLogging={isLogging} captchaUrl={captchaUrl} onSubmit={onSubmit} />
    </div>
  )
}

const mapStateToProps = (state) => ({
  isLogging: selectAuth(state).isLogging,
  captchaUrl: selectAuth(state).captchaUrl,
  isFetchingCaptchaUrl: selectAuth(state).isFetchingCaptchaUrl,
})

const mapDispatchToProps = {
  login
}

Login = compose(
  withRouter,
  withRedirectToProfile,
  withGlobalError,
  connect(mapStateToProps, mapDispatchToProps)
  )(Login)

export default Login