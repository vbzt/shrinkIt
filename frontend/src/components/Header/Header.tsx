import React from 'react';
import Image from 'next/image';
import styles from './Header.module.css';
import { useRouter } from 'next/router';
import ActiveLink from './ActiveLink'

export default function Header() {
  const router = useRouter();

  return (
    <header className={styles.header}>
      <Image src={'/logo.svg'} alt="ShrinkIt logo" width={130} height={50} />
      <nav className={styles.nav}>
        <ul>
          <li>
            <ActiveLink href="/">Shortener</ActiveLink>
          </li>
          <li>
            <ActiveLink href="/unshorten">Unshorten URL</ActiveLink>
          </li>
          <li>
            <ActiveLink href="/clicks">Click Counter</ActiveLink>
          </li>
          <li>
            <ActiveLink href="/report">Report URL</ActiveLink>
          </li>
          <li>
            <ActiveLink href="/qrcode">Generate QR Code</ActiveLink>
          </li>
        </ul>
      </nav>
      <div className={styles.buttons}>
        <ActiveLink href="/auth/login">Login</ActiveLink>
        <ActiveLink href="/auth/register">
          <button>Create account</button>
        </ActiveLink>
      </div>
    </header>
  );
}