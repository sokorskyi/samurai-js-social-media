import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { getComponentDisplayName } from '../util/helpers'
import { selectAuthorizedUserId } from '../redux/reducers/authReducer'

const mapStateToProps = (state) => ({
  authorizedUserId: selectAuthorizedUserId(state),
})

const withRedirectToProfile = (WrappedComponent) => {

  let withRedirectToProfileWrapper = (props) => {
    if(props.authorizedUserId) {
      return <Redirect to="/profile" />
    }

    return <WrappedComponent {...props} />
  }

  withRedirectToProfileWrapper.displayName = `withRedirectToProfileWrapper(${getComponentDisplayName(WrappedComponent)})`;

  withRedirectToProfileWrapper = connect(mapStateToProps)(withRedirectToProfileWrapper)

  return withRedirectToProfileWrapper
}

export default withRedirectToProfile