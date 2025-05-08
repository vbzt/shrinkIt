import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>Made with 💜 by <a className='colored' href="https://github.com/vbzt" target='_blank'>vbzt</a> &copy;</p>
    </footer>
  )
}
