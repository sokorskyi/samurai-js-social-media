import React from 'react'
import cl from './withFormField.module.css'
import { getComponentDisplayName } from '../../util/helpers'


const withFormField = (WrappedComponent) => {
  const WithFormFieldWrapper = ({
    input,
    meta: { touched, error },
    ...props
  }) => {
    let fieldClass = cl.field
    if(touched && error) {
      fieldClass += ` ${cl.error}`
    }

    return (
      <div>
        <WrappedComponent className={fieldClass} {...input} {...props} />
        {
          touched && error && 
            (<div className={cl.errorMsg}>
              {error}
            </div>)
        }
      </div>
    )
  }
  WithFormFieldWrapper.displayName = `WithFormFieldWrapper(${getComponentDisplayName(WrappedComponent)})`;
  
  return WithFormFieldWrapper;
}

export default withFormField