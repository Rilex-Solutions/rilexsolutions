import React from 'react';
import { 
  Layout, 
  Header, 
  Hero, 
  About, 
  Services, 
  WhyChooseUs, 
  Mission, 
  Footer 
} from './components';

const RilexWebsite = () => {
  return (
    <Layout>
      <Header />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Mission />
      <Footer />
    </Layout>
  );
};

export default RilexWebsite;