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
    'https://res.cloudinary.com/dmztjnlrp/image/upload/v1744047855/Porfolio/Roots/Roots-image6.png',
  imgChallenge2:
    'https://res.cloudinary.com/dmztjnlrp/image/upload/v1744047393/Porfolio/Roots/Roots-image5.png',

  camera:
    'Except for some movements and positions defined in the shot list, there are no overly strict camera plans. Instead, the camera zone, movement direction, and main axes will be defined. It is important to maintain a clear reference to the center of the choreographic positions. With these camera movements, wide, medium, and close-up shots will be captured, along with the indications outlined in the shot list.',
  imgCamera1:
    'https://res.cloudinary.com/dmztjnlrp/image/upload/v1743615449/Porfolio/Papaoutai/Papaoutai-camera-scheme.png',
  imgCamera2:
    'https://res.cloudinary.com/dmztjnlrp/image/upload/v1742846332/Porfolio/Papaoutai/Papaoutai-image7.png',
  colorGrading:
    'The idea was to reference the look of the original music video, creating a visual nod to the piece. A primary color correction was performed by adjusting highlights, shadows, and midtones to achieve the widest possible range. Contrast and saturation were fine-tuned, and the overall color balance was adjusted. In the secondary correction, the most intense green tones were neutralized. Finally, the look was refined using a still from the original music video and adapting it to match the tones and intensities present in our footage.',
  imgColorGrading1:
    'https://res.cloudinary.com/dmztjnlrp/image/upload/v1742930048/Porfolio/Papaoutai/Papaoutai-image8.png',
  imgColorGrading2:
    'https://res.cloudinary.com/dmztjnlrp/image/upload/v1742930119/Porfolio/Papaoutai/Papaoutai-image9.png',
  imgColorGrading3:
    'https://res.cloudinary.com/dmztjnlrp/image/upload/v1742931164/Porfolio/Papaoutai/Papoutai-color-grading.png',
  learning:
    'The limitations in terms of space, budget, and equipment pushed me to put extra effort into the pre-production phase to achieve the level of quality I aimed for. This experience gave me a deeper understanding of the importance of pre-shooting tasks and how essential communication between different departments is.',
  imgLearning1:
    'https://res.cloudinary.com/dmztjnlrp/image/upload/v1742931682/Porfolio/Papaoutai/Papoutai-image10.png',
  imgLearning2:
    'https://res.cloudinary.com/dmztjnlrp/image/upload/v1742931682/Porfolio/Papaoutai/Papaoutai-image11.png',
  mistakes:
    'Regarding mistakes, I did not take into account certain colors present at the filming location. Since it was a sports complex, there were some highly vibrant elements that made the color grading process more challenging. I had to isolate these elements to reduce their saturation and intensity without affecting the rest of the image. I believe that in a longer project, this issue could have significantly delayed the editing process. This could have been avoided by conducting test shots beforehand to determine whether the location was suitable.',
  imgMistakes:
    'https://res.cloudinary.com/dmztjnlrp/image/upload/v1742932468/Porfolio/Papaoutai/Papaoutai-image12.png',
  link: 'https://www.youtube.com/watch?v=918lYUKCCzA'
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
          <img src={rootsItems.imgChallenge1} alt='Frame of interview' />
          <img src={rootsItems.imgChallenge2} alt='Frame of interview' />
        </div>
      </article>
      <article className='article-papaoutai-camera flex-container'>
        <h3>Camera</h3>
        <p>{rootsItems.camera}</p>
        <div className='div-papaoutai-camera-img flex-container'>
          <img src={rootsItems.imgCamera1} alt='Schemes of camera' />
          <img src={rootsItems.imgCamera2} alt='Frame of the video' />
        </div>
      </article>
      <article className='article-papaoutai-color-grading flex-container'>
        <h3>Color Grading</h3>
        <p>{rootsItems.colorGrading}</p>
        <div className='div-papaoutai-color-grading-img1 flex-container'>
          <img
            src={rootsItems.imgColorGrading1}
            alt='Frame of the original video'
          />
          <img
            src={rootsItems.imgColorGrading2}
            alt='Frame of the original video'
          />
        </div>
        <div className='div-papaoutai-color-grading-img2 flex-container'>
          <img
            src={rootsItems.imgColorGrading3}
            alt='Examples of color grading'
          />
        </div>
      </article>
      <article className='article-papaoutai-learning flex-container'>
        <h3>Learning</h3>
        <p>{rootsItems.learning}</p>
        <div className='div-papaoutai-learning-img flex-container'>
          <img src={rootsItems.imgLearning1} alt='Image of making off' />
          <img src={rootsItems.imgLearning2} alt='Image of making off' />
        </div>
      </article>
      <article className='article-papaoutai-mistakes flex-container'>
        <h3>Mistakes</h3>
        <p>{rootsItems.mistakes}</p>
        <div className='div-papaoutai-mistakes-img flex-container'>
          <img src={rootsItems.imgMistakes} alt='Frame of the video' />
        </div>
      </article>
      <article className='article-el-perol-link flex-container'>
        <a href={rootsItems.link} target='_blank'>
          Want to check it out?
        </a>
        <BsStars className='logo-link-el-perol' />
      </article>
      <Footer />
    </section>
  )
}

export default Roots
