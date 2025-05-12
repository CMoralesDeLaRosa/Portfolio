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
    'This project focused on developing the visual identity for Cread¡Oh!, a performing arts and dance school born from the merger of two associations: Mopka and ¡Oh!PROJECT!. One of the main goals was to preserve the essence of both original brands, blending them into a new, cohesive, and recognizable identity. Additionally, it was essential to create a logo and a visual identity that represented the wide range of artistic disciplines offered by the school and resonated with its diverse target audiences.',
  imgFocus1:
    'https://res.cloudinary.com/dmztjnlrp/image/upload/v1747073722/Porfolio/Creand%C2%A1Oh%21/Creando-image1.png',
  imgFocus2:
    'https://res.cloudinary.com/dmztjnlrp/image/upload/v1747074499/Porfolio/Creand%C2%A1Oh%21/CreandOh-image2.jpg',
  imgFocus3:
    'https://res.cloudinary.com/dmztjnlrp/image/upload/v1747074997/Porfolio/Creand%C2%A1Oh%21/CreandOh-image3.jpg',
  challenges1:
    "One of the main challenges was merging both logos while preserving the essence of each and conveying that the space represented both projects. Another key difficulty was creating a visual identity that could encompass a wide range of activities, from children's workshops to Hip Hop battle events.",
  challenges2:
    'In addition to the logo design, it was essential to maintain a coherent visual identity across all elements related to the school. This included not only the interior design of the space but also the advertising materials and signage. The goal was to create a unified visual identity that connected all aspects of the project, while being flexible enough to adapt to different activities and styles without losing its essence.',
  imgChallenge1:
    'https://res.cloudinary.com/dmztjnlrp/image/upload/v1747076451/Porfolio/Creand%C2%A1Oh%21/Creando-image4.png',
  imgChallenge2:
    'https://res.cloudinary.com/dmztjnlrp/image/upload/v1746554260/Porfolio/El%20Perol/El-Perol-Scheme-Mobile.png',
  process1:
    'To achieve a unified design, I first selected the most representative elements from each visual identity: the isotypes. From there, I chose a standard yet fluid typeface that reflected the artistic nature of the project. Finally, I retained the original colors —purple and yellow— in subtle accents, providing visual continuity while allowing greater flexibility for the new logo.',
  imgProcess1:
    'https://res.cloudinary.com/dmztjnlrp/image/upload/v1739473271/Porfolio/El%20Perol/El-perol-scheme.png',
  process2:
    'Next, I developed the backend: the recipe database, the types of users I wanted to have, how they would interact, and what actions they could perform based on their user type. This way, I created the project’s framework. There would be three types of users: unregistered users, registered users with a basic account, and registered users with a professional account. Each type would have access to specific information and varying levels of customization. I placed significant emphasis on the admin functions and the content validation tasks. The user flows had to be clear and ensure a functional connection between the different database models. ',
  imgProcess2:
    'https://res.cloudinary.com/dmztjnlrp/image/upload/v1741456600/Porfolio/El%20Perol/ElPerol-image5.png',
  imgProcess3:
    'https://res.cloudinary.com/dmztjnlrp/image/upload/v1746554839/Porfolio/El%20Perol/El-Perol-Scheme-2-Mobile.png',
  learning:
    'For me, the biggest lesson from this project has been managing to contribute something new to such a well-defined type of website, and ensuring that these innovations are based on real improvements. At first, it was a big challenge to come up with an idea that would add value and be useful to this type of website, but thanks to the research work, I was able to clearly identify the available improvements. Therefore, I consider the preliminary research work to be essential.',
  mistakes:
    "Regarding the mistakes, I believe I should have spent more time defining the workflows within the website. Initially, I had a general idea in place, and as the project progressed, I made some modifications that led to changes in both the backend and frontend simultaneously, resulting in slower progress. It is crucial to have all workflows defined and finalized before starting development, even if it's an individual project.",
  imgLearning:
    'https://res.cloudinary.com/dmztjnlrp/image/upload/v1739820184/Porfolio/El%20Perol/El-perol-learning-image.png',
  imgLearning2:
    'https://res.cloudinary.com/dmztjnlrp/image/upload/v1746555426/Porfolio/El%20Perol/El-Perol-image10.png',
  link: 'https://el-perol-finisher-react-idps.vercel.app'
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
          <div>
            <img
              src={creandOhItems.imgFocus2}
              alt='Cristina Masson in the opening of Creand¡Oh!'
            />
          </div>
          <div>
            <img src={creandOhItems.imgFocus3} alt='Web site El Perol' />
          </div>
        </div>
      </article>
      <article className='article-creandoh-challenges flex-container'>
        <h3>Challenges</h3>
        <p>{creandOhItems.challenges1}</p>
        <div className='div-creandoh-challenges-img1'>
          <img src={creandOhItems.imgChallenge1} />
          <p>{creandOhItems.challenges2}</p>
        </div>
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
      <article className='article-creandoh-admin flex-container'>
        <h3>Admin role</h3>
        <p>{creandOhItems.adminRole}</p>
        <div className='div-creandoh-admin-images flex-container'>
          <img src={creandOhItems.imgAdmin1} alt='Admin users validation' />
          <img src={creandOhItems.imgAdmin2} alt='Admin recipes validation' />
          <img
            src={creandOhItems.imgAdmin3}
            alt='Recipes not validated in user profile'
          />
        </div>
      </article>
      <article className='article-creandoh-learning flex-container'>
        <h3>Learning and mistakes</h3>
        <img src={creandOhItems.imgLearning} />
        <img src={creandOhItems.imgLearning2} />
        <p>{creandOhItems.learning}</p>
        <p>{creandOhItems.mistakes}</p>
      </article>
      <article className='article-creandoh-link flex-container'>
        <a href={creandOhItems.link} target='_blank'>
          Ready to explore the project?
        </a>
        <AiOutlineGift className='logo-link-creandoh' />
      </article>
      <Footer />
    </section>
  )
}

export default CreandOh
