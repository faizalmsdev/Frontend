import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const Layout = (props) => {
  return (
    <div className='bg-hero '>
      <div className='mx-[120px] relative h-[60px] ' >
        <Header />
      </div>
      
        {props.children}
      <Footer />
    </div>
  )
}

export default Layout