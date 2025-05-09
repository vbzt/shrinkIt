import Header from '@/components/Header/Header'
import Head from 'next/head'
import React from 'react'
import styles from '../styles/Home.module.css'
import Input from '@/components/Input/Input'
import Stats from '@/components/Cards/Stats/Stats'
import Description from '@/components/Description/Description'
import Footer from '@/components/Footer/Footer'

export default function Home() {
  return (
    <main className={styles.main}>
      
      <Header></Header>
      <section className={styles.hero}>
        <div className={styles.introduction}>
          <h1>Shorten your links and track their performance with <span className="colored">ShrinkIt</span>.</h1>
          <Input label = 'Insert the url to shorten' customSlug = {true}></Input>
        </div>
        <Stats></Stats>
        <Description></Description>

        <Footer></Footer>
      </section>
      
    </main>
  )
}
