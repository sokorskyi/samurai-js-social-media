import React from "react";
import cl from './Users.module.css'
import Preloader from "../../UI/Preloader/Preloader";
import UserItem from "./UserItem";


const Users = ({userList, authorizedUserId, togglefollowUser, isFetching, followingInProgressIds}) => {
    return (
      <div>
        
        {
        isFetching 
          ? <Preloader /> 
          : 
          <>
            {
            userList.map(u => <UserItem 
              key={u.id} 
              authorizedUserId={authorizedUserId}
              user={u} 
              followingInProgressIds={followingInProgressIds} 
              togglefollowUser={togglefollowUser} 
            />)
            }
          </>
          
        }
          
      </div>
    )
}

export default Users;
