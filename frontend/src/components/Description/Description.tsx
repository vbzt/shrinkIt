import styles from './Description.module.css'

export default function Description() {
  return (
    <p className={styles.description}><span className="colored">ShrinkIt</span> is a simple and efficient URL shortener powered by a custom NestJS API. Create short links with optional custom slugs and instant QR code generation. Both the backend and frontend are open source, built from scratch by <a className="colored" href="https://github.com/vbzt" target='_blank'>me</a> — <a className="colored" href="https://github.com/vbzt/shrinkIt" target='_blank'>Check it out on github😉</a></p>
  )
}
