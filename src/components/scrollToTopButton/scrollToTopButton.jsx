import { useEffect, useState } from 'react'
import { LuCircleArrowUp } from 'react-icons/lu'
import './scrollToTopButton.css'

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
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
    isVisible && (
      <button onClick={scrollToTop} className='scrollButton'>
        <LuCircleArrowUp className='scrollButton-icon' />
      </button>
    )
  )
}

export default ScrollToTopButton
