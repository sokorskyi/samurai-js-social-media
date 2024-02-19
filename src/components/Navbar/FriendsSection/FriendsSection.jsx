import React from 'react'
import cl from './Friends.module.css'

const FriendsItem = ({friendName}) => {
  return (
    <div className={cl.friendsItem}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGtMYZWJnXOIBpTozatv_mpsCoHs9CqVRORQ&usqp=CAU"/>
      <div>{friendName}</div>
    </div>
  )
}

const FriendsSection = ({friends}) => {
  return (
    <div className={cl.friendsSection}>
        <h3>Friends</h3>
        <div className={cl.friendItemsContainer}>
          {
            friends.map(({friendName, id}) => <FriendsItem key={id} friendName={friendName} />)
          }
        </div>
      </div>
  )
}

export default FriendsSection