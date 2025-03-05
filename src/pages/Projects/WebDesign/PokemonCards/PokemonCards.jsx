import Header from '../../../../components/header/header'
import './PokemonCards.css'
import { FaSquare } from 'react-icons/fa6'
import { MdDesignServices } from 'react-icons/md'
import { FaPlus } from 'react-icons/fa'
import { GiConsoleController } from 'react-icons/gi'
import { BiSolidData } from 'react-icons/bi'
import { FaLongArrowAltRight } from 'react-icons/fa'
import { MdOutlineCatchingPokemon } from 'react-icons/md'
import Footer from '../../../../components/footer/footer'
import { IoLogoSnapchat } from 'react-icons/io5'

const pokemonCardsItems = {
  name: 'Pokemon Cards',
  imgMain:
    'https://res.cloudinary.com/dmztjnlrp/image/upload/v1739905043/Porfolio/Pokemon%20Cards/Pokemon-cards-main-image.png',
  type: 'React project - hooks',
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
const pokemonCardsDetails = [
  { icon: <FaSquare className='square-green' />, text: pokemonCardsItems.type },
  {
    icon: <FaSquare className='square-green' />,
    text: pokemonCardsItems.tools
  },
  {
    icon: <FaSquare className='square-green' />,
    text: pokemonCardsItems.colaboration
  }
]

const PokemonCards = () => {
  return (
    <section id='section-pokemon-cards-project' className='flex-container'>
      <Header />
      <article className='article-pokemon-cards-main flex-container'>
        <div className='div-pokemon-cards-main-image'>
          <img src={pokemonCardsItems.imgMain} alt={pokemonCardsItems.name} />
        </div>
        <h2>{pokemonCardsItems.name}</h2>
        <ul className='ul-el-perol-main flex-container'>
          {pokemonCardsDetails.map((item, index) => (
            <li key={index} className='flex-container'>
              {item.icon}
              {item.text}
            </li>
          ))}
          <FaSquare className='square-green-last' />
        </ul>
      </article>
      <article className='article-pokemon-cards-focus'>
        <h3>Project Focus</h3>
        <div className='div-scheme-pokemon-cards'>
          <MdDesignServices className='big-icon-scheme-web-design' />
          <FaPlus className='small-icon-scheme-web-design' />
          <GiConsoleController className='big-icon-scheme-web-design' />
          <FaPlus className='small-icon-scheme-web-design' />
          <BiSolidData className='big-icon-scheme-web-design' />
          <FaLongArrowAltRight className='small-icon-scheme-web-design' />
          <MdOutlineCatchingPokemon className='big-icon-scheme-web-design' />
        </div>
        <p>{pokemonCardsItems.focus}</p>
        <div className='div-images-focus-pokemon-cards flex-container'>
          <img
            src={pokemonCardsItems.imgFocus1}
            alt='Web site Pokemon Cards - Mobile version'
          />
        </div>
      </article>
      <article className='article-pokemon-cards-challenges flex-container'>
        <h3>Challenges</h3>
        <p>{pokemonCardsItems.challenges}</p>
        <div className='div-pokemon-cards-challenges-img flex-container'>
          <div>
            <img
              src={pokemonCardsItems.imgChallenge1}
              alt='Website color palette'
            />
          </div>
          <div className='flex-container'>
            <img
              src={pokemonCardsItems.imgChallenge2}
              alt='Main page - Selection hover'
            />
            <img
              src={pokemonCardsItems.imgChallenge3}
              alt='About part of the website'
            />
          </div>
        </div>
      </article>
      <article className='article-pokemon-cards-process flex-container'>
        <h3>Project Process</h3>
        <p>{pokemonCardsItems.process1}</p>
        <div className='div-pokemon-cards-process-img1 flex-container'>
          <img src={pokemonCardsItems.imgProcess1} alt='Register part' />
          <img src={pokemonCardsItems.imgProcess2} alt='Register part' />
          <img src={pokemonCardsItems.imgProcess3} alt='Register part' />
        </div>
        <p>{pokemonCardsItems.process2}</p>
        <div className='div-pokemon-cards-process-img2'>
          <img
            src={pokemonCardsItems.imgProcess4}
            alt='Pokemon`s Data Selected'
          />
        </div>
        <p>{pokemonCardsItems.process3}</p>
      </article>
      <article className='article-pokemon-cards-game flex-container'>
        <h3>Extra game</h3>
        <p>{pokemonCardsItems.extraGame}</p>
        <div className='div-pokemon-cards-game-video flex-container'>
          <video loop muted autoPlay width='100%'>
            <source src={pokemonCardsItems.gameVideo} type='video/mp4' />
            Tu navegador no soporta el video.
          </video>
        </div>
      </article>
      <article className='article-pokemon-cards-learning flex-container'>
        <h3>Learning and mistakes</h3>
        <p>{pokemonCardsItems.learning}</p>
        <p>{pokemonCardsItems.mistakes}</p>
      </article>
      <article className='article-pokemon-cards-link flex-container'>
        <a href={pokemonCardsItems.link} target='_blank'>
          See the final result here!
        </a>
        <IoLogoSnapchat className='logo-link-pokemon-cards' />
      </article>
      <Footer />
    </section>
  )
}

export default PokemonCards
