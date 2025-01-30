import Footer from '../../components/footer/footer'
import Header from '../../components/header/header'
import './GraphicDesign.css'

const graphicDesignProjects = [
  {
    title: 'Jornadas Diversidad Cultural',
    img: 'https://res.cloudinary.com/dmztjnlrp/image/upload/v1738175377/Porfolio/Jornadas-Graphic-Design-project.jpg',
    colaboration: 'Universidad de Alcalá',
    path: '/web-design'
  },

  {
    title: 'Creand¡Oh!',
    img: 'https://res.cloudinary.com/dmztjnlrp/image/upload/v1738263069/Porfolio/Creandoh-Graphic-Design-project.png',
    colaboration: 'Freelance',
    path: '/web-design'
  },
  {
    title: 'Mopka',
    img: 'https://res.cloudinary.com/dmztjnlrp/image/upload/v1738262823/Porfolio/Mopka-Graphic-Design-project.png',
    colaboration: 'Freelance',
    path: '/web-design'
  }
]

const GraphicDesign = () => {
  return (
    <section id='section-graphicDesign' className='flex-container'>
      <Header />
      <h2>Graphic Design</h2>
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
