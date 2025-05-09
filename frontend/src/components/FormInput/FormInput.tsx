import React, { forwardRef } from 'react'
import styles from './FormInput.module.css'

interface FormInputProps {
  type: string;
  label: string;
  name: string;
  placeholder: string;
  handleOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string | number;
  required?: boolean;
}

const FormInput = forwardRef<HTMLInputElement, FormInputProps>(({ type, label, name, placeholder, handleOnChange, value, required }: FormInputProps, ref) => {
  return (
    <div className={`${styles.formGroup}`}>
      <label htmlFor={name} className={styles.inputLabel}>{label}:</label>
      <input 
        type={type} 
        id={name} 
        name={name} 
        className={`${styles.input}`} 
        placeholder={placeholder} 
        onChange={handleOnChange} 
        value={value}
        required={required}
        ref={ref}
      />
    </div>
  )
})

export default FormInput