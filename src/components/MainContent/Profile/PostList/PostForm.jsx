import React, { memo } from 'react'
import { Field, reduxForm } from 'redux-form'
import { InputFormField } from '../../../UI/FormFields/FormFields'
import { maxLength, required } from '../../../../util/formValidations'
import { POST_FORM } from '../../../../util/formConstants'

const maxLength20 = maxLength(20)

let PostForm = memo(({handleSubmit, pristine, invalid}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field validate={[required, maxLength20]} type="text" name="post" component={InputFormField} />
      </div>
      <div>
        <button disabled={pristine || invalid}>Add Post</button>
      </div>
    </form>
  )
})

PostForm = reduxForm({
  form: POST_FORM,
})(PostForm)

export default PostForm;