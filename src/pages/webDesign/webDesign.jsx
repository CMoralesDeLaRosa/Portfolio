import Header from '../../components/header/header'
import './WebDesign.css'

const webDesignProjects = [
  {
    title: 'El Perol ',
    img: 'https://res.cloudinary.com/dmztjnlrp/image/upload/v1737828796/Porfolio/El-perol-web-design-project.png',
    path: '/web-design'
  },

  {
    title: 'Pokemon`s Cards ',
    img: 'https://res.cloudinary.com/dmztjnlrp/image/upload/v1737830097/Porfolio/Pokemon-cards-webDesign-project.png',
    path: '/web-design'
  },
  {
    title: 'Retro Games',
    img: 'https://res.cloudinary.com/dmztjnlrp/image/upload/v1737830329/Porfolio/Retro-games-webDesign-project.png',
    path: '/web-design'
  }
]

const WebDesign = () => {
  return (
    <section id='section-webDesign'>
      <Header />
      <h2>Web Design</h2>
      <div className='div-line-title-webDesign'></div>
      <article className='article-projects-webDesign flex-container'>
        {webDesignProjects.map((project, index) => (
          <div
            key={index}
            className='div-project-webDesign'
            onClick={() => handleProject(project.path)}
          >
            <img src={project.img} alt={project.title}></img>
            <h3>{project.title}</h3>
          </div>
        ))}
      </article>
    </section>
  )
}

export default WebDesign
