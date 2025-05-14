import Header from '../../../../components/header/header'
import './Mopka.css'
import { FaSquare } from 'react-icons/fa6'
import { FaPlus, FaLongArrowAltRight } from 'react-icons/fa'
import Footer from '../../../../components/footer/footer'
import { useEffect } from 'react'
import { FaHandsHelping } from 'react-icons/fa'
import { HiMiniPaintBrush } from 'react-icons/hi2'
import { FaPeopleRobbery } from 'react-icons/fa6'
import { FaMeteor } from 'react-icons/fa'

const mopkaItems = {
  name: 'Mopka',
  imgMain:
    'https://res.cloudinary.com/dmztjnlrp/image/upload/v1747242035/Porfolio/Mopka/Mokpa-image-main.jpg',
  type: 'Comprehensive Graphic Design for Brand',
  tools:
    'Adobe Illustrator - Adobe Photoshop - Adobe Premiere Pro - Davinci Resolve',
  colaboration: 'Freelance',
  focus:
    'This project focused on developing the visual identity for Cread¡Oh!, a performing arts and dance school born from the merger of two associations: Mopka and ¡Oh!PROJECT! One of the main goals was to preserve the essence of both original brands, blending them into a new, cohesive, and recognizable identity. Additionally, it was essential to create a logo and a visual identity that represented the wide range of artistic disciplines offered by the school and resonated with its diverse target audiences.',
  imgFocus1:
    'https://res.cloudinary.com/dmztjnlrp/image/upload/v1747074499/Porfolio/Creand%C2%A1Oh%21/CreandOh-image2.jpg',
  imgFocus2:
    'https://res.cloudinary.com/dmztjnlrp/image/upload/v1747074997/Porfolio/Creand%C2%A1Oh%21/CreandOh-image3.jpg',
  challenges1:
    "One of the main challenges was merging both logos while preserving the essence of each and conveying that the space represented both projects. Another key difficulty was creating a visual identity that could encompass a wide range of activities, from children's workshops to Hip Hop battle events.",
  challenges2:
    'In addition to the logo design, it was essential to maintain a coherent visual identity across all elements related to the school. This included not only the interior design of the space but also the advertising materials and signage. The goal was to create a unified visual identity that connected all aspects of the project, while being flexible enough to adapt to different activities and styles without losing its essence.',
  imgChallenge1:
    'https://res.cloudinary.com/dmztjnlrp/image/upload/v1747158341/Porfolio/Creand%C2%A1Oh%21/Creando-image4.png',
  imgChallenge2:
    'https://res.cloudinary.com/dmztjnlrp/image/upload/v1747156028/Porfolio/Creand%C2%A1Oh%21/CreandOh-image5.jpg',
  imgChallenge3:
    'https://res.cloudinary.com/dmztjnlrp/image/upload/v1747156040/Porfolio/Creand%C2%A1Oh%21/CreandOh-image6.jpg',
  imgChallenge4:
    'https://res.cloudinary.com/dmztjnlrp/image/upload/v1747161082/Porfolio/Creand%C2%A1Oh%21/CreandOh-image-10.png',
  process1:
    'To achieve a unified design, I first selected the most representative elements from each visual identity: the isotypes. From there, I chose a standard yet fluid typeface that reflected the artistic nature of the project. Finally, I retained the original colors —purple and yellow— in subtle accents, providing visual continuity while allowing greater flexibility for the new logo.',
  imgProcess1:
    'https://res.cloudinary.com/dmztjnlrp/image/upload/v1747073722/Porfolio/Creand%C2%A1Oh%21/Creando-image1.png',
  imgProcess2:
    'https://res.cloudinary.com/dmztjnlrp/image/upload/v1747158840/Porfolio/Creand%C2%A1Oh%21/CreandOh-image7.png',
  imgProcess3:
    'https://res.cloudinary.com/dmztjnlrp/image/upload/v1747161082/Porfolio/Creand%C2%A1Oh%21/CreandOh-image9.png',
  imgProcess4:
    'https://res.cloudinary.com/dmztjnlrp/image/upload/v1747161650/Porfolio/Creand%C2%A1Oh%21/CreandOh-image11.png',
  process2:
    'This graphic line has been used for five years with excellent results, thanks to its adaptability to all types of projects and the strong visual identity it has provided to the center. This latter aspect has been key in positioning the business ahead of similar centers in the Community of Madrid. Nowadays, the project is led by another professional who has adapted the graphic line to reflect his own background. ',
  learning:
    'One of the most valuable lessons I’ve learned from this project has been in the field of graphic design. Creating a logo that balances two distinct brand identities, conveys a renewed image, and remains adaptable to all types of projects was a real challenge. Through this process, I’ve learned how to develop a cohesive graphic line and how to apply it consistently across different materials—each one maintaining its own unique personality while staying aligned with the overall visual identity.',
  mistakes:
    'Regarding the mistakes made, I believe the graphic line had such a strong personality that, in some projects, it was difficult to adapt without compromising quality. This led to longer design times, whereas a similar but more flexible approach could have streamlined the process without losing visual coherence.',
  imgLearning:
    'https://res.cloudinary.com/dmztjnlrp/image/upload/v1747159014/Porfolio/Creand%C2%A1Oh%21/CreandOh-image8.jpg'
}
const mopkaDetails = [
  { icon: <FaSquare className='square-green' />, text: mopkaItems.type },
  { icon: <FaSquare className='square-green' />, text: mopkaItems.tools },
  {
    icon: <FaSquare className='square-green' />,
    text: mopkaItems.colaboration
  }
]
const Mopka = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <section id='section-mopka-project' className='flex-container'>
      <Header />
      <article className='article-mopka-main flex-container'>
        <div className='div-mopka-main-image'>
          <img src={mopkaItems.imgMain} alt={mopkaItems.name} />
        </div>
        <h2>{mopkaItems.name}</h2>
        <ul className='ul-mopka-main flex-container'>
          {mopkaDetails.map((item, index) => (
            <li key={index} className='flex-container'>
              {item.icon}
              {item.text}
            </li>
          ))}
          <FaSquare className='square-green-last' />
        </ul>
      </article>
      <article className='article-mopka-focus'>
        <h3>Project Focus</h3>
        <div className='div-scheme-mopka'>
          <FaHandsHelping className='big-icon-scheme-web-design' />
          <FaPlus className='small-icon-scheme-web-design' />
          <HiMiniPaintBrush className='big-icon-scheme-web-design' />
          <FaPlus className='small-icon-scheme-web-design' />
          <FaPeopleRobbery className='big-icon-scheme-web-design' />
          <FaLongArrowAltRight className='small-icon-scheme-web-design' />
          <FaMeteor className='big-icon-scheme-web-design' />
        </div>
        <p>{mopkaItems.focus}</p>
        <div className='div-images-focus-mopka flex-container'>
          <div className='flex-container'>
            <img
              src={mopkaItems.imgFocus1}
              alt='Cristina Masson in the opening of Creand¡Oh!'
            />
          </div>
          <div className='flex-container'>
            <img
              src={mopkaItems.imgFocus2}
              alt='Choco S and Asterisko in the opening of Creand¡Oh!'
            />
          </div>
        </div>
      </article>
      <article className='article-mopka-challenges flex-container'>
        <h3>Challenges</h3>
        <p>{mopkaItems.challenges1}</p>
        <div className='div-mopka-challenges-img1'>
          <img src={mopkaItems.imgChallenge1} alt="Poster's examples" />
          <img src={mopkaItems.imgChallenge4} alt="Poster's examples" />
        </div>
        <p>{mopkaItems.challenges2}</p>
        <div className='div-mopka-challenges-img2 flex-container'>
          <img src={mopkaItems.imgChallenge2} alt='Inner space of Creand¡Oh!' />
          <img src={mopkaItems.imgChallenge3} alt='Inner space of Creand¡Oh!' />
        </div>
      </article>
      <article className='article-mopka-process flex-container'>
        <h3>Project Process</h3>
        <p>{mopkaItems.process1}</p>
        <div className='div-mopka-process-img1'>
          <img
            src={mopkaItems.imgProcess1}
            alt='Scheme of the process of th design'
          />
          <img
            src={mopkaItems.imgProcess4}
            alt='Scheme of the process of th design'
          />
        </div>
        <p>{mopkaItems.process2}</p>
        <div className='div-mopka-process-img2'>
          <img src={mopkaItems.imgProcess2} alt='Examples of posters' />
          <img src={mopkaItems.imgProcess3} alt='Examples of posters' />
        </div>
      </article>
      <article className='article-mopka-learning flex-container'>
        <h3>Learning and mistakes</h3>
        <p>{mopkaItems.learning}</p>
        <p>{mopkaItems.mistakes}</p>
        <img
          src={mopkaItems.imgLearning}
          alt='Frame of a promotional video of Creand¡Oh!'
        />
      </article>
      <Footer />
    </section>
  )
}

export default Mopka
