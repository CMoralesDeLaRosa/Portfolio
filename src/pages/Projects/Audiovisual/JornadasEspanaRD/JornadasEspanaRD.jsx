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
    'https://res.cloudinary.com/dmztjnlrp/image/upload/v1741723080/Porfolio/Papaoutai/Papaoutai-image4.png',
  events:
    'The video series includes a short promotional teaser, a general overview video of the entire celebration, a dedicated piece on the Hispanidad Regatta, and another on the Dalí Exhibition. All the videos share a consistent visual aesthetic and camera movement style to ensure unity across the series. A musical line by the same artist was also selected to provide continuity throughout the pieces.',
  imgEvents1:
    'https://res.cloudinary.com/dmztjnlrp/image/upload/v1743615449/Porfolio/Papaoutai/Papaoutai-camera-scheme.png',
  imgEvents2:
    'https://res.cloudinary.com/dmztjnlrp/image/upload/v1742846332/Porfolio/Papaoutai/Papaoutai-image7.png',
  events2:
    'https://res.cloudinary.com/dmztjnlrp/image/upload/v1743615449/Porfolio/Papaoutai/Papaoutai-camera-scheme.png',
  learning:
    'Due to the tight delivery timeline, the pre-production phase was minimal, requiring daily coordination, planning, filming, and editing. This made the project significantly more complex than it might appear at first glance, given the short duration of the videos. However, this situation allowed me to develop the ability to work efficiently under pressure and to solve unforeseen issues quickly. It also taught me the importance of adapting when original plans cannot be executed, by promptly finding high-quality alternatives.',
  imgLearning1:
    'https://res.cloudinary.com/dmztjnlrp/image/upload/v1742931682/Porfolio/Papaoutai/Papoutai-image10.png',
  imgLearning2:
    'https://res.cloudinary.com/dmztjnlrp/image/upload/v1742931682/Porfolio/Papaoutai/Papaoutai-image11.png',
  mistakes:
    'Regarding areas for improvement, the limited delivery timeframe affected certain aspects of video quality—particularly the audio. While efforts were made to achieve the best possible sound for both interviews and voice-overs, the time constraints prevented further refinement. For future projects, I have learned that there are methods to obtain higher audio quality while also reducing post-production time.',
  imgMistakes:
    'https://res.cloudinary.com/dmztjnlrp/image/upload/v1742932468/Porfolio/Papaoutai/Papaoutai-image12.png',
  link: 'https://www.youtube.com/watch?v=918lYUKCCzA'
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
      <article className='article-papaoutai-challenges flex-container'>
        <h3>Challenges</h3>
        <p>{jornadasEspanaRDItems.challenges}</p>
        <div className='div-papaoutai-challenges-img'>
          <img
            src={jornadasEspanaRDItems.imgChallenge1}
            alt='Frame of Papaoutai video'
          />
        </div>
      </article>
      <article className='article-papaoutai-references flex-container'>
        <h3>References</h3>
        <p>{jornadasEspanaRDItems.references1}</p>
        <p>{jornadasEspanaRDItems.references2}</p>
        <div className='div-papaoutai-references-img'>
          <img
            src={jornadasEspanaRDItems.imgReferences1}
            alt='Videodance References'
          />
          <img
            src={jornadasEspanaRDItems.imgReferences2}
            alt='Videodance References'
          />
        </div>
        <p>{jornadasEspanaRDItems.references3}</p>
      </article>
      <article className='article-papaoutai-camera flex-container'>
        <h3>Camera</h3>
        <p>{jornadasEspanaRDItems.camera}</p>
        <div className='div-papaoutai-camera-img flex-container'>
          <img src={jornadasEspanaRDItems.imgCamera1} alt='Schemes of camera' />
          <img
            src={jornadasEspanaRDItems.imgCamera2}
            alt='Frame of the video'
          />
        </div>
      </article>
      <article className='article-papaoutai-color-grading flex-container'>
        <h3>Color Grading</h3>
        <p>{jornadasEspanaRDItems.colorGrading}</p>
        <div className='div-papaoutai-color-grading-img1 flex-container'>
          <img
            src={jornadasEspanaRDItems.imgColorGrading1}
            alt='Frame of the original video'
          />
          <img
            src={jornadasEspanaRDItems.imgColorGrading2}
            alt='Frame of the original video'
          />
        </div>
        <div className='div-papaoutai-color-grading-img2 flex-container'>
          <img
            src={jornadasEspanaRDItems.imgColorGrading3}
            alt='Examples of color grading'
          />
          <img
            src={jornadasEspanaRDItems.imgColorGrading4}
            alt='Examples of color grading'
          />
        </div>
      </article>
      <article className='article-papaoutai-learning flex-container'>
        <h3>Learning</h3>
        <p>{jornadasEspanaRDItems.learning}</p>
        <div className='div-papaoutai-learning-img flex-container'>
          <img
            src={jornadasEspanaRDItems.imgLearning1}
            alt='Image of making off'
          />
          <img
            src={jornadasEspanaRDItems.imgLearning2}
            alt='Image of making off'
          />
        </div>
      </article>
      <article className='article-papaoutai-mistakes flex-container'>
        <h3>Mistakes</h3>
        <p>{jornadasEspanaRDItems.mistakes}</p>
        <div className='div-papaoutai-mistakes-img flex-container'>
          <img
            src={jornadasEspanaRDItems.imgMistakes}
            alt='Frame of the video'
          />
        </div>
      </article>
      <article className='article-el-perol-link flex-container'>
        <a href={jornadasEspanaRDItems.link} target='_blank'>
          Want to check it out?
        </a>
        <BsStars className='logo-link-el-perol' />
      </article>
      <Footer />
    </section>
  )
}

export default JornadasEspanaRD
