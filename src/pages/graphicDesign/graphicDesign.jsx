import { useEffect } from 'react'
import Footer from '../../components/footer/footer'
import Header from '../../components/header/header'
import './graphicDesign.css'
import { useNavigate } from 'react-router-dom'

const graphicDesignProjects = [
  {
    title: 'Jornadas Diversidad Cultural',
    img: 'https://res.cloudinary.com/dmztjnlrp/image/upload/v1738175377/Porfolio/Jornadas-Graphic-Design-project.jpg',
    colaboration: 'Universidad de Alcalá',
    path: '/graphic-design'
  },

  {
    title: 'Creand¡Oh!',
    img: 'https://res.cloudinary.com/dmztjnlrp/image/upload/v1738263069/Porfolio/Creandoh-Graphic-Design-project.png',
    colaboration: 'Freelance',
    path: '/graphic-design'
  },
  {
    title: 'Mopka',
    img: 'https://res.cloudinary.com/dmztjnlrp/image/upload/v1738262823/Porfolio/Mopka-Graphic-Design-project.png',
    colaboration: 'Freelance',
    path: '/graphic-design'
  }
]

const GraphicDesign = () => {
  const navigate = useNavigate()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleProject = (path) => {
    navigate(path)
  }
  return (
    <section id='section-graphicDesign'>
      <Header />
      <article className='article-projects flex-container'>
        {graphicDesignProjects.map((project, index) => (
          <div
            key={index}
            className='div-project'
            onClick={() => handleProject(project.path)}
          >
            <img src={project.img} alt={project.title}></img>
            <h3>{project.title}</h3>
            <h4>{project.colaboration}</h4>
          </div>
        ))}
      </article>
      <Footer />
    </section>
  )
}

export default GraphicDesign
