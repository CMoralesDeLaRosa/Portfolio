import Footer from '../../../../components/footer/footer'
import Header from '../../../../components/header/header'
import './JornadasEspanaRD.css'
import { FaSquare } from 'react-icons/fa6'
import { FaPlus, FaLongArrowAltRight } from 'react-icons/fa'
import { GiTeamUpgrade } from 'react-icons/gi'
import { FaPlane } from 'react-icons/fa'
import { FaPeopleCarry } from 'react-icons/fa'
import { MdSlideshow } from 'react-icons/md'
import { BsStars } from 'react-icons/bs'
import { useEffect } from 'react'

const jornadasEspanaRDItems = {
  name: 'Jornadas de España en RD',
  imgMain:
    'https://res.cloudinary.com/dmztjnlrp/image/upload/v1746874955/Porfolio/Semanas%20de%20Espa%C3%B1a%20en%20RD/Semanas-Espa%C3%B1a-RD-Main-Image.png',
  type: 'Promotional Videos',
  tools: 'Adobe Illustrator - Davinci Resolve',
  colaboration:
    'Freelance - Embajada de España en la República Dominicana - ¡Oh!PROJECT',
  focus1:
    'The objective of this project was to produce a series of promotional videos for the Spain Weeks in the Dominican Republic, with the purpose of publicizing the event schedule. The videos were designed to appeal to a wide audience in order to encourage strong attendance at the various activities.',
  imgFocus1:
    'https://res.cloudinary.com/dmztjnlrp/image/upload/v1746875441/Porfolio/Semanas%20de%20Espa%C3%B1a%20en%20RD/Semanas-Espa%C3%B1a-RD-image1.png',
  imgFocus2:
    'https://res.cloudinary.com/dmztjnlrp/image/upload/v1746875632/Porfolio/Semanas%20de%20Espa%C3%B1a%20en%20RD/Semanas-Espa%C3%B1a-RD-image2.png',
  imgFocus3:
    'https://res.cloudinary.com/dmztjnlrp/image/upload/v1746875681/Porfolio/Semanas de España en RD/Semanas-España-RD-image3.png',
  imgFocus4:
    'https://res.cloudinary.com/dmztjnlrp/image/upload/v1746875989/Porfolio/Semanas%20de%20Espa%C3%B1a%20en%20RD/Semanas-Espa%C3%B1a-RD-image4.png',
  imgFocus5:
    'https://res.cloudinary.com/dmztjnlrp/image/upload/v1746876071/Porfolio/Semanas%20de%20Espa%C3%B1a%20en%20RD/Semanas-Espa%C3%B1a-RD-image5.png',
  focus2:
    'In addition to explaining the nature of the events taking place during the celebration, the videos feature brief interviews with representatives from the organizing and collaborating institutions. These participants share first-hand insights into the objectives of the initiative and what the public can expect to experience at the various events.',
  challenges:
    'The main challenge of this project was carrying it out remotely. I handled the video editing from Spain, which made thorough planning and close collaboration between the filming and editing teams essential. Additionally, the delivery timeline was very tight, requiring an agile and highly efficient workflow.',
  imgChallenge1:
    'https://res.cloudinary.com/dmztjnlrp/image/upload/v1746876863/Porfolio/Semanas%20de%20Espa%C3%B1a%20en%20RD/Semanas-Espa%C3%B1a-RD-image6.png',
  events:
    'The video series includes a short promotional teaser, a general overview video of the entire celebration, a dedicated piece on the Hispanidad Regatta, and another on the Dalí Exhibition. All the videos share a consistent visual aesthetic and camera movement style to ensure unity across the series. A musical line by the same artist was also selected to provide continuity throughout the pieces.',
  imgEvents1:
    'https://res.cloudinary.com/dmztjnlrp/image/upload/v1746877548/Porfolio/Semanas%20de%20Espa%C3%B1a%20en%20RD/Semanas-Espa%C3%B1a-RD-image7.png',
  imgEvents2:
    'https://res.cloudinary.com/dmztjnlrp/image/upload/v1746877560/Porfolio/Semanas%20de%20Espa%C3%B1a%20en%20RD/Semanas-Espa%C3%B1a-RD-image8.png',
  imgEvents3:
    'https://res.cloudinary.com/dmztjnlrp/image/upload/v1746877579/Porfolio/Semanas%20de%20Espa%C3%B1a%20en%20RD/Semanas-Espa%C3%B1a-RD-image9.png',
  events2:
    'https://res.cloudinary.com/dmztjnlrp/image/upload/v1743615449/Porfolio/Papaoutai/Papaoutai-camera-scheme.png',
  learning:
    'Due to the tight delivery timeline, the pre-production phase was minimal, requiring daily coordination, planning, filming, and editing. This made the project significantly more complex than it might appear at first glance, given the short duration of the videos. However, this situation allowed me to develop the ability to work efficiently under pressure and to solve unforeseen issues quickly. It also taught me the importance of adapting when original plans cannot be executed, by promptly finding high-quality alternatives.',
  imgLearning:
    'https://res.cloudinary.com/dmztjnlrp/image/upload/v1746877941/Porfolio/Semanas%20de%20Espa%C3%B1a%20en%20RD/Semanas-Espa%C3%B1a-RD-image10.png',
  mistakes:
    'Regarding areas for improvement, the limited delivery timeframe affected certain aspects of video quality—particularly the audio. While efforts were made to achieve the best possible sound for both interviews and voice-overs, the time constraints prevented further refinement. For future projects, I have learned that there are methods to obtain higher audio quality while also reducing post-production time.',
  imgMistakes:
    'https://res.cloudinary.com/dmztjnlrp/image/upload/v1746877946/Porfolio/Semanas%20de%20Espa%C3%B1a%20en%20RD/Semanas-Espa%C3%B1a-RD-image-11.png',
  link1: 'https://www.youtube.com/watch?v=NFMLWeovSlY&t=10s',
  link2: 'https://www.youtube.com/watch?v=KLdc03EqLPU&t=8s',
  link3: 'https://www.youtube.com/watch?v=pGAkIQI7yAc'
}
const jornadasEspanaRDDetails = [
  {
    icon: <FaSquare className='square-green' />,
    text: jornadasEspanaRDItems.type
  },
  {
    icon: <FaSquare className='square-green' />,
    text: jornadasEspanaRDItems.tools
  },
  {
    icon: <FaSquare className='square-green' />,
    text: jornadasEspanaRDItems.colaboration
  }
]

const JornadasEspanaRD = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <section id='section-semanas-espana-project' className='flex-container'>
      <Header />
      <article className='article-semanas-espana-main flex-container'>
        <div className='div-semanas-espana-main-image'>
          <img
            src={jornadasEspanaRDItems.imgMain}
            alt={jornadasEspanaRDItems.name}
          />
        </div>
        <h2>{jornadasEspanaRDItems.name}</h2>
        <ul className='ul-semanas-espana-main flex-container'>
          {jornadasEspanaRDDetails.map((item, index) => (
            <li key={index} className='flex-container'>
              {item.icon}
              {item.text}
            </li>
          ))}
          <FaSquare className='square-green-last' />
        </ul>
      </article>
      <article className='article-semanas-espana-focus'>
        <h3>Project Focus</h3>
        <div className='div-scheme-semanas-espana'>
          <FaPlane className='big-icon-scheme-audiovisual' />
          <FaPlus className='small-icon-scheme-audiovisual' />
          <MdSlideshow className='big-icon-scheme-audiovisual' />
          <FaPlus className='small-icon-scheme-audiovisual' />
          <FaPeopleCarry className='big-icon-scheme-audiovisual-camera' />
          <FaLongArrowAltRight className='small-icon-scheme-audiovisual' />
          <GiTeamUpgrade className='big-icon-scheme-audiovisual' />
        </div>
        <p>{jornadasEspanaRDItems.focus1}</p>
        <div className='div-images-focus-semanas-espana1 flex-container'>
          <img
            src={jornadasEspanaRDItems.imgFocus1}
            alt='Frame of promotional video'
          />
          <img
            src={jornadasEspanaRDItems.imgFocus2}
            alt='Frame of Regata de la Hispanidad video'
          />
          <img
            src={jornadasEspanaRDItems.imgFocus3}
            alt='Frame of Salvador Dalí, ilustrando genios video'
          />
        </div>
        <p>{jornadasEspanaRDItems.focus2}</p>
        <div className='div-images-focus-semanas-espana2 flex-container'>
          <img src={jornadasEspanaRDItems.imgFocus4} alt='Frame of interview' />
          <img src={jornadasEspanaRDItems.imgFocus5} alt='Frame of interview' />
        </div>
      </article>
      <article className='article-semanas-espana-challenges flex-container'>
        <h3>Challenges</h3>
        <p>{jornadasEspanaRDItems.challenges}</p>
        <div className='div-semanas-espana-challenges-img'>
          <img
            src={jornadasEspanaRDItems.imgChallenge1}
            alt='Frame of Dali, ilustrando genios video'
          />
        </div>
      </article>
      <article className='article-semanas-espana-events flex-container'>
        <h3>Events</h3>
        <p>{jornadasEspanaRDItems.events}</p>
        <div className='div-semanas-espana-events-img flex-container'>
          <img
            src={jornadasEspanaRDItems.imgEvents1}
            alt='Frame of presentation video'
          />
          <img
            src={jornadasEspanaRDItems.imgEvents2}
            alt='Frame of Regata de la Hispanidad video'
          />
          <img
            src={jornadasEspanaRDItems.imgEvents3}
            alt='Frame of Dalí, ilustrando genios video'
          />
        </div>
      </article>
      <article className='article-semanas-espana-learning flex-container'>
        <h3>Learning</h3>
        <p>{jornadasEspanaRDItems.learning}</p>
        <div className='div-semanas-espana-learning-img flex-container'>
          <img
            src={jornadasEspanaRDItems.imgLearning}
            alt='Frame of Dalí, ilustrando genios video'
          />
        </div>
      </article>
      <article className='article-semanas-espana-mistakes flex-container'>
        <h3>Mistakes</h3>
        <p>{jornadasEspanaRDItems.mistakes}</p>
        <div className='div-semanas-espana-mistakes-img flex-container'>
          <img
            src={jornadasEspanaRDItems.imgMistakes}
            alt='Frame of Regata de la Hispanidad video'
          />
        </div>
      </article>
      <article className='article-el-perol-link flex-container'>
        <a href={jornadasEspanaRDItems.link1} target='_blank'>
          Ready to explore the project? |
        </a>
        <a href={jornadasEspanaRDItems.link2} target='_blank'>
          This is de second one |
        </a>
        <a href={jornadasEspanaRDItems.link3} target='_blank'>
          And the last one!
        </a>
        <BsStars className='logo-link-el-perol' />
      </article>
      <Footer />
    </section>
  )
}

export default JornadasEspanaRD
