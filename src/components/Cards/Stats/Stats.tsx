import { Card } from '@mui/material'
import React from 'react'
import OutlinedCard from '../Card/Card'
import styles from './Stats.module.css'

export default function Stats() {
  return (
    <div className={styles.stats}>
      <OutlinedCard title="Shortened URLs" stats="999" description="Total quantity of shortened urls"/>
      <OutlinedCard title="Total clicks" stats="9999" description="Total quantity of registered clicks"/>
      <OutlinedCard title="Monthly Stats" stats="182" description="Shortened urls this month"/>
    </div>
  )
}
