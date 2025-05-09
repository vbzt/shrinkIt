import formStyles from '../../../styles/Form.module.css'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import FormInput from '@/components/FormInput/FormInput'
import { ChangeEvent, useState } from 'react'
import Image from 'next/image'

const Login = () => {

  const [user, setUser] = useState({})

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUser({...user, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e: React.FormEvent) => { 
    e.preventDefault()
    console.log(user)
  }

  


  return (
    <main className={formStyles.container}>  
      <Header></Header>
      <div className={formStyles.formContainer}>
        <form onSubmit={handleSubmit} className={formStyles.form}>
          <div className= {formStyles.formTitle}>
            <Image src={'/icon.svg'} alt="ShrinkIt logo" width={35} height={35} />
            <h1>Login</h1>
          </div>
          <div className={formStyles.formInputs}>
            <FormInput type = 'text' label='Email' name='email' handleOnChange={handleChange} placeholder='johndoe@email.com' required = {true}></FormInput>
            <FormInput type = 'password' label='Password' name='password' handleOnChange={handleChange} placeholder='...' required = {true}></FormInput>
          </div>
          
          <button className={formStyles.formButton} type='submit'>Login</button>
          <p className={formStyles.formText}>Don't have an account yet? <a href="/auth/register" className='colored'>Register</a></p>
        </form>

      </div>
      <Footer></Footer>
    </main>
  )
}

export default Login