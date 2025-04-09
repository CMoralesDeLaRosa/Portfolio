import { useState } from 'react'
import './header.css'
import { NavLink } from 'react-router-dom'
import { HiMenu } from 'react-icons/hi'

const headerItems = ['Web Design', 'Audiovisual', 'Graphic Design', 'About']

const Header = () => {
  const [isMobileMenuVisible, setMobileMenuVisible] = useState(false)

  const handleMobileMenuToggle = () => {
    setMobileMenuVisible(!isMobileMenuVisible)
  }
  return (
    <header id='header' className='flex-container'>
      <nav>
        <ul className='ul-header flex-container'>
          {headerItems.map((item) => (
            <li key={item} className='li-header flex-container'>
              <NavLink
                to={`/${item.toLowerCase().replace(' ', '-')}`}
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                {item}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div
        className='mobile-menu-icon flex-container'
        onClick={handleMobileMenuToggle}
      >
        <HiMenu />
      </div>
      <div className={`mobile-menu ${isMobileMenuVisible ? 'visible' : ''}`}>
        <ul className='flex-container'>
          {headerItems.map((item) => (
            <li key={item} className='li-header flex-container'>
              <NavLink
                to={`/${item.toLowerCase().replace(' ', '-')}`}
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                {item}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}

export default Header
