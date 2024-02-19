import React from 'react'
import cl from './Messages.module.css'
import ChatMessages from './ChatMessages/ChatMessages'
import UserChatList from './UserChatList/UserChatList'
import { withAuth } from '../../../hoc/withAuth'
import { compose } from 'redux'
import withGlobalError from '../../../hoc/withGlobalError'

const Messages = ({}) => {

  return (
    <div>
      <div className={cl.messagesContainer}>
        <UserChatList />
        <ChatMessages />
      </div>
    </div>
  )
}

export default compose(
  withAuth,
  withGlobalError,
)(Messages)