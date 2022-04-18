import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useTheme } from '../../context/ThemeContext';
import { MdOutlineEmail, MdPhone, MdFacebook } from 'react-icons/md';
import './footer.css';

const iconSize = '2em';

function Footer() {
  const { dictionary } = useLanguage();
  const { theme } = useTheme();
  return (
    <footer
      style={{
        backgroundColor: theme.colors.footerBackground,
        color: theme.colors.footerFontColor,
      }}
    >
      <h2>{dictionary.navbar.contact}</h2>
      <div className="iconContactAll">
        <div className="iconContact">
          <MdOutlineEmail size={iconSize} />
          <a href="mailto:jech.dalibor@gmail.com">jech.dalibor@gmail.com</a>
        </div>
        <div className="iconContact">
          <MdPhone size={iconSize} />
          <a href="tel:420-602-414-895">+420 602 414 895</a>
        </div>
        <div className="iconContact">
          <a href="https://www.facebook.com/">
            <MdFacebook size={iconSize} />
          </a>
        </div>
      </div>
      <div className="footerBottom">
        <div>
          <h4>{dictionary.contact.wheretofind}</h4>
          <p>{dictionary.contact.address}</p>
          <p>{dictionary.contact.gps}</p>
          <p>{dictionary.contact.info1}</p>
          <p>{dictionary.contact.info2}</p>
        </div>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2542.630149958814!2d12.980171316393783!3d50.41072997946997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe4466c9b05ffcb45!2zNTDCsDI0JzM4LjYiTiAxMsKwNTgnNTYuNSJF!5e0!3m2!1sen!2scz!4v1650209963028!5m2!1sen!2scz"
            width="300"
            height="250"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
