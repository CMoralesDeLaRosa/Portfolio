import { useState, useEffect } from 'react'
import Footer from '../../components/footer/footer'
import Header from '../../components/header/header'
import './graphicDesign.css'
import { useNavigate } from 'react-router-dom'

const graphicDesignProjects = [
  {
    title: 'Jornadas Diversidad Cultural',
    img: 'https://res.cloudinary.com/dmztjnlrp/image/upload/v1738175377/Porfolio/Jornadas-Graphic-Design-project.jpg',
    colaboration: 'Universidad de Alcalá',
    path: '/graphic-design/jornadas-diversidad-cultural'
  },
  {
    title: 'Creand¡Oh!',
    img: 'https://res.cloudinary.com/dmztjnlrp/image/upload/v1738263069/Porfolio/Creandoh-Graphic-Design-project.png',
    colaboration: 'Freelance',
    path: '/graphic-design/creandoh'
  },
  {
    title: 'Mopka',
    img: 'https://res.cloudinary.com/dmztjnlrp/image/upload/v1738262823/Porfolio/Mopka-Graphic-Design-project.png',
    colaboration: 'Freelance',
    path: '/graphic-design/mopka'
  }
]

const GraphicDesign = () => {
  const navigate = useNavigate()
  const [showAlert, setShowAlert] = useState(false)
  const [alertTitle, setAlertTitle] = useState('')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleProject = (path, title) => {
    if (title === 'Jornadas Diversidad Cultural' || title === 'Mopka') {
      setAlertTitle(title)
      setShowAlert(true)
      setTimeout(() => {
        setShowAlert(false)
      }, 2000)
    } else {
      navigate(path)
    }
  }

  return (
    <section id='section-graphicDesign'>
      <Header />
      {showAlert && (
        <div className='custom-alert flex-container'>
          🚧 Under creative construction – Coming soon!
        </div>
      )}

      <article className='article-projects flex-container'>
        {graphicDesignProjects.map((project, index) => (
          <div
            key={index}
            className='div-project'
            onClick={() => handleProject(project.path, project.title)}
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
