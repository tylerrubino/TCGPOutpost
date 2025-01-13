import React from 'react'
import Wrapper from '../assets/wrappers/BigSidebar'
import { useDashboardContext } from '../pages/DashboardLayout'
import { NavLink } from 'react-router-dom'
import NavLinks from './NavLinks'
import Logo from './Logo'

const BigSidebar = () => {
  const {showSidebar} = useDashboardContext()

  return (
    <Wrapper>
      <div className={showSidebar ? 'sidebar-container' : 'sidebar-container show-sidebar'}>
        <header>
          <Logo />
        </header>
        <NavLinks isBigSidebar/>
      </div>
    </Wrapper>
  )
}

export default BigSidebar