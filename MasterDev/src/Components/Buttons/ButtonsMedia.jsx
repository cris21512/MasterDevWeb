import React from 'react'
import './ButtonsMedia.css'
import github from '../../assets/icons/github.svg'
import linkedin from '../../assets/icons/linkedin.svg'
import gmail from '../../assets/icons/gmail.svg'

function ButtonsMedia() {
    return (
        <div className='div-section'>
            <a href="https://github.com/cris21512" target="_blank" rel="noopener noreferrer">
            <button className='Btn'>
                <span className='svgContainer'>
                    <img src={github} alt="github" height={25} width={25} />
                </span>
                <span className='BG'></span>
            </button>
            </a>
            <a href="https://www.linkedin.com/in/cristopherfuentes/" target="_blank" rel="noopener noreferrer">
            <button className='Btn'>
                <span className='svgContainer'>
                    <img src={linkedin} alt="linkedin" height={25} width={25} />
                </span>
                <span className='BG'></span>
            </button>
            </a>
            <a href="mailto:cristopherfm21.5@gmail.com">
            <button className='Btn'>
                <span className='svgContainer'>
                    <img src={gmail} alt="gmail" height={25} width={25} />
                </span>
                <span className='BG'></span>
            </button>
            </a>
        </div>
    );
}

export default ButtonsMedia;
