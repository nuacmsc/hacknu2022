import type { NextPage } from 'next'
import Head from 'next/head'
import HeroSection from '../components/hero'  
import Timer from '../components/timer'
import Agenda from '../components/agenda'
import Footer from '../components/footer'
import InfoSection from '../components/info'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>HackNU 2022 | Homepage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <HeroSection/>

      <Timer/>

      <InfoSection/>

      <Agenda/>

      <Footer/>

    </div>
  )
}

export default Home
