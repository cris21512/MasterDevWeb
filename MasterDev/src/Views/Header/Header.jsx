import React from 'react'
import './Header.css'
import { useTranslation } from 'react-i18next'
import GradientText from '../../TextAnimations/GradientText/GradientText'
import Particles from '../../Backgrounds/Particles/Particles'
import MasterDev from '../../assets/images/MasterDev.png'
import CVButton from '../../Components/Buttons/CVButton'
import ButtonsMedia from '../../Components/Buttons/ButtonsMedia'
import Navbar from '../Navbar/Navbar'

const Header = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <div className='Header-style'>
      <Navbar />
      <div
        style={{
          width: '100%',
          height: '100vh',
          position: 'absolute',
          overflow: 'hidden',
        }}
      >
        <Particles
          particleColors={['#00eaff', '#00eaff']}
          particleCount={250}
          particleSpread={10}
          speed={0.6}
          particleBaseSize={100}
          moveParticlesOnHover={false}
          alphaParticles={true}
          disableRotation={true}
        />
      </div>
      <section className="Center-header">
        <div className='text-and-buttons'>
          <section className='text-header'>
            <h1 className='Header-title'>{t("Header.Title")}</h1>
            <div className='Header-subtitle'>
              <GradientText
                colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                animationSpeed={3}
                showBorder={false}
                className="custom-class"
              >
                {t("Header.Subtitle")}
              </GradientText>
            </div>
          </section>
          <div className='Buttons-header'>
            <CVButton/>
            <ButtonsMedia />
          </div>
        </div>
        <img src={MasterDev} alt="MasterDev" className='imagen-master' />
      </section>
    </div>
  );
};

export default Header;
