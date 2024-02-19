import React from 'react'
import Profile from './Profile'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { getProfile, getProfileStatus, selectProfile, setIsFetchingProfile, setProfileInfo } from '../../../redux/reducers/profileReducer';
import Preloader from '../../UI/Preloader/Preloader';
import { compose } from 'redux';
import { withAuth } from '../../../hoc/withAuth';
import { selectAuthorizedUserId, setAuthorizedUserId } from '../../../redux/reducers/authReducer';
import ProfileWithAuth from './ProfileWithAuth';
import withGlobalError from '../../../hoc/withGlobalError';

class ProfileContainer extends React.Component {

  componentDidMount() {
    this._initProfile()
  }

  componentDidUpdate(prevProps) {
    if(prevProps.match.params?.id !== this.props.match.params?.id) {
      this._initProfile()
    }
  }

  _initProfile() {
    const userId = this._getUserId()
    if(userId) {
      this.props.getProfile(userId)
      this.props.getProfileStatus(userId)
    }
  }

  _getUrlId() {
    return this.props.match.params?.id;
  }

  _getUserId() {
    let userId = this._getUrlId();
    if(!userId) {
      userId = this.props.authorizedUserId;
    }
    return userId;
  }

  render() {
    const {authorizedUserId, getProfile, getProfileStatus, ...props} = this.props
    return (
      this._getUrlId() ?
        <Profile {...props} /> :
        <ProfileWithAuth {...props} />
    ) 
  }
}

const mapStateToProps = (state) => ({
  isFetchingProfile: selectProfile(state).isFetchingProfile,
  profileInfo: selectProfile(state).profileInfo,
  authorizedUserId: selectAuthorizedUserId(state),
})

const mapDispatchToProps = {
  getProfile,
  getProfileStatus,
}

export default compose(
  withGlobalError,
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
)(ProfileContainer)