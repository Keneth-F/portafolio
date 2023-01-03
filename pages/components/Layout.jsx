import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

function Layout({ children }) {
  return (
    <>
      <Sidebar />
      <div className='main-content'>
        <Navbar />
        {children}
        <Footer />
      </div>
    </>
  )
}

export default Layout