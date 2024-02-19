import React from "react"
import { connect } from "react-redux"
import { Redirect } from "react-router-dom"
import { getComponentDisplayName } from "../util/helpers"
import Preloader from "../components/UI/Preloader/Preloader"
import { selectAuth, selectAuthorizedUserId } from "../redux/reducers/authReducer"

const mapStateToProps = (state) => ({
  authorizedUserId: selectAuthorizedUserId(state),
  isFetchingLogout: selectAuth(state).isFetchingLogout
})

export const withAuth = (WrappedComponent) => {
  const WithAuthWrapper = (props) => {
    if(!props.authorizedUserId) return <Redirect to="/login" />
    
    if(props.isFetchingLogout) return <Preloader />

    return <WrappedComponent {...props} />
  }
  WithAuthWrapper.displayName = `WithAuthWrapper(${getComponentDisplayName(WrappedComponent)})`;

  return connect(mapStateToProps)(WithAuthWrapper)
}