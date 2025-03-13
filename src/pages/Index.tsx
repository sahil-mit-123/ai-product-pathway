
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Hero from '../components/home/Hero';
import DigitalLearning from '../components/home/DigitalLearning';
import BusinessLanguage from '../components/home/BusinessLanguage';
import ApplicationForm from '../components/home/ApplicationForm';
import Footer from '../components/layout/Footer';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <DigitalLearning />
        <BusinessLanguage />
        <ApplicationForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
