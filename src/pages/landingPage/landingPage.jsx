import './LandingPage.css'
import { TiDeviceLaptop, TiVideoOutline } from 'react-icons/ti'
import { PiPencilFill } from 'react-icons/pi'
import { BsPersonArmsUp } from 'react-icons/bs'

const options = [
  {
    title: 'Web Design',
    icon: <TiDeviceLaptop className='icon-landing-page web-design' />
  },
  {
    title: 'Audiovisual',
    icon: <TiVideoOutline className='icon-landing-page' />
  },
  {
    title: 'Graphic Design',
    icon: <PiPencilFill className='icon-landing-page graphic-design' />
  },
  { title: 'About', icon: <BsPersonArmsUp className='icon-landing-page' /> }
]

const LandingPage = () => (
  <section id='section-landing-page' className='flex-container'>
    <article className='article-presentation-landing-page'>
      <h1>Cristina Morales de la Rosa</h1>
      <div className='div-line-landing-page'></div>
      <p>
        Professional with experience in
        <span className='highlight'> visual and multimedia design</span>, now
        specialized in UX/UI, with training in
        <span className='highlight'> Full Stack </span>
        development. My goal is to design{' '}
        <span className='highlight'>exceptional user experiences, </span>
        ensuring that the design is both feasible and effective from a{' '}
        <span className='highlight'>technical perspective.</span>
      </p>
    </article>
    <article className='article-options-landing-page flex-container'>
      {options.map((option, index) => (
        <div key={index} className='div-option-landing-page'>
          <h2>{option.title}</h2>
          {option.icon}
        </div>
      ))}
    </article>
  </section>
)

export default LandingPage
