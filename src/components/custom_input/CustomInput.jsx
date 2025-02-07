import React from "react";
import { useField } from "formik";

export function ResourceText({ label, currentTab, ...props }) {
  const [field, meta] = useField(props);
  return (
    <div className={`input-wrapper ${props.className} ${currentTab}`}>
      <label htmlFor={props.id || props.name} className="block">
        {label}
      </label>
      <input {...field} {...props} />
      {meta.error && <p className="error">{meta.error}</p>}
    </div>
  );
}

export function ResourceTextArea({ label, currentTab, ...props }) {
  const [field, meta] = useField(props);
  return (
    <div className={`input-wrapper ${currentTab}`}>
      <label htmlFor={props.id || props.name} className="block">
        {label}
      </label>

      <textarea {...field} {...props}></textarea>
      {meta.error && <p className="error">{meta.error}</p>}
    </div>
  );
}
