import Header from '../../../../components/header/header'
import './ElPerol.css'
import { FaSquare } from 'react-icons/fa6'
import { IoBulb } from 'react-icons/io5'
import { FaPlus } from 'react-icons/fa'
import { TbExchange } from 'react-icons/tb'
import { BsPersonArmsUp } from 'react-icons/bs'
import { FaLongArrowAltRight } from 'react-icons/fa'
import { AiFillThunderbolt } from 'react-icons/ai'

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
    'One of the most significant challenges was managing the database information dynamically while ensuring that the web`s visual structure remained consistent. It was crucial to maintain precise control over margins, proportions, and content containers, so that despite allowing users the flexibility to add content, the aesthetics and layout of the interface were not compromised.',
  imgChallenge1:
    'https://res.cloudinary.com/dmztjnlrp/image/upload/v1738867617/Porfolio/El%20Perol/ElPerol-image4.png',
  process1:
    'First, I conducted research where I explored the most visited recipe websites, identifying what information they displayed, how they presented it, and what the user interaction and experience were like. My conclusion was that these websites are very clear and intuitive, but in terms of design, they are quite similar to basic blogs, offering a user experience that feels underdeveloped. They primarily focus on functionality. This is where I find the opportunity to provide a different approach that would set El Perol apart from other recipe websites. Later, I expanded my research to include projects and websites with more innovative designs focused on gastronomy in general—restaurants, food product websites, food magazines, and others. I wanted to understand how other designers presented food and what their unique proposals were. With these two approaches in mind, I began to build my concept.',
  imgProcess1:
    'https://res.cloudinary.com/dmztjnlrp/image/upload/v1739473271/Porfolio/El%20Perol/El-perol-scheme.png',
  process2:
    'Next, I developed the backend: the recipe database, the types of users I wanted to have, how they would interact, and what actions they could perform based on their user type. This way, I created the project’s framework. There would be three types of users: unregistered users, registered users with a basic account, and registered users with a professional account. Each type would have access to specific information and varying levels of customization. I placed significant emphasis on the admin functions and the content validation tasks. The user flows had to be clear and ensure a functional connection between the different database models. ',
  imgProcess2:
    'https://res.cloudinary.com/dmztjnlrp/image/upload/v1739393373/Porfolio/El%20Perol/ElPerol-image5.png',
  process3:
    'With the backend developed and the main design and user experience ideas in place, I began shaping the project visually through the frontend. I used React, as I felt it offered the flexibility I needed for this type of project, along with the styling flexibility CSS provides. Since it was an individual project, this final phase gave me the space to make some adjustments and, most importantly, to incorporate additional ideas.'
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
          <IoBulb className='big-icon-scheme-el-perol' />
          <FaPlus className='small-icon-scheme-el-perol' />
          <TbExchange className='big-icon-scheme-el-perol' />
          <FaPlus className='small-icon-scheme-el-perol' />
          <BsPersonArmsUp className='big-icon-scheme-el-perol' />
          <FaLongArrowAltRight className='small-icon-scheme-el-perol' />
          <AiFillThunderbolt className='big-icon-scheme-el-perol' />
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
    </section>
  )
}

export default ElPerol
