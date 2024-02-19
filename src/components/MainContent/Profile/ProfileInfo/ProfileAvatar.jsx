import React from 'react'
import cl from './ProfileInfo.module.css'
import avatar from '../../../../assets/user.png'
import { connect } from 'react-redux'
import { selectProfile } from '../../../../redux/reducers/profileReducer'
import Preloader from '../../../UI/Preloader/Preloader'
import { updateProfileAvatar } from '../../../../redux/reducers/profileReducer'

const ProfileAvatar = ({profileAvatar, isUpdatingAvatar, updateProfileAvatar, isMyOwnProfile}) => {
  if(isUpdatingAvatar) return <Preloader />

  return (
    <div className={cl.avatar}>
    <img src={profileAvatar || avatar} />
    {
      isMyOwnProfile && <div>
        <input type='file' onChange={(e) => {
          if(e.target.files[0]) {
            updateProfileAvatar(e.target.files[0])
          }
        }} />
      </div> 
    }
  </div>
  )
}

const mapStateToProps = (state) => ({
  profileAvatar: selectProfile(state).profileAvatar,
  isUpdatingAvatar: selectProfile(state).isUpdatingAvatar,
})

export default connect(mapStateToProps, {updateProfileAvatar})(ProfileAvatar)