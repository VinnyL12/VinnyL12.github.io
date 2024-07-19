import React from 'react'
import './Footer.css'
import github_icon from '../../assets/icons8-github.svg'
import linkedin_icon from '../../assets/icons8-linkedin.svg'


const Footer = () => {
    return (
        <div className='footer'>
            <a href="https://github.com/VinnyL12">
                <div className="footer-github">
                    <img src={github_icon} alt="" />
                    <h2>GitHub</h2>
                </div>
            </a>
            <a href="https://www.linkedin.com/in/Vincent-Loretta9/">
                <div className="footer-linkedin">
                    <img src={linkedin_icon} alt="" />
                    <h2>LinkedIn</h2>
                </div>
            </a>
        </div>
    )
}

export default Footer