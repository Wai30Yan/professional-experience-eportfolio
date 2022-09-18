import Head from 'next/head'
import React from 'react'
import Contain from './Contain'
import Footer from './Footer'
import Navbar from './Navbar'

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Wai Yan's ePortfolio</title>
      </Head>
      <Navbar />
        {children}
      <Footer />
    </>
  )
}

export default Layout