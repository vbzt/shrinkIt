import React from 'react'
import  Image  from 'next/image'
import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <Image src={'/logo.svg'} alt='ShrinkIt logo' width={100} height={50}></Image>
      <nav className={styles.nav}>
        <ul>
          <li>
            <a href="/">Shortener</a>
          </li>
          <li>
            <a href="/unshorten">Unshorten URL</a>
          </li>
          <li>
            <a href="/clicks">Click Counter</a>
          </li>
          <li>
            <a href="/report">Report URL</a>
          </li>
        </ul>
      </nav>
      <div className={styles.buttons}>
        <a href="/register">Create account</a>
        <a href="/login"><button>Login</button></a>
      </div>

    </header>
  )
}
