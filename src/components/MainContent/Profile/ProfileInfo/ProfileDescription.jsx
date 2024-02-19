import React from 'react'
import cl from './ProfileInfo.module.css'
import { capitalizeFirstLetter } from '../../../../util/helpers'

const ContactItemInfo = ({contactField, contactValue} = {}) => {
  return (
    contactValue && <div className={cl.contactItem}>
      <b>{capitalizeFirstLetter(contactField)}: </b>
      {contactValue}
    </div>
  )
}

const ProfileDescription = ({profileInfo, isMyOwnProfile, onEnableEdittingMode}) => {
  const { fullName, lookingForAJob, lookingForAJobDescription, contacts, aboutMe } = profileInfo

  return (
    <div>
      {fullName && (<div>
        <b>Full name: </b>
        {fullName}
      </div>)}
      {aboutMe && (<div>
        <b>About me: </b>
        {aboutMe}
      </div>)}
      <div>
        <b>Looking for a job: </b>
        {lookingForAJob ? 'yes' : 'no'}
      </div>
      {lookingForAJobDescription && (<div>
          <b>My professional skills: </b>
          {lookingForAJobDescription}
        </div>)}
      {
        Object.keys(contacts).some(contactKey => contacts[contactKey]) && <div>
          <b>Contacts: </b>
          {Object.keys(contacts).map((contactKey) => <ContactItemInfo key={contactKey} contactField={contactKey} contactValue={contacts[contactKey]} />)}
        </div>
      }
     {isMyOwnProfile && <div>
        <button onClick={onEnableEdittingMode} >Edit Profile</button>
      </div>}
    </div>
  )
}

export default ProfileDescription