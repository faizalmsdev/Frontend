import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const Layout = (props) => {
  return (
    <div className='lg:mx-[70px] lg:my-[20px]'>
      <Header />
        {props.children}
      <Footer />
    </div>
  )
}

export default Layout