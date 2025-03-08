import Header from '../../../../components/header/header'
import './ElPerol.css'
import { FaSquare } from 'react-icons/fa6'
import { IoBulb } from 'react-icons/io5'
import { FaPlus, FaLongArrowAltRight } from 'react-icons/fa'
import { TbExchange } from 'react-icons/tb'
import { BsPersonArmsUp } from 'react-icons/bs'
import { AiFillThunderbolt } from 'react-icons/ai'
import { AiOutlineGift } from 'react-icons/ai'
import Footer from '../../../../components/footer/footer'

const elPerolItems = {
  name: 'El Perol',
  imgMain:
    'https://res.cloudinary.com/dmztjnlrp/image/upload/v1738352580/Porfolio/El%20Perol/El-perol-main-image.png',
  type: 'Web site - Backend and Frontend',
  tools: 'React - Css - Node.js',
  colaboration: 'Individual - Bootcamp Rock the Code',
  focus:
    'The main objective of this project was to develop an interactive web application focused on traditional Spanish cuisine recipes. User experience was key, so functionalities were integrated to allow dynamic and personalized interaction with the content. In addition, the platform aimed to stand out from other recipe websites by implementing an innovative and appealing design, aimed at capturing and maintaining the interest of the target audience. The combination of usability, aesthetics, and functionality was essential to provide a unique and engaging experience.',
  imgFocus1:
    'https://res.cloudinary.com/dmztjnlrp/image/upload/v1738695178/Porfolio/El%20Perol/Elperol-image2.png',
  imgFocus2:
    'https://res.cloudinary.com/dmztjnlrp/image/upload/v1738697207/Porfolio/El%20Perol/ElPerol-image3.png',
  challenges:
    "One of the most significant challenges was managing the database information dynamically while ensuring that the web's visual structure remained consistent. It was crucial to maintain precise control over margins, proportions, and content containers, so that despite allowing users the flexibility to add content, the aesthetics and layout of the interface were not compromised.",
  imgChallenge1:
    'https://res.cloudinary.com/dmztjnlrp/image/upload/v1741457309/Porfolio/El%20Perol/ElPerol-image4.png',
  process1:
    'First, I conducted research where I explored the most visited recipe websites, identifying what information they displayed, how they presented it, and what the user interaction and experience were like. My conclusion was that these websites are very clear and intuitive, but in terms of design, they are quite similar to basic blogs, offering a user experience that feels underdeveloped. They primarily focus on functionality. This is where I find the opportunity to provide a different approach that would set El Perol apart from other recipe websites. Later, I expanded my research to include projects and websites with more innovative designs focused on gastronomy in general—restaurants, food product websites, food magazines, and others. I wanted to understand how other designers presented food and what their unique proposals were. With these two approaches in mind, I began to build my concept.',
  imgProcess1:
    'https://res.cloudinary.com/dmztjnlrp/image/upload/v1739473271/Porfolio/El%20Perol/El-perol-scheme.png',
  process2:
    'Next, I developed the backend: the recipe database, the types of users I wanted to have, how they would interact, and what actions they could perform based on their user type. This way, I created the project’s framework. There would be three types of users: unregistered users, registered users with a basic account, and registered users with a professional account. Each type would have access to specific information and varying levels of customization. I placed significant emphasis on the admin functions and the content validation tasks. The user flows had to be clear and ensure a functional connection between the different database models. ',
  imgProcess2:
    'https://res.cloudinary.com/dmztjnlrp/image/upload/v1741456600/Porfolio/El%20Perol/ElPerol-image5.png',
  process3:
    'With the backend developed and the main design and user experience ideas in place, I began shaping the project visually through the frontend. I used React, as I felt it offered the flexibility I needed for this type of project, along with the styling flexibility CSS provides. Since it was an individual project, this final phase gave me the space to make some adjustments and, most importantly, to incorporate additional ideas.',
  adminRole:
    "The role of administrator has been fundamental in the development of the project. Recipe posts must be validated before being published by the administrator to maintain the quality of the content. Restaurant accounts also go through the same verification process to prevent fake accounts and ensure the website's credibility. Additionally, the administrator role has functions that allow them to delete accounts and recipes. Therefore, a section has been created to host all these administrative functions, with the same design as the rest of the website, providing a user-friendly and simple experience.",
  imgAdmin1:
    'https://res.cloudinary.com/dmztjnlrp/image/upload/v1739819188/Porfolio/El%20Perol/El-perol-admin1.png',
  imgAdmin2:
    'https://res.cloudinary.com/dmztjnlrp/image/upload/v1739819188/Porfolio/El%20Perol/El-perol-admin2.png',
  imgAdmin3:
    'https://res.cloudinary.com/dmztjnlrp/image/upload/v1739819189/Porfolio/El%20Perol/El-perol-admin4.png',
  learning:
    'For me, the biggest lesson from this project has been managing to contribute something new to such a well-defined type of website, and ensuring that these innovations are based on real improvements. At first, it was a big challenge to come up with an idea that would add value and be useful to this type of website, but thanks to the research work, I was able to clearly identify the available improvements. Therefore, I consider the preliminary research work to be essential.',
  mistakes:
    "Regarding the mistakes, I believe I should have spent more time defining the workflows within the website. Initially, I had a general idea in place, and as the project progressed, I made some modifications that led to changes in both the backend and frontend simultaneously, resulting in slower progress. It is crucial to have all workflows defined and finalized before starting development, even if it's an individual project.",
  imgLearning:
    'https://res.cloudinary.com/dmztjnlrp/image/upload/v1739820184/Porfolio/El%20Perol/El-perol-learning-image.png',
  link: 'https://el-perol-finisher-react-idps.vercel.app'
}
const elPerolDetails = [
  { icon: <FaSquare className='square-green' />, text: elPerolItems.type },
  { icon: <FaSquare className='square-green' />, text: elPerolItems.tools },
  {
    icon: <FaSquare className='square-green' />,
    text: elPerolItems.colaboration
  }
]
const ElPerol = () => {
  return (
    <section id='section-el-perol-project' className='flex-container'>
      <Header />
      <article className='article-el-perol-main flex-container'>
        <div className='div-el-perol-main-image'>
          <img src={elPerolItems.imgMain} alt={elPerolItems.name} />
        </div>
        <h2>{elPerolItems.name}</h2>
        <ul className='ul-el-perol-main flex-container'>
          {elPerolDetails.map((item, index) => (
            <li key={index} className='flex-container'>
              {item.icon}
              {item.text}
            </li>
          ))}
          <FaSquare className='square-green-last' />
        </ul>
      </article>
      <article className='article-el-perol-focus'>
        <h3>Project Focus</h3>
        <div className='div-scheme-el-perol'>
          <IoBulb className='big-icon-scheme-web-design' />
          <FaPlus className='small-icon-scheme-web-design' />
          <TbExchange className='big-icon-scheme-web-design' />
          <FaPlus className='small-icon-scheme-web-design' />
          <BsPersonArmsUp className='big-icon-scheme-web-design' />
          <FaLongArrowAltRight className='small-icon-scheme-web-design' />
          <AiFillThunderbolt className='big-icon-scheme-web-design' />
        </div>
        <p>{elPerolItems.focus}</p>
        <div className='div-images-focus-el-perol flex-container'>
          <div>
            <img src={elPerolItems.imgFocus1} alt='Web site El Perol' />
          </div>
          <div>
            <img src={elPerolItems.imgFocus2} alt='Web site El Perol' />
          </div>
        </div>
      </article>
      <article className='article-el-perol-challenges flex-container'>
        <h3>Challenges</h3>
        <p>{elPerolItems.challenges}</p>
        <div className='div-el-perol-challenges-img'>
          <img src={elPerolItems.imgChallenge1} />
        </div>
      </article>
      <article className='article-el-perol-process flex-container'>
        <h3>Project Process</h3>
        <p>{elPerolItems.process1}</p>
        <div className='div-el-perol-process-img1'>
          <img src={elPerolItems.imgProcess1} alt='Register part' />
        </div>
        <p>{elPerolItems.process2}</p>
        <div className='div-el-perol-process-img2'>
          <img src={elPerolItems.imgProcess2} alt='Register part' />
        </div>
        <p>{elPerolItems.process3}</p>
      </article>
      <article className='article-el-perol-admin flex-container'>
        <h3>Admin role</h3>
        <p>{elPerolItems.adminRole}</p>
        <div className='div-el-perol-admin-images flex-container'>
          <img src={elPerolItems.imgAdmin1} alt='Admin users validation' />
          <img src={elPerolItems.imgAdmin2} alt='Admin recipes validation' />
          <img
            src={elPerolItems.imgAdmin3}
            alt='Recipes not validated in user profile'
          />
        </div>
      </article>
      <article className='article-el-perol-learning flex-container'>
        <h3>Learning and mistakes</h3>
        <img src={elPerolItems.imgLearning} />
        <p>{elPerolItems.learning}</p>
        <p>{elPerolItems.mistakes}</p>
      </article>
      <article className='article-el-perol-link flex-container'>
        <a href={elPerolItems.link} target='_blank'>
          Ready to explore the project?
        </a>
        <AiOutlineGift className='logo-link-el-perol' />
      </article>
      <Footer />
    </section>
  )
}

export default ElPerol
