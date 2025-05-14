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
  type: 'Urban art project',
  tools: 'Adobe Illustrator - Adobe Photoshop',
  colaboration: 'Freelance',
  focus:
    'Mopka is a platform focused on improving urban spaces by using visual arts as a tool and involving citizens directly in projects carried out in their neighborhoods or cities. We advocate for the renewal of cities and their adaptation to the evolving needs of human beings. We believe that transforming the city must go hand in hand with the transformation of the individuals who inhabit it and visual arts is the perfect tool to achive this goal.',
  imgFocus1:
    'https://res.cloudinary.com/dmztjnlrp/image/upload/v1747074499/Porfolio/Creand%C2%A1Oh%21/CreandOh-image2.jpg',
  imgFocus2:
    'https://res.cloudinary.com/dmztjnlrp/image/upload/v1747074997/Porfolio/Creand%C2%A1Oh%21/CreandOh-image3.jpg',
  goals1:
    "We believe that art needs a place within the urban spaces. That is why we support the presence of different art forms in public spaces, as they are often confined to venues that can be difficult to access—sometimes for economic reasons. Art should have greater visibility in the streets, encouraging both artistic creation and the public's engagement with cultural and artistic expression.",
  goals2:
    'We advocate for a reflection on these urban spaces and the implementation of changes and actions aimed at improving them. Citizens should take part in the project projects. In doing so, we promote a sense of responsibility toward our surroundings—public spaces, buildings, the environment, and more—by allowing individuals to share their perspectives based on their lived experiences in or near those places, to participate in decision-making, and to contribute to the execution of the project. In this way, we build a civic network dedicated to enhancing the quality of urban life through the involvement of its residents—fostering individual purpose that extends toward collective benefit.',
  imgGoals1:
    'https://res.cloudinary.com/dmztjnlrp/image/upload/v1747158341/Porfolio/Creand%C2%A1Oh%21/Creando-image4.png',
  imgGoals2:
    'https://res.cloudinary.com/dmztjnlrp/image/upload/v1747156028/Porfolio/Creand%C2%A1Oh%21/CreandOh-image5.jpg',
  projects1:
    'Various initiatives have been carried out in public schools such as Ciudad del Aire School, Hemingway School, and the semi-private Minerva School in Alcalá de Henares. These projects involved the collaboration of students, families, and teaching staff to implement on-site actions through both theoretical and practical workshops.',
  projects2:
    'As a result of these initiatives, the #WeAreSchool project was developed, aimed specifically at educational institutions. #WeAreSchool is a school support program that includes a range of activities applying the Mopka methodology, which is based on addressing the challenges that 21st-century education faces.',
  projects3:
    'Urban art workshops for teenagers have also been held at IES Atenea in Alcalá de Henares, IES Lázaro Carreter, and Las Naves - Salesianos in Alcalá de Henares. Several murals have been created across the city in collaboration with the Alcalá de Henares City Council, the Espartales Norte Neighborhood Association, the Ciudad del Val Sports Center, the organization Otra Forma de Moverte, the University of Alcalá, and the CAIF Family Support Center, among others.',
  imgProjects1:
    'https://res.cloudinary.com/dmztjnlrp/image/upload/v1747073722/Porfolio/Creand%C2%A1Oh%21/Creando-image1.png',
  method1:
    'Regarding the methodology, the participation and integration of the attendees in the project was a key element. The projects began with the selection of the space by the organization, followed by an analysis of the site—both to design the mural and to plan the workshop.Depending on the audience and the number of sessions available prior to the mural execution, the level of participation in the design projects varied. In some cases, participants were fully involved, with only the theme provided as a starting point. In other instances, a pre-designed layout was presented, and attendees contributed by choosing and applying the colors.',
  method2:
    'This closer, collaborative design projects often led to discussions around the proposed themes, creating valuable spaces for dialogue and reflection.',
  method3:
    'When it came to executing the design, the participation of the attendees was always complete. They were encouraged to organize their work, plan how they would carry it out, and manage their time, always with someone to guide them. This approach gave each individual a sense of ownership and involvement in the project, leading to a profound transformation of the space—not just in a physical sense but also emotionally.',
  learning1:
    'I consider this to be one of the projects where I have learned the most. From a graphic design perspective, I developed skills in adaptability to different materials, spaces, and concepts, learning how to create designs that are accessible for everyone while ensuring an optimal final result. Additionally, I gained flexibility when dealing with unexpected challenges and working in outdoor spaces, which are often more complex and subject to harsher conditions.',
  learning2:
    'On the other hand, seeing how people react when given the opportunity to transform a space in their city, school, or neighborhood has been an enriching experience. The level of engagement achieved, regardless of age or background, has deeply impressed me. In every project, the unity and collaboration established at the completion of the work were remarkable—something I have rarely seen in other contexts. Egos were set aside, and all participants shared the same goal: ensuring the mural turned out as best as possible. This was further reinforced by the ongoing care of the space, as participants felt it was their creation and did not want it to be damaged.',
  mistakes:
    'Regarding mistakes, I believe that in some projects, the development time was insufficient. Some spaces were quite large, making it difficult to complete them within the allotted workshop time, and in other cases, the sessions leading up to the mural creation were too brief. This resulted in an overload for the organizing team, a problem that could have been avoided with better planning of the necessary time.',
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
      <article className='article-mopka-goals flex-container'>
        <h3>Goals</h3>
        <p>{mopkaItems.goals1}</p>
        <p>{mopkaItems.goals2}</p>
        <div className='div-mopka-goals-img1'>
          <img src={mopkaItems.imgGoals1} alt="Poster's examples" />
          <img src={mopkaItems.imgGoals2} alt="Poster's examples" />
        </div>
      </article>
      <article className='article-mopka-projects flex-container'>
        <h3>Projects</h3>
        <p>{mopkaItems.projects1}</p>
        <div className='div-mopka-projects-img1'>
          <img
            src={mopkaItems.imgProjects1}
            alt='Scheme of the projects of th design'
          />
        </div>
        <p>{mopkaItems.projects2}</p>
        <p>{mopkaItems.projects3}</p>
      </article>
      <article className='article-mopka-method flex-container'>
        <h3>Method</h3>
        <p>{mopkaItems.method1}</p>
        <p>{mopkaItems.method2}</p>
        <p>{mopkaItems.method3}</p>
      </article>
      <article className='article-mopka-learning flex-container'>
        <h3>Learning and mistakes</h3>
        <p>{mopkaItems.learning1}</p>
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
