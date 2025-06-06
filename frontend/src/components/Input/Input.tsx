import { forwardRef, useState, ChangeEvent } from "react";
import styles from './Input.module.css'
import { FormControlLabel, FormGroup, Switch } from "@mui/material";
import CustomSwitch from "../CustomSwitch/CustomSwitch";
import ShortenedUrl from "../shortenedUrl/ShortenedUrl";

interface inputProps {
  label: string;
  customSlug: boolean;
}

const Input = forwardRef( ( { label, customSlug }: inputProps  , ref) => {

  const [customSlugSwitch,setCustomSlugSwitch] = useState(false)
  const [slug, setSlug] = useState('')
  const [url, setUrl] = useState('')

  const handleSwitchToggle = () => {
    setCustomSlugSwitch(!customSlugSwitch)
  }

  const handleUrlChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUrl(event.target.value);
  }

  const handleSlugChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSlug(event.target.value);
  } 

  const handleSubmit = (e: React.FormEvent) => { 
    e.preventDefault()
    console.log(url, slug)
  }
  
  return (
    <>
      <form onSubmit={handleSubmit} className={styles.form} action="">
        <label className={styles.label} htmlFor="url">{label}</label>
        <div className={styles.inputContainer}>
          <input
            value={url}
            onChange={handleUrlChange} 
            type="text"
            id="url"
            name="url"
            placeholder="https://example.com"
            required
          />
          {customSlug &&
          <>
            <CustomSwitch customSlugSwitch = {customSlugSwitch} handleSwitchToggle={handleSwitchToggle}></CustomSwitch>
          
            {
              customSlugSwitch &&
                <input
                  value={slug}
                  onChange={handleSlugChange}
                  type="text"
                  id="customSlug"
                  name="customSlug" 
                  placeholder="https://shrinkit.com/customSlug"
                  required
                />
            }
          </>
          }
  
          <button>Shrink It</button>
        </div>
      </form>
        
      <ShortenedUrl></ShortenedUrl>
    </>
  )
})

export default Input