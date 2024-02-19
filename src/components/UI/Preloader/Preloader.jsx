import React from "react";
import cl from './Preloader.module.css'
import loadingGiff from '../../../assets/giphy.gif'

const Preloader = ({width = '80px'}) => {
  return (
    <div className={cl.preloader} style={{width}}>
      <img src={loadingGiff} alt="loading" />
    </div>
  )
}

export default Preloader