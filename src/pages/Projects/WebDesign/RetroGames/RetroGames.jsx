import Header from '../../../../components/header/header'
import './RetroGames.css'
import { FaSquare, FaGamepad, FaGears } from 'react-icons/fa6'
import { FaPlus, FaLongArrowAltRight } from 'react-icons/fa'
import { MdFluorescent } from 'react-icons/md'
import { TbMoodCrazyHappyFilled } from 'react-icons/tb'

const retroGamesItems = {
  name: 'Retro Games',
  imgMain:
    'https://res.cloudinary.com/dmztjnlrp/image/upload/v1741167833/Porfolio/Retro%20Games/Retro-games-main-image.png',
  type: 'React project - games',
  tools: 'React - Css',
  colaboration: 'Individual - Bootcamp Rock the Code',
  focus:
    'The goal of this project was to create a website with two games using React. It was essential to avoid unnecessary re-renders while developing clear and scalable code. The website needed to support internal navigation across multiple routes, and the styling was open to creativity.',
  imgFocus1:
    'https://res.cloudinary.com/dmztjnlrp/image/upload/v1741170334/Porfolio/Retro%20Games/Retro-games-image-1.png',
  imgFocus2:
    'https://res.cloudinary.com/dmztjnlrp/image/upload/v1741170334/Porfolio/Retro%20Games/Retro-games-image-2.png',
  challenges:
    'One of the major challenges was avoiding unnecessary re-renders. Each game consisted of different components, some of which needed to be updated as the game progressed to ensure a constant refresh. However, others did not need to be re-rendered since their content remained unchanged. For this reason, it was essential to properly define the components and their respective functions.',
  imgChallenge1:
    'https://res.cloudinary.com/dmztjnlrp/image/upload/v1741081206/Porfolio/Pokemon%20Cards/Pokemon-cards-image-2.png',
  imgChallenge2:
    'https://res.cloudinary.com/dmztjnlrp/image/upload/v1741081674/Porfolio/Pokemon%20Cards/Pokemon-cards-image-3.png',
  imgChallenge3:
    'https://res.cloudinary.com/dmztjnlrp/image/upload/v1741081733/Porfolio/Pokemon%20Cards/Pokemon-cards-image-4.png',
  process1:
    'Los juegos elegidos fueron el Bingo y el Tres en Raya. El primer proceso fue definir cómo iban a desarrollar ambos juegos teniendo en cuenta la funcionalidad que debían tener, en especial el Tres en Raya ya que juegas contra otro jugador. Finalmente para ambos me decanté por exponer un conjunto de variables posible y que el juego las utilizara de manera aleatoria. De esa manera da la sensación de jugar contra un contrincante aunque no sea del todo así.',
  imgProcess1:
    'https://res.cloudinary.com/dmztjnlrp/image/upload/v1741084357/Porfolio/Pokemon%20Cards/Pokemon-cards-image-5.png',
  imgProcess2:
    'https://res.cloudinary.com/dmztjnlrp/image/upload/v1741084351/Porfolio/Pokemon%20Cards/Pokemon-cards-image-6.png',
  imgProcess3:
    'https://res.cloudinary.com/dmztjnlrp/image/upload/v1741084351/Porfolio/Pokemon%20Cards/Pokemon-cards-image-7.png',
  process2:
    'El siguiente paso fue definir los componentes y dividir las funcionalidades de cada uno. Ya que cada juego debía dar una respuesta ante la acción del jugador, debía tener componentes en una escucha constante pero evitar que los que no eran necesarios no se re-renderizaran constantemente.',
  imgProcess4:
    'https://res.cloudinary.com/dmztjnlrp/image/upload/v1741083595/Porfolio/Pokemon%20Cards/Pokemon-cards-scheme.png',
  process3:
    'Una vez, la parte funcional del proyecto estaba definidida me centré en el diseño. Decidí insipirarme en un diseño neón, haciendo referencia a los recreativos que solían estar inundados de carteles neón y las propias máquinas también tenían ese tipo de luz y colores.',
  extraRoots:
    'As an extra touch, I wanted to pay special attention to the user experience. Although it was an informational site with no complex interactions, I thought it was important for the user to enjoy some simple interactivity. I implemented a small game on the homepage: when the user clicks on the Pokéball, Pokémon randomly appear across the screen. Additionally, hover effects on the cards change the shadows of the containers, and clicking on each Pokémon allows the user to rotate its image. These small details make the site more enjoyable and spark user curiosity to discover more.',
  gameVideo:
    'https://res.cloudinary.com/dmztjnlrp/video/upload/v1741088371/Porfolio/Pokemon%20Cards/Pokemon-cards-game-video.mov',

  learning:
    'A valuable lesson I learned from this project was how to reinterpret such a popular and recurring image like Pokémon without falling into clichés or repetitive styles. It was a challenge to add my personal touch to such a well-known theme, but I succeeded in giving the project a unique flavor. Additionally, this process allowed me to deepen my understanding of React, especially in terms of componentization and managing re-renders.',
  mistakes:
    'Regarding mistakes, one of the biggest obstacles I faced was handling re-renders at the start of the project. I didn’t pay enough attention to how to organize the components, which forced me to make numerous adjustments throughout the development to avoid unnecessary re-renders. My initial lack of experience in efficiently managing components led to a flawed project approach, which I had to correct during the development process.',
  link: 'https://react-basics-beryl-one.vercel.app'
}
const retroGamesDetails = [
  { icon: <FaSquare className='square-green' />, text: retroGamesItems.type },
  {
    icon: <FaSquare className='square-green' />,
    text: retroGamesItems.tools
  },
  {
    icon: <FaSquare className='square-green' />,
    text: retroGamesItems.colaboration
  }
]

const RetroGames = () => {
  return (
    <section id='section-retro-games-project' className='flex-container'>
      <Header />
      <article className='article-retro-games-main flex-container'>
        <div className='div-retro-games-main-image'>
          <img src={retroGamesItems.imgMain} alt={retroGamesItems.name} />
        </div>
        <h2>{retroGamesItems.name}</h2>
        <ul className='ul-retro-games-main flex-container'>
          {retroGamesDetails.map((item, index) => (
            <li key={index} className='flex-container'>
              {item.icon}
              {item.text}
            </li>
          ))}
          <FaSquare className='square-green-last' />
        </ul>
      </article>
      <article className='article-retro-games-focus'>
        <h3>Project Focus</h3>
        <div className='div-scheme-retro-games'>
          <FaGamepad className='big-icon-scheme-web-design' />
          <FaPlus className='small-icon-scheme-web-design' />
          <FaGears className='big-icon-scheme-web-design' />
          <FaPlus className='small-icon-scheme-web-design' />
          <MdFluorescent className='big-icon-scheme-web-design' />
          <FaLongArrowAltRight className='small-icon-scheme-web-design' />
          <TbMoodCrazyHappyFilled className='big-icon-scheme-web-design' />
        </div>
        <p>{retroGamesItems.focus}</p>
        <div className='div-images-focus-retro-games flex-container'>
          <img src={retroGamesItems.imgFocus1} alt='Bingo' />
          <img src={retroGamesItems.imgFocus2} alt='Tres en raya' />
        </div>
      </article>
      <article className='article-retro-games-challenges flex-container'>
        <h3>Challenges</h3>
        <p>{retroGamesItems.challenges}</p>
        <div className='div-retro-games-challenges-img flex-container'>
          <div>
            <img
              src={retroGamesItems.imgChallenge1}
              alt='Website color palette'
            />
          </div>
          <div className='flex-container'>
            <img
              src={retroGamesItems.imgChallenge2}
              alt='Main page - Selection hover'
            />
            <img
              src={retroGamesItems.imgChallenge3}
              alt='About part of the website'
            />
          </div>
        </div>
      </article>
    </section>
  )
}

export default RetroGames
