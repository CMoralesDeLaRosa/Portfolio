import './Header.css'
import { NavLink } from 'react-router-dom'

const headerItems = ['Web Design', 'Audiovisual', 'Graphic Design', 'About']

const Header = () => {
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
      <div className='div-line-header'></div>
    </header>
  )
}

export default Header
