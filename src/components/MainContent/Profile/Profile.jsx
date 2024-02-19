import React from 'react'
import cl from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import PostLists from './PostList/PostList'
import { Redirect } from 'react-router-dom'
import Preloader from '../../UI/Preloader/Preloader'

const Profile = ({isFetchingProfile, profileInfo}) => {

  return (
    isFetchingProfile || !profileInfo ? <Preloader /> :
      <div>
        <ProfileInfo />
        <PostLists />
      </div>
  )
}

export default Profile
