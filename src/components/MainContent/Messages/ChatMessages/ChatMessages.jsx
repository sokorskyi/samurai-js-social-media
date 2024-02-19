import React, { memo, useCallback } from 'react'
import cl from './ChatMessages.module.css'
import { connect } from 'react-redux'
import { addMessage, selectMyMessages, selectStrangerMessages } from '../../../../redux/reducers/chatReducer'
import ChatMessageForm from './ChatMessageForm'

const MessageItem = ({from, message}) => {
  return (
    <div className={cl.messageItem}>
      <img src="https://cdn.pixabay.com/photo/2018/03/31/06/31/dog-3277416_640.jpg" />
      {message}
      <div>
        {from}
      </div>
    </div>
  )
}

const ChatMessages = memo(({myMessages, strangerMessages, addMessage}) => {
  const onSubmit = (formData) => {
    addMessage(formData.message)
  }
  const getMessageList = useCallback((messages) => {
    return messages.map(({message, id, from}) => <MessageItem key={id} from={from} message={message} />)
  }, [])

  return (
    <div className={cl.messages}>
      <div className={cl.messageContainer}>
        <div className={cl.strangerMessages}>
          {getMessageList(strangerMessages)}
        </div>
        <div className={cl.myMessages}>
          {getMessageList(myMessages)}
        </div>
      </div>
      <ChatMessageForm onSubmit={onSubmit} />
    </div>
  )
})

const mapStateToProps = (state) => ({
  myMessages: selectMyMessages(state),
  strangerMessages: selectStrangerMessages(state),
})

const mapDispatchToProps = {
  addMessage,
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatMessages)