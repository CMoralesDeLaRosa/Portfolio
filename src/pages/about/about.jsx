import Header from '../../components/header/header'
import './About.css'
import { FaSquare, FaGithubSquare, FaLinkedin, FaBahai } from 'react-icons/fa'
import { BsPersonArmsUp } from 'react-icons/bs'
import { IoMdBookmarks } from 'react-icons/io'
import { MdOutlineWork } from 'react-icons/md'
import { LiaConnectdevelop } from 'react-icons/lia'
import { GiCactusPot } from 'react-icons/gi'
import { FaSquarePlus } from 'react-icons/fa6'
import Footer from '../../components/footer/footer'

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
const highlights = [
  '9 years of experience in design across various areas: audiovisual, graphic, murals, and web design.',
  'Multidisciplinary background in architecture, directing photography, artistic event management, and Full Stack web development.',
  'Professional experience both as a freelancer and in companies, balancing client-facing roles with more technical-focused positions.',
  'Ability to adapt to different design areas and manage projects from concept to execution.',
  'Passion for gardening and cacti, which has enhanced my patience and attention to detail.'
]
const links = [
  {
    icon: <FaLinkedin />,
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/cristina-morales-de-la-rosa/'
  },
  {
    icon: <FaGithubSquare />,
    label: 'GitHub',
    url: 'https://github.com/CMoralesDeLaRosa'
  },
  { icon: <FaSquarePlus />, label: 'Otro', url: '#' }
]

const About = () => {
  return (
    <section id='section-about' className='flex-container'>
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
          <div className='div-icons-highlights '>
            <FaBahai className='icon-highlight' />
            <IoMdBookmarks className='icon-highlight' />
            <MdOutlineWork className='icon-highlight' />
            <LiaConnectdevelop className='icon-highlight' />
            <GiCactusPot className='icon-highlight' />
          </div>
          <ul className='ul-highlights-about '>
            {highlights.map((highlight, index) => (
              <li key={index} className='li-highlight-about '>
                {highlight}
                <FaSquare className='square-hightlight' />
              </li>
            ))}
          </ul>
        </article>
        <article className='article-contact-about flex-container'>
          <div className='div-icons-contact-about flex-container'>
            {links.map((link, index) => (
              <div
                key={index}
                className='div-links-contact-about flex-container'
              >
                <a
                  href={link.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='a-link-contact-about'
                >
                  {link.icon}
                </a>
              </div>
            ))}
          </div>
        </article>
      </article>
      <Footer />
    </section>
  )
}

export default About
