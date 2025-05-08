import styles from './Login.module.css'
import formStyles from '../../../styles/Form.module.css'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'

const Login = () => {
  return (
    <main className={styles.container}>  
      <Header></Header>
      <div className={formStyles.formContainer}>
        <form className={formStyles.form}>

          
        </form>

      </div>
      <Footer></Footer>
    </main>
  )
}

export default Login