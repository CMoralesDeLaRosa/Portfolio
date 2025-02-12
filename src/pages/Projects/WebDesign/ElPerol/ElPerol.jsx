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
  process:
    'En primer lugar, realicé un trabajo de investigación en el que busqué las web de recetas más visitas e identifiqué qué información mostraban, cómo la mostraban y cómo era la interacción del usuario. Son páginas muy claras e intuitivas pero a nivel diseño son muy similares a los blocs. Buscan fundamentalmente la funcionalidad. Ahí fue donde encontré el hueco para darle una vuelta a este tipo de webs. Después, hice una investigación en proyectos y webs con un diseño más innovador enfocados a la gastronomía en general. Restaurantes, webs de productos alimenticios, revistas de comida, entre otros. Quería saber cómo otros diseñadores mostraban la comida, cuál era su propuesta. Y con esos dos enfoques empecé a construir el mio propio. A continuación desarrollé la parte backend: la base de datos de las recetas, qué usuarios quería tener, cómo iban a interactuar, qué acciones podían hacer en función del tipo de usuario. De esta forma creé el esqueleto de proyecto. Tendría 3 tipos de usuarios: usuario no registrado, usuario registrado en una cuenta básico y usuario registrado en una cuenta profesional. Cada uno tiene acceso a una información y a un grado de personalización diferente. Le di mucha importancia a las funciones de admin y las tareas de validación de contenido. Me centré en un diseño claro.Por último comencé a darle forma a nivel visual con la parte frontend. Utilicé React, porque consideré que me daba bastante flexibilidad para el tipo de proyecto que estaba realizando y para el estilo CSS. Al ser un proyecto individual, en esta última fase tuve espacio para algunos cambios y sobre todo para añadir alguna idea extra.'
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
        <p>{elPerolItems.process}</p>
      </article>
    </section>
  )
}

export default ElPerol
