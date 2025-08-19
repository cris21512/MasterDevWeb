import React, { useEffect } from 'react'
import './Header.css'
import { useTranslation } from 'react-i18next'
import LightRays from '../../Backgrounds/Light/Light'
import MasterDev from '../../assets/images/MasterDev.webp'
import Navbar from '../Navbar/Navbar'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Header = () => {
  const [t, i18n] = useTranslation("global");

    useEffect(() => {
        AOS.init({
        duration: 1000,
        once: true,
        });
    }, []);

  return (
    <div className='Header-style'>
      <Navbar />

      <section className="Center-header">
        <div className='text-and-buttons'>
          <section className='text-header'>
            <h1 className='Header-title'>{t("Header.Title")}</h1>
            <div className='Header-subtitle'>
              
            </div>
          </section>
        </div>
        <img src={MasterDev} alt="MasterDev" className='imagen-master' />
      </section>
    </div>
  );
};

export default Header;
