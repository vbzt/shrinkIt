import Header from '@/components/Header/Header'
import Head from 'next/head'
import React from 'react'
import styles from '../styles/Home.module.css'
import Input from '@/components/Input/Input'

export default function Home() {
  return (
    <main className={styles.main}>
    <Head>
      <title>ShrinkIt</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/icon.svg" />
    </Head>
      
      <Header></Header>
      <section className={styles.hero}>
        <div className={styles.introduction}>
          <h1>Shorten your links and track their performance with <span className="colored">ShrinkIt</span>.</h1>
          <Input label = 'Insert the url to shorten' customSlug = {true}></Input>
        </div>
      </section>
      
    </main>
  )
}
