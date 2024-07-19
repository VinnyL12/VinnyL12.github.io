import React from 'react'
import'./About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from'../../assets/profile_pic.jpg'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile_img} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I am a recent Software Engineering graduate from Monmouth University</p>
                    <p>My passion for Software Engineering began...</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>JavaScript</p><hr style={{width:"60%"}}/></div>
                    <div className="about-skill"><p>Java</p><hr style={{width:"60%"}}/></div>
                    <div className="about-skill"><p>PHP</p><hr style={{width:"50%"}}/></div>
                    <div className="about-skill"><p>SQL</p><hr style={{width:"50%"}}/></div>
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}}/></div>
                    <div className="about-skill"><p>React.js</p><hr style={{width:"70%"}}/></div>
                    <div className="about-skill"><p>CodeIgniter</p><hr style={{width:"50%"}}/></div>
                    <div className="about-skill"><p>GraphQL</p><hr style={{width:"50%"}}/></div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>4+</h1>
                <p>YEARS OF CODING EXPERIENCE</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>4+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
        </div>
    </div>
  )
}

export default About