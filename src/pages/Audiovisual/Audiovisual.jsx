import Header from '../../components/header/header'
import './Audiovisual.css'

const audiovisualProjects = [
  {
    title: 'Papaoutai',
    img: 'https://res.cloudinary.com/dmztjnlrp/image/upload/v1737828796/Porfolio/El-perol-web-design-project.png',
    path: '/web-design'
  },

  {
    title: 'Roots',
    img: 'https://res.cloudinary.com/dmztjnlrp/image/upload/v1737830097/Porfolio/Pokemon-cards-webDesign-project.png',
    path: '/web-design'
  },
  {
    title: 'Jornadas de España en RD',
    img: 'https://res.cloudinary.com/dmztjnlrp/image/upload/v1737830329/Porfolio/Retro-games-webDesign-project.png',
    path: '/web-design'
  }
]
const Audiovisual = () => {
  return (
    <section id='section-audiovisual'>
      <Header />
      <h2>Audiovisual</h2>
    </section>
  )
}

export default Audiovisual
