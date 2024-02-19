import React, { PureComponent, memo } from 'react'
import cl from './ProfileInfo.module.css'

import ProfileStatus from './ProfileStatus/ProfileStatus'
import { connect } from 'react-redux'
import { compose } from 'redux'
import Preloader from '../../../UI/Preloader/Preloader'
import { selectAuthorizedUserId } from '../../../../redux/reducers/authReducer'
import { selectProfile, updateProfile } from '../../../../redux/reducers/profileReducer'
import ProfileInfoForm from './ProfileInfoForm'
import ProfileDescription from './ProfileDescription'
import ProfileAvatar from './ProfileAvatar'



class ProfileInfo extends PureComponent {
  state = {
    isEdittingMode: false,
  }

  onEnableEdittingMode = () => {
    this.setState({
      isEdittingMode: true
    })
  }

  onDisableEdittingMode = () => {
    this.setState({
      isEdittingMode: false
    })
  }

  onSubmit = (data) => {
    this.props.updateProfile(data).then(() => {
      this.setState({isEdittingMode: false})
    })
  }


  render() {
    const {profileInfo: {photos, ...profileInfo}, status, authorizedUserId, isUpdatingProfile, updatingStatusError} = this.props;
    const isMyOwnProfile = authorizedUserId === profileInfo.userId
    const { isEdittingMode } = this.state;
  

    return (
      <>
          <div className={cl.profileInfo}>
            <ProfileAvatar isMyOwnProfile={isMyOwnProfile} />
            <div>
              <ProfileStatus key={`${status}${updatingStatusError || ''}`} updatingStatusError={updatingStatusError} status={status} isMyOwnProfile={isMyOwnProfile} />
              <div className={cl.profileDescription}>
                {
                  isEdittingMode
                  ? <ProfileInfoForm contacts={profileInfo.contacts} onDisableEdittingMode={this.onDisableEdittingMode} isUpdatingProfile={isUpdatingProfile} onSubmit={this.onSubmit} initialValues={profileInfo} /> 
                  : <ProfileDescription isMyOwnProfile={isMyOwnProfile} onEnableEdittingMode={this.onEnableEdittingMode} profileInfo={profileInfo} />               
                }
                
              </div>
              
            </div>
        </div>
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  profileInfo: selectProfile(state).profileInfo,
  isUpdatingProfile: selectProfile(state).isUpdatingProfile,
  authorizedUserId: selectAuthorizedUserId(state),
  status: selectProfile(state).status,
  updatingStatusError: selectProfile(state).updatingStatusError,
});

export default compose(
  connect(mapStateToProps, {updateProfile})
)(ProfileInfo)