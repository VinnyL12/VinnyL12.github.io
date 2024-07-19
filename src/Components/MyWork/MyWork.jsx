import React from 'react'
import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const MyWork = () => {
    return (
        <div id='work' className='mywork'>
            <div className="mywork-title">
                <h1>My Latest Work</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="project-title">
                <h2>RunSignup Dynamic Leaderboard Project</h2>
            </div>
            <div className="mywork-container">
                {mywork_data.map((work, index) => {
                    return <img key={index} src={work.w_img} alt="" />
                })}
            </div>
            <a href="https://info.runsignup.com/2024/05/17/monmouth-university-cross-country-leaderboard-project/">
                <div className="mywork-showmore">
                    <p>Learn More</p>
                    <img src={arrow_icon} alt="" />
                </div>
            </a>
        </div>
    )
}

export default MyWork