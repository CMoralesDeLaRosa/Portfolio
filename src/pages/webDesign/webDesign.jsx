import { useNavigate } from 'react-router-dom'
import Header from '../../components/header/header'
import './webDesign.css'
import Footer from '../../components/footer/footer'
import { useEffect } from 'react'
import ScrollToTopButton from '../../components/scrollToTopButton/scrollToTopButton'

const webDesignProjects = [
  {
    title: 'El Perol ',
    img: 'https://res.cloudinary.com/dmztjnlrp/image/upload/v1737828796/Porfolio/El-perol-web-design-project.png',
    colaboration: 'Bootcamp Rock the Code',
    path: '/web-design/el-perol'
  },
  {
    title: 'Pokemon Cards ',
    img: 'https://res.cloudinary.com/dmztjnlrp/image/upload/v1737830097/Porfolio/Pokemon-cards-webDesign-project.png',
    colaboration: 'Bootcamp Rock the Code',
    path: '/web-design/pokemon-cards'
  },
  {
    title: 'Retro Games',
    img: 'https://res.cloudinary.com/dmztjnlrp/image/upload/v1737830329/Porfolio/Retro-games-webDesign-project.png',
    colaboration: 'Bootcamp Rock the Code',
    path: '/web-design/retro-games'
  }
]

const WebDesign = () => {
  const navigate = useNavigate()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleProject = (path) => {
    navigate(path)
  }

  return (
    <section id='section-webDesign'>
      <Header />
      <article className='article-projects flex-container'>
        {webDesignProjects.map((project, index) => (
          <div
            key={index}
            className='div-project'
            onClick={() => handleProject(project.path)}
          >
            <img src={project.img} alt={project.title} />
            <h3>{project.title}</h3>
            <h4>{project.colaboration}</h4>
          </div>
        ))}
      </article>
      <ScrollToTopButton />
      <Footer />
    </section>
  )
}

export default WebDesign
