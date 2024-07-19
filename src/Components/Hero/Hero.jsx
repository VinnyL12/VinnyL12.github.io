import React from 'react'
import './Hero.css'
import profile_img from '../../assets/circle_profile_pic.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt="" />
        <h1><span>I'm Vincent Loretta,</span> Full-Stack Developer based in Barnegat, NJ.</h1>
        <p>I am a recent college graduate from Monmouth University with a Bachelor of Science in Software Engineering and a Minor in Mathematics. I specialize in frontend development and I have built a multitude of Full-Stack web applications during my time at University. I am currently seeking a full time position as a Software Engineer and I look forward to joining a team that would benefit from my skillset. Feel free to contact me via email to discuss any potential project inquiries or employment opportunities.</p>
        <div className='hero-action'>
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
            <div className="hero-resume">Resume</div>
        </div>
    </div>
  )
}

export default Hero
