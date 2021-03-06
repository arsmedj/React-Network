import React from 'react'
import style from './FormControls.module.css'
export const Textarea = ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error
  return (
    <div className={style.formControl + ' ' + (hasError ? style.error : '')}>
      <div>
        <textarea className={style.error} {...input} {...props} />
      </div>
      {hasError && <span>{meta.error}</span>}
    </div>
  )
}

export const Input = ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error
  return (
    <div className={style.formControl + ' ' + (hasError ? style.error : '')}>
      <div>
        <input className={style.error} {...input} {...props} />
      </div>
      {hasError && <span>{meta.error}</span>}
    </div>
  )
}
