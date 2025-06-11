import React from 'react';
import FrameworkCard from "./FreamworkCard";
import './FreamworkSection.css';
import react from "../../assets/icons/react.svg";
import JavaScript from '../../assets/icons/javascript.svg';
import Python from '../../assets/icons/python.svg';
import HTML from '../../assets/icons/html5.svg';
import CSS from '../../assets/icons/css.svg';
import TypeScript from '../../assets/icons/typescript.svg';
import Github from '../../assets/icons/github.svg';
import REFLEX from '../../assets/icons/reflex.svg';
import Git from '../../assets/icons/git.svg';
import Docker from '../../assets/icons/docker.svg';
import VSCode from '../../assets/icons/vscode.svg';
import Figma from '../../assets/icons/figma.svg';
import Canva from '../../assets/icons/canva.svg';
import taiwild from '../../assets/icons/tailwindcss.svg'

const frameworks = [
    {name: '', logo: '', color: 'rgba(255, 255, 255, 0.03)', url: ''},
    {name: '', logo: '', color: 'rgba(255, 255, 255, 0.03)', url: ''},
    {name: '', logo: '', color: 'rgba(255, 255, 255, 0.03)', url: ''},
    {name: '', logo: '', color: 'rgba(255, 255, 255, 0.03)', url: ''},
    {name: '', logo: '', color: 'rgba(255, 255, 255, 0.03)', url: ''},
    {name: '', logo: '', color: 'rgba(255, 255, 255, 0.03)', url: ''},
    {name: '', logo: '', color: 'rgba(255, 255, 255, 0.03)', url: ''},
    {name: '', logo: '', color: 'rgba(255, 255, 255, 0.03)', url: ''},
    {name: '', logo: '', color: 'rgba(255, 255, 255, 0.03)', url: ''},
    {name: '', logo: '', color: 'rgba(255, 255, 255, 0.03)', url: ''},
    {name: 'React', logo: react, color: 'rgba(255, 255, 255, 0.03)', url: ''},
    {name: 'JavaScript', logo: JavaScript, color: 'rgba(0, 0, 0, 0.68)', url: ''},
    {name: 'Python', logo: Python, color: 'rgba(255, 255, 255, 0.03)', url: ''},
    {name: 'HTML', logo: HTML, color: 'rgba(255, 255, 255, 0.03)', url: ''},
    {name: '', logo: '', color: 'rgba(255, 255, 255, 0.03)', url: ''},
    {name: '', logo: '', color: 'rgba(255, 255, 255, 0.03)', url: ''},
    {name: '', logo: '', color: 'rgba(255, 255, 255, 0.03)', url: ''},
    {name: 'CSS', logo: CSS, color: 'rgba(255, 255, 255, 0.03)', url: ''},
    {name: 'TypeScript', logo: TypeScript, color: 'rgba(255, 255, 255, 0.03)', url: ''},
    {name: 'Github', logo: Github, color: 'rgba(255, 255, 255, 0.03)', url: ''},
    {name: 'Git', logo: Git, color: 'rgba(255, 255, 255, 0.03)', url: ''},
    {name: 'REFLEX', logo: REFLEX, color: 'rgba(255, 255, 255, 0.03)', url: ''},
    {name: 'Docker', logo: Docker, color: 'rgba(255, 255, 255, 0.03)', url: ''},
    {name: '', logo: '', color: 'rgba(255, 255, 255, 0.03)', url: ''},
    {name: '', logo: '', color: 'rgba(255, 255, 255, 0.03)', url: ''},
    {name: '', logo: '', color: 'rgba(255, 255, 255, 0.03)', url: ''},
    {name: 'VS Code', logo: VSCode , color: 'rgba(255, 255, 255, 0.03)', url: ''},
    {name: 'Figma', logo: Figma, color: 'rgba(255, 255, 255, 0.03)', url: ''},
    {name: 'Warp', logo: Canva, color: 'rgba(255, 255, 255, 0.03)', url: ''},
    {name: 'tailwindcss', logo: taiwild, color: 'rgba(255, 255, 255, 0.03)', url: ''},
    {name: '', logo: '', color: 'rgba(255, 255, 255, 0.03)', url: ''},
    {name: '', logo: '', color: 'rgba(255, 255, 255, 0.03)', url: ''},
    {name: '', logo: '', color: 'rgba(255, 255, 255, 0.03)', url: ''},
    {name: '', logo: '', color: 'rgba(255, 255, 255, 0.03)', url: ''},
    {name: '', logo: '', color: 'rgba(255, 255, 255, 0.03)', url: ''},
    {name: '', logo: '', color: 'rgba(255, 255, 255, 0.03)', url: ''},
    {name: '', logo: '', color: 'rgba(255, 255, 255, 0.03)', url: ''},
    {name: '', logo: '', color: 'rgba(255, 255, 255, 0.03)', url: ''},
    {name: '', logo: '', color: 'rgba(255, 255, 255, 0.03)', url: ''},
    {name: '', logo: '', color: 'rgba(255, 255, 255, 0.03)', url: ''},
];

const FrameworkSection = () => (
    <div className="framework-grid">
        {frameworks.map((framework) => (
            <FrameworkCard key={framework.name} {...framework} />
        ))}
    </div>
);

export default FrameworkSection;