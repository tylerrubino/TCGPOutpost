import React from 'react'
import Wrapper from '../assets/wrappers/LandingPage'
import main from '../assets/images/main3.svg'
import { Link } from 'react-router-dom'
import Logo from '../components/Logo'

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>Optimize Service <span>Efficiency</span></h1>
          <p>
            TicketTime provides real-time tracking and detailed analysis of kitchen ticket times, enabling your restaurant to monitor service performance across locations. With actionable data and intuitive visualizations, it helps streamline and automate operations, reduce delays, and enhance the overall dining experience.
          </p>
          <Link to="/register" className='btn register-link'>
            Register
          </Link>
          <Link to="/login" className='btn'>
            Login / Demo User
          </Link>
        </div>
        <img src={main} alt="ticket time" className='img main-img'/>
      </div>
    </Wrapper>
  )
}

export default Landing