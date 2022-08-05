import type { NextPage } from 'next'
import Head from 'next/head'
import HeroSection from '../components/hero'  
import Timer from '../components/timer'
import Agenda from '../components/agenda'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>HackNU 2022 | Homepage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <HeroSection/>

      <Timer/>

      <Agenda/>

    </div>
  )
}

export default Home
