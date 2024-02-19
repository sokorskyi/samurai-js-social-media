import React from 'react'
import cl from './ChatMessages.module.css'
import { Field, reduxForm } from 'redux-form'
import { TextAreaFormField } from '../../../UI/FormFields/FormFields'
import { maxLength, required } from '../../../../util/formValidations'
import { CHAT_MESSAGES_FORM } from '../../../../util/formConstants'

const maxLength30 = maxLength(30)

let ChatMessageForm = ({handleSubmit, pristine, invalid}) => {
  return (
    <form onSubmit={handleSubmit} className={cl.chatMessagesForm}>
      <div>
        <Field name="message" type="text" validate={[required, maxLength30]}  component={TextAreaFormField} />
      </div>
      <div>
        <button disabled={pristine || invalid}>Add Message</button>
      </div>
    </form>
  )
}

ChatMessageForm = reduxForm({
  form: CHAT_MESSAGES_FORM,
})(ChatMessageForm)

export default ChatMessageForm;
