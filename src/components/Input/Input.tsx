import { forwardRef } from "react";
import styles from './Input.module.css'
import { Switch } from "@mui/material";

interface inputProps { 
  label: string; 
  customSlug: boolean;
}

const Input = forwardRef( ( { label, customSlug }: inputProps  , ref) => {
  return (
    <form className={styles.form} action="">
      <label className={styles.label} htmlFor="url">{label}</label>
      <div className={styles.inputContainer}>
        <input type="text" id="url" name="url" placeholder="https://example.com" required/>
        {customSlug &&
        <>
          <Switch></Switch>
        </>
      
      }
        <button type="submit">Shorten</button>
      </div>
      
    </form>

  )
})

export default Input