import React from 'react'
import './Hero.css'
import profile_img from '../../assets/circle_profile_pic.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import resume from '../../assets/Resume-VincentLoretta.pdf'
import download_icon from '../../assets/download-icon.svg'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img className='hero-image' src={profile_img} alt="" />
      <h1><span>I'm Vincent Loretta,</span> Full-Stack Software Engineer based in Barnegat, NJ.</h1>
      <p>I am a recent college graduate from Monmouth University with a Bachelor of Science in Software Engineering and a Minor in Mathematics. I specialize in Front-End development and I have built a multitude of Full-Stack web applications during my 4 years at Monmouth. I am currently seeking a full time position as a Software Engineer and I look forward to joining a team that would benefit from my skillset. Feel free to contact me via email to discuss any potential project inquiries or employment opportunities.</p>
      <div className='hero-action'>
        <AnchorLink className='anchor-link' offset={50} href='#contact'><div className="hero-connect">Connect with me</div></AnchorLink>
        <a href={resume} download="Resume-VincentLoretta.pdf" target='_blank'>
          <div className="hero-resume" href={resume}>Resume <img className='hero-resume-image' src={download_icon} alt="" /></div>
        </a>
      </div>
    </div>
  )
}

export default Hero
