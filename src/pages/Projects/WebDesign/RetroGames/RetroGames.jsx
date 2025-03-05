import Header from '../../../../components/header/header'
import './RetroGames.css'
import { FaSquare } from 'react-icons/fa6'

const retroGamesItems = {
  name: 'Retro Games',
  imgMain:
    'https://res.cloudinary.com/dmztjnlrp/image/upload/v1739905043/Porfolio/Pokemon%20Cards/Pokemon-cards-main-image.png',
  type: 'React project - games',
  tools: 'React - Css',
  colaboration: 'Individual - Bootcamp Rock the Code',
  focus:
    'The main objective of this project was to develop a website that interacted with the Pokémon API through requests. The challenge was to retrieve various data and build a cohesive application while utilizing several React hooks. It was crucial to avoid unnecessary re-renders and to organize the code in a modular way, making the project scalable.',
  imgFocus1:
    'https://res.cloudinary.com/dmztjnlrp/image/upload/v1741079918/Porfolio/Pokemon%20Cards/Pokemon-cards-image-1.png',
  challenges:
    'One of the biggest challenges was how to represent such an iconic image as Pokémon in a simple yet original way, avoiding an obvious or repetitive project. My goal was to revisit the classic Pokémon aesthetic without directly replicating what had already been done. To achieve this, I decided not to make a literal copy, but to draw inspiration from the visual style of the Game Boy consoles, using a more modern color palette and more defined details, creating a reinterpretation of that retro aesthetic.',
  imgChallenge1:
    'https://res.cloudinary.com/dmztjnlrp/image/upload/v1741081206/Porfolio/Pokemon%20Cards/Pokemon-cards-image-2.png',
  imgChallenge2:
    'https://res.cloudinary.com/dmztjnlrp/image/upload/v1741081674/Porfolio/Pokemon%20Cards/Pokemon-cards-image-3.png',
  imgChallenge3:
    'https://res.cloudinary.com/dmztjnlrp/image/upload/v1741081733/Porfolio/Pokemon%20Cards/Pokemon-cards-image-4.png',
  process1:
    'The first step was to research the different graphical representations of Pokémon over the years in various video games across different consoles. I wanted to understand how the graphics had been adapted to different technologies and screens throughout the eras. This research allowed me to better grasp the retro style and decide how to adapt it into a more current visual approach, maintaining the essence without resorting to cheap nostalgia.',
  imgProcess1:
    'https://res.cloudinary.com/dmztjnlrp/image/upload/v1741084357/Porfolio/Pokemon%20Cards/Pokemon-cards-image-5.png',
  imgProcess2:
    'https://res.cloudinary.com/dmztjnlrp/image/upload/v1741084351/Porfolio/Pokemon%20Cards/Pokemon-cards-image-6.png',
  imgProcess3:
    'https://res.cloudinary.com/dmztjnlrp/image/upload/v1741084351/Porfolio/Pokemon%20Cards/Pokemon-cards-image-7.png',
  process2:
    'Next, I dived into studying the API. I read its documentation thoroughly, learned how to make requests, and explored the available data. Since the API offered an enormous amount of information, I had to carefully organize and select the Pokémon data I wanted to display, as well as narrow down which Pokémon to show, given the extensive variety.',
  imgProcess4:
    'https://res.cloudinary.com/dmztjnlrp/image/upload/v1741083595/Porfolio/Pokemon%20Cards/Pokemon-cards-scheme.png',
  process3:
    'Once the data selection was clear, I developed the project using React and CSS for styling. I conducted in-depth research on components, re-renders, and React hooks. Although the project was relatively simple, my goal was to create clean, scalable, and well-structured code so that I could gain a solid understanding of React’s fundamentals and apply that knowledge to more complex projects in the future.',
  extraGame:
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
    </section>
  )
}

export default RetroGames
