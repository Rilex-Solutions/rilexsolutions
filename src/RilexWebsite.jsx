import React from 'react';
import { 
  Layout, 
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