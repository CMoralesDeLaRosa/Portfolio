import Footer from '../../../../components/Footer/Footer'
import Header from '../../../../components/header/header'
import './Papaoutai.css'
import { FaSquare } from 'react-icons/fa6'
import { FaPlus, FaLongArrowAltRight } from 'react-icons/fa'
import { GiCrystalGrowth } from 'react-icons/gi'
import { GiCrystalize } from 'react-icons/gi'
import { PiSneakerMoveFill } from 'react-icons/pi'
import { BsCameraReelsFill } from 'react-icons/bs'
import { BsStars } from 'react-icons/bs'

const papaoutaiItems = {
  name: 'Papaoutai',
  imgMain:
    'https://res.cloudinary.com/dmztjnlrp/image/upload/v1741636119/Porfolio/Papaoutai/Papaoutai-main-image.png',
  type: 'Videodance project',
  tools: 'Adobe Illustrator - Davinci Resolve',
  colaboration: 'Freelance - Creand¡Oh! - Fernando Corredoira',
  focus1:
    'The main concept of this project is the representation of the emotions experienced by a person in the absence of a father or mother in their life. These emotions range from deep anger to love and admiration. This personal conflict is expressed through the movement of dance, complemented by audiovisual tools.',
  imgFocus1:
    'https://res.cloudinary.com/dmztjnlrp/image/upload/v1741721712/Porfolio/Papaoutai/Papaoutai-image1.png',
  imgFocus2:
    'https://res.cloudinary.com/dmztjnlrp/image/upload/v1741721712/Porfolio/Papaoutai/Papaoutai-image2.png',
  imgFocus3:
    'https://res.cloudinary.com/dmztjnlrp/image/upload/v1741721712/Porfolio/Papaoutai/Papaoutai-image3.png',
  focus2:
    'The setting recreates a somewhat aseptic environment, resembling a pavilion, yet with subtle references to playfulness and childhood. The lighting design and styling add a sense of humanity, creating a contrast between the beauty and delicacy of love and the harsh reality of anger and resentment. The choreography, reinforced by camera movements and various framing techniques, takes us through the different emotional stages that the person experiences.',
  focus3:
    'The song accompanying this piece is Papaoutai by Stromae, which tells the story of a child demanding answers from his father about why he doesn’t spend time with him. The artist questions the difference between the role of a progenitor and that of a father, as well as the impact of certain men’s and women’s actions on the lives of their children. This videodance piece specifically explores the emotional rollercoaster that the child undergoes, along with the doubts and personal crises they face. References to the original work are made through the final color grading and certain movements within the choreography.',
  challenges:
    'The main challenge of this project was to represent an abstract concept, the feeling of loss towards a father or mother, through a videodance piece. It was essential to ensure that both the audiovisual language and the language of dance conveyed the same concept while also complementing and reinforcing each other.',
  imgChallenge1:
    'https://res.cloudinary.com/dmztjnlrp/image/upload/v1741723080/Porfolio/Papaoutai/Papaoutai-image4.png',
  references1:
    'First, I selected several references to develop the project. I chose two choreographers who direct their own choreographic videos: Andrew Winghart and Keone Madrid. They address social themes and use audiovisual creation to emphasize the meaning of their dance. Additionally, their approach to camera work, lighting, and art direction is very similar to the overall concept of this project.',
  imgReferences1:
    'https://res.cloudinary.com/dmztjnlrp/image/upload/v1742930540/Porfolio/Papaoutai/Papaoutai-image6.png',
  references2:
    "Regarding the camera work, they use fixed lenses and, in some cases, wide-angle lenses to capture the full group of dancers when their number is large. The focal lengths are short, as they integrate the available architectural elements into the composition of the image, avoiding background blurring. Every framing choice and camera movement is designed not only to emphasize the choreography but also to seamlessly connect the background with the dancer’s movement, using the geometry of the location and the body's directional lines.",
  references3:
    'The lighting adds a sense of humanity to the piece, often utilizing overhead or backlighting to create dreamlike atmospheres, resembling theatrical proposals. In videos with natural daylight lighting, soft lights are used, along with elements that cast distinct shadows, creating patterns that add texture to the image. As for costume and makeup, pastel tones are predominant, complementing the surroundings. The locations are real places rather than studio sets or excessively artificial environments, making the scenes feel more relatable and reinforcing the themes explored.',
  camera:
    'Except for some movements and positions defined in the shot list, there are no overly strict camera plans. Instead, the camera zone, movement direction, and main axes will be defined. It is important to maintain a clear reference to the center of the choreographic positions. With these camera movements, wide, medium, and close-up shots will be captured, along with the indications outlined in the shot list.',
  imgCamera1:
    'https://res.cloudinary.com/dmztjnlrp/image/upload/v1743615449/Porfolio/Papaoutai/Papaoutai-camera-scheme.png',
  imgCamera2:
    'https://res.cloudinary.com/dmztjnlrp/image/upload/v1742846332/Porfolio/Papaoutai/Papaoutai-image7.png',
  colorGrading:
    'The idea was to reference the look of the original music video, creating a visual nod to the piece. A primary color correction was performed by adjusting highlights, shadows, and midtones to achieve the widest possible range. Contrast and saturation were fine-tuned, and the overall color balance was adjusted. In the secondary correction, the most intense green tones were neutralized. Finally, the look was refined using a still from the original music video and adapting it to match the tones and intensities present in our footage.',
  imgColorGrading1:
    'https://res.cloudinary.com/dmztjnlrp/image/upload/v1742930048/Porfolio/Papaoutai/Papaoutai-image8.png',
  imgColorGrading2:
    'https://res.cloudinary.com/dmztjnlrp/image/upload/v1742930119/Porfolio/Papaoutai/Papaoutai-image9.png',
  imgColorGrading3:
    'https://res.cloudinary.com/dmztjnlrp/image/upload/v1742931164/Porfolio/Papaoutai/Papoutai-color-grading.png',
  learning:
    'The limitations in terms of space, budget, and equipment pushed me to put extra effort into the pre-production phase to achieve the level of quality I aimed for. This experience gave me a deeper understanding of the importance of pre-shooting tasks and how essential communication between different departments is.',
  imgLearning1:
    'https://res.cloudinary.com/dmztjnlrp/image/upload/v1742931682/Porfolio/Papaoutai/Papoutai-image10.png',
  imgLearning2:
    'https://res.cloudinary.com/dmztjnlrp/image/upload/v1742931682/Porfolio/Papaoutai/Papaoutai-image11.png',
  mistakes:
    'Regarding mistakes, I did not take into account certain colors present at the filming location. Since it was a sports complex, there were some highly vibrant elements that made the color grading process more challenging. I had to isolate these elements to reduce their saturation and intensity without affecting the rest of the image. I believe that in a longer project, this issue could have significantly delayed the editing process. This could have been avoided by conducting test shots beforehand to determine whether the location was suitable.',

  imgMistakes:
    'https://res.cloudinary.com/dmztjnlrp/image/upload/v1742932468/Porfolio/Papaoutai/Papaoutai-image12.png',
  link: 'https://www.youtube.com/watch?v=918lYUKCCzA'
}
const papaoutaiDetails = [
  { icon: <FaSquare className='square-green' />, text: papaoutaiItems.type },
  { icon: <FaSquare className='square-green' />, text: papaoutaiItems.tools },
  {
    icon: <FaSquare className='square-green' />,
    text: papaoutaiItems.colaboration
  }
]

const Papaoutai = () => {
  return (
    <section id='section-papaoutai-project' className='flex-container'>
      <Header />
      <article className='article-papaoutai-main flex-container'>
        <div className='div-papaoutai-main-image'>
          <img src={papaoutaiItems.imgMain} alt={papaoutaiItems.name} />
        </div>
        <h2>{papaoutaiItems.name}</h2>
        <ul className='ul-papaoutai-main flex-container'>
          {papaoutaiDetails.map((item, index) => (
            <li key={index} className='flex-container'>
              {item.icon}
              {item.text}
            </li>
          ))}
          <FaSquare className='square-green-last' />
        </ul>
      </article>
      <article className='article-papaoutai-focus'>
        <h3>Project Focus</h3>
        <div className='div-scheme-papaoutai'>
          <GiCrystalize className='big-icon-scheme-audiovisual' />
          <FaPlus className='small-icon-scheme-audiovisual' />
          <PiSneakerMoveFill className='big-icon-scheme-audiovisual' />
          <FaPlus className='small-icon-scheme-audiovisual' />
          <BsCameraReelsFill className='big-icon-scheme-audiovisual-camera' />
          <FaLongArrowAltRight className='small-icon-scheme-audiovisual' />
          <GiCrystalGrowth className='big-icon-scheme-audiovisual' />
        </div>
        <p>{papaoutaiItems.focus1}</p>
        <div className='div-images-focus-papaoutai flex-container'>
          <img src={papaoutaiItems.imgFocus1} alt='Frame of Papaoutai video' />
          <img src={papaoutaiItems.imgFocus2} alt='Frame of Papaoutai video' />
          <img src={papaoutaiItems.imgFocus3} alt='Frame of Papaoutai video' />
        </div>
        <p>{papaoutaiItems.focus2}</p>
        <p>{papaoutaiItems.focus3}</p>
      </article>
      <article className='article-papaoutai-challenges flex-container'>
        <h3>Challenges</h3>
        <p>{papaoutaiItems.challenges}</p>
        <div className='div-papaoutai-challenges-img'>
          <img
            src={papaoutaiItems.imgChallenge1}
            alt='Frame of Papaoutai video'
          />
        </div>
      </article>
      <article className='article-papaoutai-references flex-container'>
        <h3>References</h3>
        <p>{papaoutaiItems.references1}</p>
        <p>{papaoutaiItems.references2}</p>
        <div className='div-papaoutai-references-img'>
          <img
            src={papaoutaiItems.imgReferences1}
            alt='Videodance References'
          />
        </div>
        <p>{papaoutaiItems.references3}</p>
      </article>
      <article className='article-papaoutai-camera flex-container'>
        <h3>Camera</h3>
        <p>{papaoutaiItems.camera}</p>
        <div className='div-papaoutai-camera-img flex-container'>
          <img src={papaoutaiItems.imgCamera1} alt='Schemes of camera' />
          <img src={papaoutaiItems.imgCamera2} alt='Frame of the video' />
        </div>
      </article>
      <article className='article-papaoutai-color-grading flex-container'>
        <h3>Color Grading</h3>
        <p>{papaoutaiItems.colorGrading}</p>
        <div className='div-papaoutai-color-grading-img1 flex-container'>
          <img
            src={papaoutaiItems.imgColorGrading1}
            alt='Frame of the original video'
          />
          <img
            src={papaoutaiItems.imgColorGrading2}
            alt='Frame of the original video'
          />
        </div>
        <div className='div-papaoutai-color-grading-img2 flex-container'>
          <img
            src={papaoutaiItems.imgColorGrading3}
            alt='Examples of color grading'
          />
        </div>
      </article>
      <article className='article-papaoutai-learning flex-container'>
        <h3>Learning</h3>
        <p>{papaoutaiItems.learning}</p>
        <div className='div-papaoutai-learning-img flex-container'>
          <img src={papaoutaiItems.imgLearning1} alt='Image of making off' />
          <img src={papaoutaiItems.imgLearning2} alt='Image of making off' />
        </div>
      </article>
      <article className='article-papaoutai-mistakes flex-container'>
        <h3>Mistakes</h3>
        <p>{papaoutaiItems.mistakes}</p>
        <div className='div-papaoutai-mistakes-img flex-container'>
          <img src={papaoutaiItems.imgMistakes} alt='Frame of the video' />
        </div>
      </article>
      <article className='article-el-perol-link flex-container'>
        <a href={papaoutaiItems.link} target='_blank'>
          Want to check it out?
        </a>
        <BsStars className='logo-link-el-perol' />
      </article>
      <Footer />
    </section>
  )
}

export default Papaoutai
