import React from 'react'
import { Field, FormSection, reduxForm } from 'redux-form'
import { InputFormField, TextAreaFormField } from '../../../UI/FormFields/FormFields'
import { required } from '../../../../util/formValidations'
import { capitalizeFirstLetter } from '../../../../util/helpers'
import { PROFILE_FORM } from '../../../../util/formConstants'
import cl from './ProfileInfo.module.css'
import Preloader from '../../../UI/Preloader/Preloader'

const ContactForm = ({contacts}) => {
  return Object.keys(contacts).map(contact => (
    <div key={contact} className={cl.contactItem}>
      <b>{capitalizeFirstLetter(contact)}</b>
      <Field name={contact} type="text" component={InputFormField} />
    </div>
  ))
}

const ProfileInfoForm = ({handleSubmit, error, contacts, isUpdatingProfile, onDisableEdittingMode, ...props}) => {
  return (
    !isUpdatingProfile ? <form onSubmit={handleSubmit}>
      <div>
        <b>
          Full name:
        </b>
        <Field name="fullName" validate={[required]} type="text" component={InputFormField} />
      </div>
      <div>
        <b>
          About me:
        </b>
        <Field name="aboutMe" validate={[required]} type="text" component={InputFormField} />
      </div>
      <div>
        <b>
          Looking for a job:
        </b>
        <Field name="lookingForAJob" type="checkbox" component={InputFormField} />
      </div>
      <div>
        <b>
          Professional skills:
        </b>
        <Field name="lookingForAJobDescription" validate={[required]} type="text" component={TextAreaFormField} />
      </div>
      <div>
        <b>
          Contacts:
        </b>
        <FormSection name='contacts'>
          <ContactForm contacts={contacts} />
        </FormSection>
      </div>
      <div>
        <button>Save Profile</button>
        <button onClick={(e) => {
          e.stopPropagation()
          onDisableEdittingMode()
        }}>Cancel</button>
      </div>
      {error && <div className='form-error'>
        {error}
      </div>}
    </form>
    : <Preloader />
  )
}

export default reduxForm({
  form: PROFILE_FORM,
})(ProfileInfoForm) 