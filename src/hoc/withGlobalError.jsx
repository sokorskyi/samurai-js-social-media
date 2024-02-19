import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { selectApp, setGlobalError } from "../redux/reducers/appReducer";
import ReactModal from "react-modal";

const mapStateToProps = (state) => ({
  globalError: selectApp(state).globalError
})

const withGlobalError = (WrappedComponent) => {
  const ComponentWrapper = ({globalError, setGlobalError, ...props}) => {
    return <>
      <ReactModal
        isOpen={!!globalError}
        onRequestClose={() => setGlobalError(null)}
      >
        <h1 style={{color: 'red'}}>{globalError}</h1>
      </ReactModal>
      <WrappedComponent {...props} />
    </>
  }

  return connect(mapStateToProps, {setGlobalError})(ComponentWrapper)
}


export default withGlobalError