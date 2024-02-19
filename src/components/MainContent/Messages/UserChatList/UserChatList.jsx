import React, {memo} from 'react'
import cl from './UserChatList.module.css'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { selectChat } from '../../../../redux/reducers/chatReducer'

const UserChatItem = ({text, id}) => {
  const link = `/chats/${id}`

  return (
    <div className={cl.chatItem}>
      <NavLink to={link} activeClassName={cl.active}>{text}</NavLink>
    </div>
  )
}

const UserChatList = memo(({chats}) => {

  return (
    <div className={cl.userChatList}>
      {chats.map(({text, id}) => <UserChatItem id={id} text={text} key={id} />)}
    </div>
  )
})

const mapStateToProps = (state) => ({
  chats: selectChat(state).chats
});

export default connect(mapStateToProps)(UserChatList)