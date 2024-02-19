import React from 'react'
import cl from "./Header.module.css"
import { NavLink } from 'react-router-dom'
import Preloader from '../UI/Preloader/Preloader'
import userAvatar from '../../assets/user.png'
import { connect } from 'react-redux'
import { logout, selectAuth, selectAuthorizedUserId } from '../../redux/reducers/authReducer'
import { selectProfile } from '../../redux/reducers/profileReducer'

const Header = ({authorizedUserId, isFetchingLogout, isFetchingUserInfo, isUpdatingAvatar, profileAvatar, userInfo, logout, ...props}) => {

  const userInfoJsx = (isFetchingUserInfo || isFetchingLogout)
    ? <Preloader width='40px' /> 
    : <div className='userInfo'>
      <div>
      {isUpdatingAvatar 
        ? <Preloader /> 
        : <img src={profileAvatar || userAvatar} alt="avatar"/> }
      </div>
      <div>
        <div>{userInfo?.fullName}</div>
        <button onClick={logout}>Log out</button>
      </div>

    </div> 

  return (
    <header>
        <div className='rightBlock'>
          {
            authorizedUserId 
            ? userInfoJsx
            : <div className='links'>
              <NavLink to={'/login'}>Login</NavLink>
            </div>
          }
        </div>
        
    </header>
  )
}

const mapStateToProps = (state) => ({
  authorizedUserId: selectAuthorizedUserId(state),
  userInfo: selectAuth(state).userInfo,
  profileAvatar: selectProfile(state).profileAvatar,
  isUpdatingAvatar: selectProfile(state).isUpdatingAvatar,
  isFetchingUserInfo: selectAuth(state).isFetchingUserInfo,
  isFetchingLogout: selectAuth(state).isFetchingLogout,
});

const mapDispatchToProps = {
  logout,
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)