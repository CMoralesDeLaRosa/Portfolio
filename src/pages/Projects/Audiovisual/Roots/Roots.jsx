import Footer from '../../../../components/footer/footer'
import Header from '../../../../components/header/header'
import './Roots.css'
import { FaSquare } from 'react-icons/fa6'
import { FaPlus, FaLongArrowAltRight } from 'react-icons/fa'
import { AiOutlineBranches } from 'react-icons/ai'
import { PiClockCounterClockwiseBold } from 'react-icons/pi'
import { GiBeanstalk } from 'react-icons/gi'
import { BsCameraReelsFill } from 'react-icons/bs'
import { BsStars } from 'react-icons/bs'
import { useEffect } from 'react'

const rootsItems = {
  name: 'Roots',
  imgMain:
    'https://res.cloudinary.com/dmztjnlrp/image/upload/v1743701013/Porfolio/Roots/Roots-main-image.png',
  type: 'Hip Hop Documentary',
  tools: 'Adobe Illustrator',
  colaboration: 'Freelance - Diffraction Productions',
  focus1:
    'Roots: Córdoba Hip-Hop Documentary is a film that aims to give visibility to the urban cultural movement in Córdoba, from its beginnings to the present day, exploring its influences, branches, and some of its most representative artists.',
  focus2:
    'With an audiovisual format and created by young artists from different fields, the documentary will showcase not only the work and careers of local artists but also various areas and spaces in the city related to artistic and cultural exchange.',
  focus3:
    ' Each participant will share their experiences, career path, and opinions about their professional journey, as well as their perspective on the current state of this movement. This will open up a discussion among the documentary’s contributors. In other words, it will not be a one-way narrative but rather an open conversation, allowing interviewees to debate different topics among themselves, fostering an environment of exchange and creation.',
  imgFocus1:
    'https://res.cloudinary.com/dmztjnlrp/image/upload/v1743701744/Porfolio/Roots/Roots-image1.png',
  imgFocus2:
    'https://res.cloudinary.com/dmztjnlrp/image/upload/v1743701728/Porfolio/Roots/Roots-image3.png',
  imgFocus3:
    'https://res.cloudinary.com/dmztjnlrp/image/upload/v1743702075/Porfolio/Roots/Roots-image4.png',
  challenges:
    'The main challenge of this project was to achieve a comprehensive view of the urban cultural movement in the city of Córdoba in an audiovisual format and with a short duration, meaning in a single episode. To achieve this, it was essential to select artistic agents who represented different disciplines and showcased various approaches to this artistic movement.',
  imgChallenge1:
    'https://res.cloudinary.com/dmztjnlrp/image/upload/v1744047393/Porfolio/Roots/Roots-image5.png',
  structure1:
    'The documentary is divided into 4 main sections: introduction to the current urban art scene in Córdoba, Gata Cattana, a panel discussion, and conclusions.',
  structure2:
    'In the first section, various artists present how the current scene in Córdoba is and how they approach it from their respective disciplines. Each interviewee shares their personal experience and explains their contribution to the urban artistic movement in the city, as well as their perspective on its development.',
  structure3:
    ' The second section focuses on Gata Cattana, a prominent artist in the city. The collaboration of her mother, Ana María Llorente, director of the Gata Cattana Music-Cultural Association, is included. She talks about her daughter’s career and how she preserves her legacy through the association. Additionally, due to Gata Cattana’s connection to the development of urban art in the city, various participants had both professional and personal ties to her, and they explain what she was like and where her work originated from.',
  structure4:
    'Next, a panel discussion takes place, where artists from different disciplines are invited to debate topics related to urban art in Córdoba.',
  structure5: `The documentary concludes with brief reflections from each interviewee, where they share what they believe should be done to help the artistic movement continue growing and becoming richer. Throughout the documentary, small excerpts of each artist's work are included.`,
  imgStructure1:
    'https://res.cloudinary.com/dmztjnlrp/image/upload/v1744050457/Porfolio/Roots/Roots-image7.png',
  imgStructure2:
    'https://res.cloudinary.com/dmztjnlrp/image/upload/v1744050207/Porfolio/Roots/Roots-image8.png',
  imgStructure3:
    'https://res.cloudinary.com/dmztjnlrp/image/upload/v1744050692/Porfolio/Roots/Roots-image9.png',
  imgStructure4:
    'https://res.cloudinary.com/dmztjnlrp/image/upload/v1744050692/Porfolio/Roots/Roots-image10.png',
  locations1:
    'In this project, the chosen locations for filming the interviews play a crucial role. Although urban art originated in the United States, it has the unique characteristic of blending naturally with the nearby cultures. In this case, the different artists maintain their Andalusian roots in their work, and in fact, one of their goals is to preserve the essence of Córdoba.',
  locations2:
    'Through the locations, the Andalusian aesthetic is evoked in contrast with more modern styles, creating a rich and opportunity-filled artistic language.',
  imgLocations:
    'https://res.cloudinary.com/dmztjnlrp/image/upload/v1744052136/Porfolio/Roots/Roots-locations.png',
  imgLocations2:
    ' https://res.cloudinary.com/dmztjnlrp/image/upload/v1746642253/Porfolio/Roots/Roots-Image-Locations-Mobile.png',
  learning:
    'Regarding the learnings, the most important one for me was learning how to organize an audiovisual project across all its departments. There were only 2 days to complete the project, so a very precise schedule was needed for each interview, contact, and preparation with the interviewees, space management and booking, team transportation and accommodation, etc. In summary, this was the first project I carried out that was this comprehensive, and I learned that prior preparation is key to a good outcome. Additionally, it served as training to solve unforeseen circumstances and last-minute changes.',
  imgLearning1:
    'https://res.cloudinary.com/dmztjnlrp/image/upload/v1744054001/Porfolio/Roots/Roots-image13.png',
  imgLearning2:
    'https://res.cloudinary.com/dmztjnlrp/image/upload/v1744054001/Porfolio/Roots/Roots-image12.png',
  imgLearning3:
    'https://res.cloudinary.com/dmztjnlrp/image/upload/v1744054001/Porfolio/Roots/Roots-image11.png',
  mistakes:
    'Due to the tight recording time, the time available for setting up cameras and sound was very limited. This resulted in some shots where the sound or image quality was insufficient, and it was not possible to re-record, as this issue was detected during the post-production phase. I believe it is important to be realistic about the time needed for certain processes, and at times, it is better to complete a more specific project with higher quality rather than trying to cover more and end up with lower quality.',
  imgMistakes:
    'https://res.cloudinary.com/dmztjnlrp/image/upload/v1744132279/Porfolio/Roots/Roots-image14.jpg',
  link: 'https://drive.google.com/file/d/1vrhZ1iqjPmCqRwH7OQVXkaL_q5NouxBL/view?usp=sharing'
}
const papaoutaiDetails = [
  { icon: <FaSquare className='square-green' />, text: rootsItems.type },
  { icon: <FaSquare className='square-green' />, text: rootsItems.tools },
  {
    icon: <FaSquare className='square-green' />,
    text: rootsItems.colaboration
  }
]

const Roots = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <section id='section-roots-project' className='flex-container'>
      <Header />
      <article className='article-roots-main flex-container'>
        <div className='div-roots-main-image'>
          <img src={rootsItems.imgMain} alt={rootsItems.name} />
        </div>
        <h2>{rootsItems.name}</h2>
        <ul className='ul-roots-main flex-container'>
          {papaoutaiDetails.map((item, index) => (
            <li key={index} className='flex-container'>
              {item.icon}
              {item.text}
            </li>
          ))}
          <FaSquare className='square-green-last' />
        </ul>
      </article>
      <article className='article-roots-focus'>
        <h3>Project Focus</h3>
        <div className='div-scheme-roots'>
          <AiOutlineBranches className='big-icon-scheme-audiovisual' />
          <FaPlus className='small-icon-scheme-audiovisual' />
          <PiClockCounterClockwiseBold className='big-icon-scheme-audiovisual' />
          <FaPlus className='small-icon-scheme-audiovisual' />
          <BsCameraReelsFill className='big-icon-scheme-audiovisual-camera' />
          <FaLongArrowAltRight className='small-icon-scheme-audiovisual' />
          <GiBeanstalk className='big-icon-scheme-audiovisual' />
        </div>
        <p>{rootsItems.focus1}</p>
        <p>{rootsItems.focus2}</p>
        <div className='div-images-focus-roots flex-container'>
          <img src={rootsItems.imgFocus1} alt='Interview to María Llorente' />
          <img src={rootsItems.imgFocus2} alt='Interview to Bucaneroestilo' />
          <img src={rootsItems.imgFocus3} alt='Interview to Bucaneroestilo' />
        </div>
        <p>{rootsItems.focus3}</p>
      </article>
      <article className='article-roots-challenges flex-container'>
        <h3>Challenges</h3>
        <p>{rootsItems.challenges}</p>
        <div className='div-roots-challenges-img flex-container'>
          <img
            src={rootsItems.imgChallenge1}
            alt='Frame of Juancho interview'
          />
        </div>
      </article>
      <article className='article-roots-structure flex-container'>
        <h3>Structure</h3>
        <p>{rootsItems.structure1}</p>
        <p>{rootsItems.structure2}</p>
        <div className='div-roots-structure-img flex-container'>
          <img
            src={rootsItems.imgStructure1}
            alt='Frame of Lidya Rioboo interview '
          />
          <img
            src={rootsItems.imgStructure2}
            alt='Frame of Clasiko & Klayt interview'
          />
        </div>
        <p>{rootsItems.structure3}</p>
        <p>{rootsItems.structure4}</p>
        <div className='div-roots-structure-img flex-container'>
          <img
            src={rootsItems.imgStructure3}
            alt='Frame of Bucaneroestilo y La Sakrah interview'
          />
          <img
            src={rootsItems.imgStructure4}
            alt='Frame of Ana María Llorente interview'
          />
        </div>
      </article>
      <article className='article-roots-locations flex-container'>
        <h3>Locations</h3>
        <p>{rootsItems.locations1}</p>
        <div className='div-roots-locations-img'>
          <img src={rootsItems.imgLocations} alt='Frames of locations' />
          <img src={rootsItems.imgLocations2} alt='Frames of locations' />
        </div>
        <p>{rootsItems.locations2}</p>
      </article>
      <article className='article-roots-learning flex-container'>
        <h3>Learning</h3>
        <p>{rootsItems.learning}</p>
        <div className='div-roots-learning-img flex-container'>
          <img src={rootsItems.imgLearning1} alt='Frame Alberto Miró dancing' />
          <img
            src={rootsItems.imgLearning2}
            alt='Frame Gema Guerrero dancing'
          />
          <img src={rootsItems.imgLearning3} alt='Frame Alberto Miró dancing' />
        </div>
      </article>
      <article className='article-roots-mistakes flex-container'>
        <h3>Mistakes</h3>
        <p>{rootsItems.mistakes}</p>
        <div className='div-roots-mistakes-img flex-container'>
          <img src={rootsItems.imgMistakes} alt='Frame of the video' />
        </div>
      </article>
      <article className='article-roots-link flex-container'>
        <a href={rootsItems.link} target='_blank'>
          Take a look at the project here!
        </a>
        <BsStars className='logo-link-el-perol' />
      </article>
      <Footer />
    </section>
  )
}

export default Roots
