import React from 'react'
import defaultAvatarPng from '../../../assets/user.png'
import cl from './Users.module.css'
import { NavLink } from 'react-router-dom';

const UserItem = ({user, authorizedUserId, followingInProgressIds, togglefollowUser}) => {
  const followActionName = user.followed ? 'Unfollow' : 'Follow';
  
  return (
    (<div>
      <span>
          <div>
              <NavLink to={`/profile/${user.id}`}>
                <img src={user.photos?.small || defaultAvatarPng} alt="" className={cl.userPhoto}/>
              </NavLink>
          </div>
          <div>
          {!!authorizedUserId && <button disabled={followingInProgressIds.includes(user.id)} onClick={() => {
                    const follow = {
                      ['Unfollow']: false,
                      ['Follow']: true,
                    }[followActionName];
                    togglefollowUser(user.id, follow)
                  }}>{followActionName}</button>}
          </div>
      </span>
      <span>
          <span>
              <div>{user.name}</div>
              <div>{user.status}</div>
              <div>{user.id}</div>
          </span>
          <span>
              {/* <div>{user.location.country}</div>
              <div>{user.location.city}</div> */}
          </span>
      </span>
  </div>)
  )
}

export default UserItem