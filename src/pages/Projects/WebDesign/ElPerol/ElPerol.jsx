import Header from '../../../../components/header/header'
import Project from '../../Project/Project'
import './ElPerol.css'

const elPerol = {
  name: 'El Perol',
  imgMain:
    'https://res.cloudinary.com/dmztjnlrp/image/upload/v1738352580/Porfolio/El%20Perol/El-perol-main-image.png',
  type: 'Web site - Backend and Frontend',
  tools: 'React - Css - Node.js',
  colaboration: 'Individual - Bootcamp Rock the Code',
  focus: '',
  challenges: '',
  process: ''
}
const ElPerol = () => {
  return (
    <section id='section-elperol-project' className='flex-container'>
      <Header />
      <Project project={elPerol} />
      {/* <article className='article-elperol-main flex-container'>
        <div className='div-elperol-main-image'>
          <img
            src='https://res.cloudinary.com/dmztjnlrp/image/upload/v1738352580/Porfolio/El%20Perol/El-perol-main-image.png'
            alt='Landing page El perol'
          />
          <img />
        </div>
        <h2>El perol</h2>
        <ul className='ul-elperol-main flex-container'>
          <li>WEB SITE - BACKEND AND FRONTEND</li>
          <li> REACT - CSS - NODE.JS</li>
          <li>BOOTCAMP ROCK THE CODE - INDIVIDUAL</li>
        </ul>
      </article>
      <article className='article-elperol-structure flex-container'>
        <div>
          <h3>Project Focus</h3>
          <p></p>
        </div>
        <div>
          <h3>Challenges</h3>
          <p></p>
        </div>
        <div>
          <h3>Project Process</h3>
          <p></p>
        </div>
      </article> */}
    </section>
  )
}

export default ElPerol
