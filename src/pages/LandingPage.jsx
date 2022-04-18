import React from 'react';
import Header from '../components/Header/Header';
import AboutSection from '../components/About/AboutSection';
import Reservations from '../components/Reservations/Reservations';
import Information from '../components/Information/Information';
import Footer from '../components/Footer/Footer';

function LandingPage() {
  return (
    <main>
      <Header />
      <AboutSection />
      <Reservations />
      <Information />
      <Footer />
    </main>
  );
}

export default LandingPage;
