import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/profile_pic.jpg'

const About = () => {
    return (
        <div id='about' className='about'>
            <div className="about-title">
                <h1>About me</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="about-para">
                <p>My passion for Software Engineering began during my Freshman year of college. I was unsure what I wanted to do as a young adult but I was drawn to Software Engineering due to the incredible work-life balance of the industry. Soon after beginning my journey, my motives became more pure and I began to develop a love for Software Development. After 4 years of rigorous coursework and a summer long internship with RunSignup, I completed my education at Monmouth University, officially solidifying myself as a qualified Software Engineer. I am eager to provide quality software solutions to all who are in need and I look forward to expanding my knowledge in the ever-growing field of Software Engineering. </p>
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={profile_img} alt="" />
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>JavaScript</p></div>
                    <hr style={{ width: "200%" }} />
                    <div className="about-skill"><p>PHP</p></div>
                    <hr style={{ width: "200%" }} />
                    <div className="about-skill"><p>HTML & CSS</p></div>
                    <hr style={{ width: "200%" }} />
                    <div className="about-skill"><p>Java</p></div>
                    <hr style={{ width: "150%" }} />
                    <div className="about-skill"><p>SQL</p></div>
                    <hr style={{ width: "150%" }} />
                    <div className="about-skill"><p>Python</p></div>
                    <hr style={{ width: "100%" }} />
                    <div className="about-skill"><p>React.js</p></div>
                    <hr style={{ width: "150%" }} />
                    <div className="about-skill"><p>CodeIgniter</p></div>
                    <hr style={{ width: "100%" }} />
                    <div className="about-skill"><p>GraphQL</p></div>
                    <hr style={{ width: "100%" }} />
                    <div className="about-skill"><p>API Development</p></div>
                    <hr style={{ width: "100%" }} />
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