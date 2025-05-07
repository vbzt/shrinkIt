import React from 'react'
import  Image  from 'next/image'
import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <Image src={'/logo.svg'} alt='ShrinkIt logo' width={130} height={50}></Image>
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
          <li>
            <a href="/qrcode">Generate QR Code</a>
          </li>
        </ul>
      </nav>
      <div className={styles.buttons}>
        <a href="/login">Login</a>
        <a href="/register"><button>Create account</button></a>
      </div>

    </header>
  )
}
