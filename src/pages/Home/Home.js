import React from 'react';
import Layout from "../../component/Layout/Layout"
import Container from '../../component/container/Container';
import Hero from '../../sections/Hero';

const Home = () => {
  return (
    <div className=''>
      <Layout>
        <div className=''>
        <Container width="92%" height="520px">
          <Hero />

        </Container>
        </div>
        
      </Layout>
    </div>
  )
}

export default Home