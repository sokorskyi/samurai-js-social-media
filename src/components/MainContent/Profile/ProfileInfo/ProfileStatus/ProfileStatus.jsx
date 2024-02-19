import React, { Component, useState } from 'react'
import cl from './ProfileStatus.module.css'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { selectProfile, updateProfileStatus } from '../../../../../redux/reducers/profileReducer'
import Preloader from '../../../../UI/Preloader/Preloader'

const ProfileStatus = ({status, isFetchingStatus, isMyOwnProfile, updatingStatusError, updateProfileStatus}) => {
  const [isEdittingMode, setIsEdittingMode] = useState(false);
  const [inputStatus, setInputStatus] = useState(status);

  const onDoubleClick = () => {
    if(isMyOwnProfile) {
      setIsEdittingMode(true);
    }
  }

  const onStatusChange = (e) => {
    setInputStatus(e.target.value)
  }

  const onSaveStatus = (e) => {
    e.stopPropagation()
    if(inputStatus !== status) {
      updateProfileStatus(inputStatus)
    }
    setIsEdittingMode(false);
  }

  const onCancelStatus = (e) => {
    e.stopPropagation()
    setIsEdittingMode(false);
    setInputStatus(status)
  }

  if(isFetchingStatus) return <Preloader />

  return (
    <div onDoubleClick={onDoubleClick}>
      <b>Profile Status:</b>{' '}
      {
        isEdittingMode
          ? <>
            <input autoFocus onChange={onStatusChange} value={inputStatus} />
            <div className={cl.actionButtons}>
              <button onClick={onSaveStatus}>Save</button>
              <button onClick={onCancelStatus}>Cancel</button>
            </div>
          </> 
          : <span>
          {status || '---'}
        </span>
      }
      {!!updatingStatusError && (
        <div>
          <span style={{color: 'red'}}>{updatingStatusError}</span>
        </div>
      )}
    </div>
  )
}

const mapStateToProps = (state) => ({
  isFetchingStatus: selectProfile(state).isFetchingStatus,
});

const mapDispatchToProps = {
  updateProfileStatus,
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
)(ProfileStatus)