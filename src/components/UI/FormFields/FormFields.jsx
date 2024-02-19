import withFormField from "../../../hoc/withFormField/withFormField";
import React from "react";

export const InputFormField = withFormField((props) => <input {...props} />)
export const TextAreaFormField = withFormField((props) => <textarea {...props} />)