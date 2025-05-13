import Header from '../../../../components/header/header'
import './CreandOh.css'
import { FaSquare } from 'react-icons/fa6'
import { IoBulb } from 'react-icons/io5'
import { FaPlus, FaLongArrowAltRight } from 'react-icons/fa'
import { AiOutlineGift } from 'react-icons/ai'
import Footer from '../../../../components/footer/footer'
import { useEffect } from 'react'
import { FaHandsHelping } from 'react-icons/fa'
import { HiMiniPaintBrush } from 'react-icons/hi2'
import { FaPeopleRobbery } from 'react-icons/fa6'
import { FaMeteor } from 'react-icons/fa'

const creandOhItems = {
  name: 'Creand¡Oh!',
  imgMain:
    'https://res.cloudinary.com/dmztjnlrp/image/upload/v1747070381/Porfolio/Creand%C2%A1Oh%21/Creando-image-main.png',
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
    'https://res.cloudinary.com/dmztjnlrp/image/upload/v1747155309/Porfolio/Creand%C2%A1Oh%21/Creando-image4.png',
  imgChallenge2:
    'https://res.cloudinary.com/dmztjnlrp/image/upload/v1746554260/Porfolio/El%20Perol/El-Perol-Scheme-Mobile.png',
  process1:
    'To achieve a unified design, I first selected the most representative elements from each visual identity: the isotypes. From there, I chose a standard yet fluid typeface that reflected the artistic nature of the project. Finally, I retained the original colors —purple and yellow— in subtle accents, providing visual continuity while allowing greater flexibility for the new logo.',
  imgProcess1:
    'https://res.cloudinary.com/dmztjnlrp/image/upload/v1747073722/Porfolio/Creand%C2%A1Oh%21/Creando-image1.png',
  imgProcess2:
    'https://res.cloudinary.com/dmztjnlrp/image/upload/v1747073722/Porfolio/Creand%C2%A1Oh%21/Creando-image1.png',
  process2:
    'This graphic line has been used for five years with excellent results, thanks to its adaptability to all types of projects and the strong visual identity it has provided to the center. This latter aspect has been key in positioning the business ahead of similar centers in the Community of Madrid. Nowadays, the project is led by another professional who has adapted the graphic line to reflect his own background. ',
  learning:
    'One of the most valuable lessons I’ve learned from this project has been in the field of graphic design. Creating a logo that balances two distinct brand identities, conveys a renewed image, and remains adaptable to all types of projects was a real challenge. Through this process, I’ve learned how to develop a cohesive graphic line and how to apply it consistently across different materials—each one maintaining its own unique personality while staying aligned with the overall visual identity.',
  mistakes:
    'Regarding the mistakes made, I believe the graphic line had such a strong personality that, in some projects, it was difficult to adapt without compromising quality. This led to longer design times, whereas a similar but more flexible approach could have streamlined the process without losing visual coherence.',
  imgLearning:
    'https://res.cloudinary.com/dmztjnlrp/image/upload/v1739820184/Porfolio/El%20Perol/El-perol-learning-image.png',
  imgLearning2:
    'https://res.cloudinary.com/dmztjnlrp/image/upload/v1746555426/Porfolio/El%20Perol/El-Perol-image10.png'
}
const creandOhDetails = [
  { icon: <FaSquare className='square-green' />, text: creandOhItems.type },
  { icon: <FaSquare className='square-green' />, text: creandOhItems.tools },
  {
    icon: <FaSquare className='square-green' />,
    text: creandOhItems.colaboration
  }
]
const CreandOh = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <section id='section-creandoh-project' className='flex-container'>
      <Header />
      <article className='article-creandoh-main flex-container'>
        <div className='div-creandoh-main-image'>
          <img src={creandOhItems.imgMain} alt={creandOhItems.name} />
        </div>
        <h2>{creandOhItems.name}</h2>
        <ul className='ul-creandoh-main flex-container'>
          {creandOhDetails.map((item, index) => (
            <li key={index} className='flex-container'>
              {item.icon}
              {item.text}
            </li>
          ))}
          <FaSquare className='square-green-last' />
        </ul>
      </article>
      <article className='article-creandoh-focus'>
        <h3>Project Focus</h3>
        <div className='div-scheme-creandoh'>
          <FaHandsHelping className='big-icon-scheme-web-design' />
          <FaPlus className='small-icon-scheme-web-design' />
          <HiMiniPaintBrush className='big-icon-scheme-web-design' />
          <FaPlus className='small-icon-scheme-web-design' />
          <FaPeopleRobbery className='big-icon-scheme-web-design' />
          <FaLongArrowAltRight className='small-icon-scheme-web-design' />
          <FaMeteor className='big-icon-scheme-web-design' />
        </div>
        <p>{creandOhItems.focus}</p>
        <div className='div-images-focus-creandoh flex-container'>
          <div className='flex-container'>
            <img src={creandOhItems.imgFocus1} alt='Web site El Perol' />
          </div>
          <div className='flex-container'>
            <img
              src={creandOhItems.imgFocus2}
              alt='Cristina Masson in the opening of Creand¡Oh!'
            />
          </div>
        </div>
      </article>
      <article className='article-creandoh-challenges flex-container'>
        <h3>Challenges</h3>
        <p>{creandOhItems.challenges1}</p>
        <div className='div-creandoh-challenges-img1'>
          <img src={creandOhItems.imgChallenge1} />
        </div>
        <p>{creandOhItems.challenges2}</p>
      </article>
      <article className='article-creandoh-process flex-container'>
        <h3>Project Process</h3>
        <p>{creandOhItems.process1}</p>
        <div className='div-creandoh-process-img1'>
          <img src={creandOhItems.imgProcess1} alt='Scheme of the process' />
          <img src={creandOhItems.imgProcess3} alt='Scheme of the process' />
        </div>
        <p>{creandOhItems.process2}</p>
        <div className='div-creandoh-process-img2'>
          <img src={creandOhItems.imgProcess2} alt='Register part' />
        </div>
        <p>{creandOhItems.process3}</p>
      </article>
      <article className='article-creandoh-learning flex-container'>
        <h3>Learning and mistakes</h3>
        <img src={creandOhItems.imgLearning} />
        <img src={creandOhItems.imgLearning2} />
        <p>{creandOhItems.learning}</p>
        <p>{creandOhItems.mistakes}</p>
      </article>
      <Footer />
    </section>
  )
}

export default CreandOh
