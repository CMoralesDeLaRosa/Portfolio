import { useNavigate } from 'react-router-dom'
import Header from '../../components/header/header'
import './Audiovisual.css'
import Footer from '../../components/Footer/Footer'

const audiovisualProjects = [
  {
    title: 'Papaoutai',
    img: 'https://res.cloudinary.com/dmztjnlrp/image/upload/v1737831583/Porfolio/Papaoutai-audiovisual-project.png',
    colaboration: 'Freelance',
    path: '/audiovisual/papaoutai'
  },

  {
    title: 'Roots',
    img: 'https://res.cloudinary.com/dmztjnlrp/image/upload/v1737832165/Porfolio/Roots-audiovisual-project.png',
    colaboration: 'Freelance',
    path: '/audiovisual/roots'
  },
  {
    title: 'Jornadas de España en RD',
    img: 'https://res.cloudinary.com/dmztjnlrp/image/upload/v1737832582/Porfolio/Semanas-espa%C3%B1a-audiovisual-project.png',
    colaboration: 'Embajada de España en RD ',
    path: '/audiovisual/jornadas-espana-rd'
  }
]
const Audiovisual = () => {
  const navigate = useNavigate()

  const handleProject = (path) => {
    navigate(path)
  }
  return (
    <section id='section-audiovisual'>
      <Header />
      <article className='article-projects flex-container'>
        {audiovisualProjects.map((project, index) => (
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

export default Audiovisual
