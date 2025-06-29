import React, { useEffect } from 'react'
import './Preloader.css'
import preLoaderAnim from './animation'
import logo from '../../assets/images/logo.webp'
import AOS from 'aos'
import 'aos/dist/aos.css'

function LogoPreLoader() {
AOS.init({
    duration: 1000,
    once: true,
    disable: 'mobile',
    delay: 500,
})

    return(
        <img src={logo} alt="logo" className='imagen-preloader' data-aos="fade-up" />
    )
}

function Preloader() {

AOS.init({
    duration: 1000,
    once: true,
    disable: 'mobile',
    delay: 800,
})


  useEffect(() => {
    preLoaderAnim()
  }, )

    return(
        <div className='preloader'>
            <section className='text-container'>
                <span data-aos="fade-up">¡Hey!</span>
                <span data-aos="fade-up">Welcome</span>
                <span data-aos="fade-up">To</span>  
                <span data-aos="fade-up">My</span>  
                <span data-aos="fade-up">Portfolio 😎</span>
            </section>
            <LogoPreLoader />
        </div>
    )
}

export default Preloader