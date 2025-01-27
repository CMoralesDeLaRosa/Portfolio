import Header from '../../components/header/header'
import './WebDesign.css'

const webDesignProjects = [
  {
    title: 'El Perol ',
    img: 'https://res.cloudinary.com/dmztjnlrp/image/upload/v1737828796/Porfolio/El-perol-web-design-project.png',
    colaboration: 'Bootcamp Rock the Code',
    path: '/web-design'
  },

  {
    title: 'Pokemon`s Cards ',
    img: 'https://res.cloudinary.com/dmztjnlrp/image/upload/v1737830097/Porfolio/Pokemon-cards-webDesign-project.png',
    colaboration: 'Bootcamp Rock the Code',
    path: '/web-design'
  },
  {
    title: 'Retro Games',
    img: 'https://res.cloudinary.com/dmztjnlrp/image/upload/v1737830329/Porfolio/Retro-games-webDesign-project.png',
    colaboration: 'Bootcamp Rock the Code',
    path: '/web-design'
  }
]

const WebDesign = () => {
  return (
    <section id='section-webDesign'>
      <Header />
      <h2>Web Design</h2>
      <article className='article-projects flex-container'>
        {webDesignProjects.map((project, index) => (
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
    </section>
  )
}

export default WebDesign
