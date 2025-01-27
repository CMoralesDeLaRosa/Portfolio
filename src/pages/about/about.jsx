import Header from '../../components/header/header'
import './About.css'
import { FaSquare } from 'react-icons/fa'
import { BsPersonArmsUp } from 'react-icons/bs'

const skills = [
  'HTML',
  'CSS',
  'Javascript',
  'Node.js',
  'React',
  'Figma',
  'Git',
  'Adobe Illustrator',
  'Adobe Premire',
  'Adobe Photoshop',
  'Davinci Resolver',
  'Microsoft Office'
]

const About = () => {
  return (
    <section id='section-about'>
      <Header />
      <article className='article-contain-about flex-container'>
        <h2>About</h2>
        <article className='article-skills-about flex-container'>
          <ul className='ul-skills-about flex-container'>
            {skills.map((skill, index) => (
              <li key={index} className='li-skill-about flex-container'>
                {skill} <FaSquare className='square-skill' />
              </li>
            ))}
          </ul>
        </article>
        <article className='article-summary-about '>
          <BsPersonArmsUp className='icon-person-about' />
          <div className='div-container-summary flex-container '>
            <div className='div-paragraphs-summary-about'>
              <p>
                Since I was young, I have enjoyed creative activities,
                especially graphic design, but my logical mind has always driven
                me to explore both the{' '}
                <span className='highlight'>tangible and the intangible</span>.
                This combination led me to study Architecture, a field that
                blends creativity and logic.
              </p>{' '}
              <p>
                During my studies, I spent a year in Slovenia, where I
                discovered European urban art, inspiring me to found Mopka, a
                cultural association focused on{' '}
                <span className='highlight'>
                  collaborative urban art projects,
                </span>{' '}
                promoting the care and transformation of public spaces.
              </p>{' '}
              <p>
                Self-taught in the audiovisual field, I managed photography,
                video recording, and editing, as well as content creation for
                social media. I collaborated with various institutions and later{' '}
                <span className='highlight'>
                  professionally trained in Cinematography.
                </span>{' '}
                Alongside this,{' '}
                <span className='highlight'>
                  I co-founded Creand¡Oh!, a cultural center and artistic
                  training school,
                </span>{' '}
                where I handled school management, event organization, and the
                center's image, designing social media content and promotional
                material.
              </p>{' '}
              <p>
                After the pandemic, in 2022, I left Creand¡Oh! and started
                working in sales and customer service, which allowed me to
                acquire new skills that complemented my previous experience. In
                2023, I rediscovered my passion for{' '}
                <span className='highlight'>
                  combining creativity and logic through Web Development
                </span>
                , a field that lets me apply the same principles I learned in
                Architecture, but in the digital world. It has been the perfect
                conclusion to one learning phase and the foundation for the
                next.
              </p>
            </div>
            <div className='div-images-summary-about flex-container'>
              <div>
                <img
                  src='https://res.cloudinary.com/dmztjnlrp/image/upload/v1738006088/Porfolio/About-img1.jpg'
                  alt='Colorful mural'
                />
              </div>
              <div>
                <img src='https://res.cloudinary.com/dmztjnlrp/image/upload/v1738006097/Porfolio/About-img2.jpg' />
              </div>
            </div>
          </div>
        </article>
        <article className='article-highlights-about flex-container'>
          <h3>Highlights</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Voluptatem, ipsam quasi sunt eligendi, nihil debitis cum unde alias
            doloribus amet, est totam. Reiciendis doloribus blanditiis at amet.
            Ea, perspiciatis suscipit?
          </p>
        </article>

        <article className='article-experience-about flex-container'>
          <h3>Experience</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Voluptatem, ipsam quasi sunt eligendi, nihil debitis cum unde alias
            doloribus amet, est totam. Reiciendis doloribus blanditiis at amet.
            Ea, perspiciatis suscipit?
          </p>
        </article>
        <article className='article-contact-about flex-container'>
          <button></button>
          <button></button>
        </article>
      </article>
    </section>
  )
}

export default About
