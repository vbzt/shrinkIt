import Header from '@/components/Header/Header'
import Head from 'next/head'
import React from 'react'

export default function Home() {
  return (
    <main>
    <Head>
      <title>ShrinkIt</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/icon.svg" />
    </Head>
      
      <Header></Header>
      
    </main>
  )
}
