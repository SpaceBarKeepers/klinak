import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useTheme } from '../../context/ThemeContext';
import './reservations.css';

function Reservations() {
  const { dictionary } = useLanguage();
  const { theme } = useTheme();
  return (
    <section
      style={{
        backgroundColor: theme.colors.reservationBackground,
      }}
      className="reservationSection"
    >
      <h2>{dictionary.navbar.reservation}</h2>
    </section>
  );
}

export default Reservations;
