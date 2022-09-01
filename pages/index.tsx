import type { NextPage } from 'next'
import Head from 'next/head'
import HeroSection from '../components/hero'  
import Timer from '../components/timer'
import Agenda from '../components/agenda'
import Footer from '../components/footer'
import InfoSection from '../components/info'
import Registration from '../components/registration'
import Partners from '../components/partners'


const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>HackNU 2022</title>
        <link rel="icon" href="image/favicon.ico" />
        {/* <link rel="shortcut icon" href="/images/favicon.ico" /> */}
        {/* <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png"/> */}
      </Head>


      <HeroSection/>

      <Timer/>

      <InfoSection/>
      <Registration/>

      <Agenda/>

      <Partners/>

      <Footer/>

    </div>
  )
}

export default Home
