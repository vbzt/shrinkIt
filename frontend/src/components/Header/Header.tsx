import React, { useState, useRef } from 'react';
import Image from 'next/image';
import styles from './Header.module.css';
import { useRouter } from 'next/router';
import ActiveLink from './ActiveLink';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function Header() {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const menuIconRef = useRef<HTMLDivElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <header className={styles.header}>
      <Image className={styles.logo} src={'/logo.svg'} alt="ShrinkIt logo" width={130} height={50} />
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

      <div className={styles.responsiveMenu} ref={menuIconRef} onClick={handleClick}>
        <Image src={'/menu.svg'} alt="Menu icon" width={20} height={20} style={{ cursor: 'pointer' }} />
      </div>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}><ActiveLink href="/">Shortener</ActiveLink></MenuItem>
        <MenuItem onClick={handleClose}><ActiveLink href="/unshorten">Unshorten URL</ActiveLink></MenuItem>
        <MenuItem onClick={handleClose}><ActiveLink href="/clicks">Click counter</ActiveLink></MenuItem>
        <MenuItem onClick={handleClose}><ActiveLink href="/report">Report URL</ActiveLink></MenuItem>
        <MenuItem onClick={handleClose}><ActiveLink href="/qrcode">Generate QR Code</ActiveLink></MenuItem>

        <MenuItem onClick={handleClose}><ActiveLink href="/auth/register">Register</ActiveLink></MenuItem>
        <MenuItem onClick={handleClose}><ActiveLink href="/auth/login">Login</ActiveLink></MenuItem>
      </Menu>
    </header>
  );
}