import React from 'react';
import Feature from './Feature';
import { useLanguage } from '../../context/LanguageContext';
import { IoMdResize } from 'react-icons/io';
import { FaWifi, FaCouch, FaBed, FaShower, FaCarAlt } from 'react-icons/fa';
import { GiCookingPot } from 'react-icons/gi';
import { BiCloset } from 'react-icons/bi';
import { MdChildCare, MdLandscape, MdBalcony } from 'react-icons/md';

const iconSize = '2em';

const icons = {
  size: <IoMdResize size={iconSize} />,
  internet: <FaWifi size={iconSize} />,
  room: <FaCouch size={iconSize} />,
  bedroom: <FaBed size={iconSize} />,
  kitchen: <GiCookingPot size={iconSize} />,
  bathroom: <FaShower size={iconSize} />,
  closet: <BiCloset size={iconSize} />,
  children: <MdChildCare size={iconSize} />,
  garage: <FaCarAlt size={iconSize} />,
  balcony: <MdLandscape size={iconSize} />,
  terrace: <MdBalcony size={iconSize} />,
};

function MainFeatures() {
  const { dictionary } = useLanguage();
  return (
    <div className="allFeatures">
      <Feature featureImg={icons.size} featureDesc={dictionary.about.size} />
      <Feature
        featureImg={icons.internet}
        featureDesc={dictionary.about.internet}
      />
      <Feature featureImg={icons.room} featureDesc={dictionary.about.room} />
      <Feature
        featureImg={icons.bedroom}
        featureDesc={dictionary.about.bedroom}
      />
      <Feature
        featureImg={icons.kitchen}
        featureDesc={dictionary.about.kitchen}
      />
      <Feature
        featureImg={icons.bathroom}
        featureDesc={dictionary.about.bathroom}
      />
      <Feature
        featureImg={icons.closet}
        featureDesc={dictionary.about.closet}
      />
      <Feature
        featureImg={icons.children}
        featureDesc={dictionary.about.children}
      />
      <Feature
        featureImg={icons.garage}
        featureDesc={dictionary.about.garage}
      />
      <Feature
        featureImg={icons.balcony}
        featureDesc={dictionary.about.balcony}
      />
      <Feature
        featureImg={icons.terrace}
        featureDesc={dictionary.about.terrace}
      />
    </div>
  );
}

export default MainFeatures;
