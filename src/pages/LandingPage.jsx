import React from 'react';
import LanguageSwitch from '../utils/languages/LanguageSwitch';
import ThemeSwitch from '../utils/theme/ThemeSwitch';
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
    {/*   <LanguageSwitch />
      <ThemeSwitch /> */}
    </main>
  );
}

export default LandingPage;
