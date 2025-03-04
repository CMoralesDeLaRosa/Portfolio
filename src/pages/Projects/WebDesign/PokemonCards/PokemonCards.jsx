import Header from '../../../../components/header/header'
import './PokemonCards.css'
import { FaSquare } from 'react-icons/fa6'
import { MdDesignServices } from 'react-icons/md'
import { FaPlus } from 'react-icons/fa'

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
    'https://res.cloudinary.com/dmztjnlrp/image/upload/v1738695178/Porfolio/El%20Perol/Elperol-image2.png',
  imgFocus2:
    'https://res.cloudinary.com/dmztjnlrp/image/upload/v1738697207/Porfolio/El%20Perol/ElPerol-image3.png',
  challenges:
    'One of the biggest challenges was how to represent such an iconic image as Pokémon in a simple yet original way, avoiding an obvious or repetitive project. My goal was to revisit the classic Pokémon aesthetic without directly replicating what had already been done. To achieve this, I decided not to make a literal copy, but to draw inspiration from the visual style of the Game Boy consoles, using a more modern color palette and more defined details, creating a reinterpretation of that retro aesthetic.',
  imgChallenge1:
    'https://res.cloudinary.com/dmztjnlrp/image/upload/v1738867617/Porfolio/El%20Perol/ElPerol-image4.png',
  process1:
    'The first step was to research the different graphical representations of Pokémon over the years in various video games across different consoles. I wanted to understand how the graphics had been adapted to different technologies and screens throughout the eras. This research allowed me to better grasp the retro style and decide how to adapt it into a more current visual approach, maintaining the essence without resorting to cheap nostalgia.',
  imgProcess1:
    'https://res.cloudinary.com/dmztjnlrp/image/upload/v1739473271/Porfolio/El%20Perol/El-perol-scheme.png',
  process2:
    'Next, I dived into studying the API. I read its documentation thoroughly, learned how to make requests, and explored the available data. Since the API offered an enormous amount of information, I had to carefully organize and select the Pokémon data I wanted to display, as well as narrow down which Pokémon to show, given the extensive variety.',
  imgProcess2:
    'https://res.cloudinary.com/dmztjnlrp/image/upload/v1739393373/Porfolio/El%20Perol/ElPerol-image5.png',
  process3:
    'Once the data selection was clear, I developed the project using React and CSS for styling. I conducted in-depth research on components, re-renders, and React hooks. Although the project was relatively simple, my goal was to create clean, scalable, and well-structured code so that I could gain a solid understanding of React’s fundamentals and apply that knowledge to more complex projects in the future.',
  adminRole:
    'As an extra touch, I wanted to pay special attention to the user experience. Although it was an informational site with no complex interactions, I thought it was important for the user to enjoy some simple interactivity. I implemented a small game on the homepage: when the user clicks on the Pokéball, Pokémon randomly appear across the screen. Additionally, hover effects on the cards change the shadows of the containers, and clicking on each Pokémon allows the user to rotate its image. These small details make the site more enjoyable and spark user curiosity to discover more.',
  imgAdmin1:
    'https://res.cloudinary.com/dmztjnlrp/image/upload/v1739819188/Porfolio/El%20Perol/El-perol-admin1.png',
  imgAdmin2:
    'https://res.cloudinary.com/dmztjnlrp/image/upload/v1739819188/Porfolio/El%20Perol/El-perol-admin2.png',
  imgAdmin3:
    'https://res.cloudinary.com/dmztjnlrp/image/upload/v1739819189/Porfolio/El%20Perol/El-perol-admin4.png',
  learning:
    'A valuable lesson I learned from this project was how to reinterpret such a popular and recurring image like Pokémon without falling into clichés or repetitive styles. It was a challenge to add my personal touch to such a well-known theme, but I succeeded in giving the project a unique flavor. Additionally, this process allowed me to deepen my understanding of React, especially in terms of componentization and managing re-renders.',
  mistakes:
    'Regarding mistakes, one of the biggest obstacles I faced was handling re-renders at the start of the project. I didn’t pay enough attention to how to organize the components, which forced me to make numerous adjustments throughout the development to avoid unnecessary re-renders. My initial lack of experience in efficiently managing components led to a flawed project approach, which I had to correct during the development process.',
  imgLearning:
    'https://res.cloudinary.com/dmztjnlrp/image/upload/v1739820184/Porfolio/El%20Perol/El-perol-learning-image.png'
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
          <MdDesignServices className='big-icon-scheme-el-perol' />
          <FaPlus className='small-icon-scheme-el-perol' />
          {/*<TbExchange className='big-icon-scheme-el-perol' />
          <FaPlus className='small-icon-scheme-el-perol' />
          <BsPersonArmsUp className='big-icon-scheme-el-perol' />
          <FaLongArrowAltRight className='small-icon-scheme-el-perol' />
          <AiFillThunderbolt className='big-icon-scheme-el-perol' /> */}
        </div>
        <p>{pokemonCardsItems.focus}</p>
        <div className='div-images-focus-pokemon-cards flex-container'>
          <div>
            <img src={pokemonCardsItems.imgFocus1} alt='Web site El Perol' />
          </div>
          <div>
            <img src={pokemonCardsItems.imgFocus2} alt='Web site El Perol' />
          </div>
        </div>
      </article>
    </section>
  )
}

export default PokemonCards
