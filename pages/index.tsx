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
        {/* <!-- Primary Meta Tags --> */}
        <meta key="title" name="title" content="HackNU "/>
        <meta key="description" name="description" content="By participating in HackNU, you will get a chance to gain invaluable experience and find like-minded people, while testing your programming knowledge."/>

        {/* <!-- Open Graph / Facebook --> */}
        <meta key="og-type" property="og:type" content="website"/>
        <meta key="og-url" property="og:url" content="https://hacknu.kz/"/>
        <meta key="og-title" property="og:title" content="HackNU"/>
        <meta key="og-description" property="og:description" content="By participating in HackNU, you will get a chance to gain invaluable experience and find like-minded people, while testing your programming knowledge."/>
        <meta key="og-image" property="og:image" content="meta.jpg"/>

        {/* <!-- Twitter --> */}
        <meta key="tw-card" property="twitter:card" content="summary_large_image"/>
        <meta key="tw-url" property="twitter:url" content="https://hacknu.kz/"/>
        <meta key="tw-title" property="twitter:title" content="HackNU"/>
        <meta key="tw-desc" property="twitter:description" content="By participating in HackNU, you will get a chance to gain invaluable experience and find like-minded people, while testing your programming knowledge."/>
        <meta key="tw-img" property="twitter:image" content="meta.jpg"/>

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
