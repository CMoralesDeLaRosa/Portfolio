import Header from '../../../../components/header/header'
import './RetroGames.css'
import { FaSquare, FaGamepad, FaGears } from 'react-icons/fa6'
import { FaPlus, FaLongArrowAltRight } from 'react-icons/fa'
import { MdFluorescent } from 'react-icons/md'
import { TbMoodCrazyHappyFilled } from 'react-icons/tb'
import Footer from '../../../../components/Footer/Footer'
import { BiSolidParty } from 'react-icons/bi'

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
    'https://res.cloudinary.com/dmztjnlrp/image/upload/v1741455600/Porfolio/Retro%20Games/Retro-games-scheme.png',
  process1:
    'The chosen games were Bingo and Tic-Tac-Toe. The first step was to define how both games would be developed, considering the required functionality, especially for Tic-Tac-Toe, as it involves playing against another player. Ultimately, I decided to define a set of possible variables for both games and have the game use them randomly. This creates the illusion of playing against an opponent, even though that is not entirely the case.',
  process2:
    "The next step was to define the components and divide their functionalities. Since each game had to respond to the player's actions, I needed components to constantly listen for events while ensuring that unnecessary ones did not re-render continuously.",
  process3:
    'Once the functional part of the project was defined, I focused on the design. I decided to take inspiration from a neon aesthetic, referencing arcade halls that were often filled with neon signs, and the machines themselves also featured that type of lighting and colors.',
  imgProcess1:
    'https://res.cloudinary.com/dmztjnlrp/image/upload/v1741176001/Porfolio/Retro%20Games/Retro-Games-image-5.png',
  imgProcess2:
    'https://res.cloudinary.com/dmztjnlrp/image/upload/v1741176001/Porfolio/Retro%20Games/Retro-Games-image-6.png',
  imgProcess3:
    'https://res.cloudinary.com/dmztjnlrp/image/upload/v1741176010/Porfolio/Retro%20Games/Retro-Games-image-7.png',
  imgProcess4:
    'https://res.cloudinary.com/dmztjnlrp/image/upload/v1741176001/Porfolio/Retro%20Games/Retro-Games-image-8.png',
  learning:
    'An important lesson learned while developing this project was becoming aware of the real importance of components in terms of their functionality. Through this practical example, I realized that components not only make the code scalable and clear but are also essential for avoiding unnecessary re-renders. To achieve this, it is crucial to have a clear structure from the beginning of the project.',
  mistakes:
    'Regarding the mistakes made, the main issue was handling time in the games. My initial component and functionality structure worked well until time came into play. It was an element I hadn’t considered at the beginning of the project, and when I introduced it, all components updated every second since they all depended on time. I eventually managed to fix it, but if I had considered it from the start, the process would have been much simpler.',
  imgMistakes1:
    'https://res.cloudinary.com/dmztjnlrp/image/upload/v1741175333/Porfolio/Retro%20Games/Retro-games-image-4.png',
  link: 'https://react-retro-games-3ebx.vercel.app/'
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
        </div>
      </article>
      <article className='article-retro-games-process flex-container'>
        <h3>Project Process</h3>
        <p>{retroGamesItems.process1}</p>

        <p>{retroGamesItems.process2}</p>
        <p>{retroGamesItems.process3}</p>
        <div className='div-retro-games-process-img flex-container'>
          {[
            retroGamesItems.imgProcess1,
            retroGamesItems.imgProcess2,
            retroGamesItems.imgProcess3,
            retroGamesItems.imgProcess4
          ].map((imgSrc, index) => (
            <img key={index} src={imgSrc} alt='Neon detail' />
          ))}
        </div>
      </article>
      <article className='article-retro-games-learning flex-container'>
        <h3>Learning and mistakes</h3>
        <p>{retroGamesItems.learning}</p>
        <p>{retroGamesItems.mistakes}</p>
        <div className='div-retro-games-mistakes-img'>
          <img src={retroGamesItems.imgMistakes1} alt='Bingo Lose message' />
        </div>
      </article>
      <article className='article-retro-games-link flex-container'>
        <a href={retroGamesItems.link} target='_blank'>
          Curious to see it in action?
        </a>
        <BiSolidParty className='logo-link-retro-games' />
      </article>
      <Footer />
    </section>
  )
}

export default RetroGames
