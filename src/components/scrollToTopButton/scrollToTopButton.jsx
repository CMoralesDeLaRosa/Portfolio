import { useEffect, useState } from 'react'
import { CiCircleChevUp } from 'react-icons/ci'
import './scrollToTopButton.css'

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <button
      onClick={scrollToTop}
      className={`scrollButton ${isVisible ? 'show' : ''}`}
    >
      <CiCircleChevUp className='scrollButton-icon' />
    </button>
  )
}

export default ScrollToTopButton
