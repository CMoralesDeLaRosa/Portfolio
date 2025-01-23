import Header from '../../components/header/header'
import './About.css'

const About = () => {
  return (
    <section id='section-about'>
      <Header />
      <article className='article-contain-about flex-container'>
        <h2>About</h2>
        <article className='article-summary-about flex-container'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
            sapiente dolorum esse, enim hic est, quasi quisquam eaque omnis
            placeat excepturi, voluptatum similique voluptates numquam. Magnam
            corrupti quod obcaecati ducimus.
          </p>
        </article>
        <article className='article-highlights-about flex-container'>
          <h3>Highlights</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Voluptatem, ipsam quasi sunt eligendi, nihil debitis cum unde alias
            doloribus amet, est totam. Reiciendis doloribus blanditiis at amet.
            Ea, perspiciatis suscipit?
          </p>
        </article>
        <article className='article-skills-about flex-container'>
          <h3>Skills</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Voluptatem, ipsam quasi sunt eligendi, nihil debitis cum unde alias
            doloribus amet, est totam. Reiciendis doloribus blanditiis at amet.
            Ea, perspiciatis suscipit?
          </p>
        </article>
        <article className='article-experience-about flex-container'>
          <h3>Experience</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Voluptatem, ipsam quasi sunt eligendi, nihil debitis cum unde alias
            doloribus amet, est totam. Reiciendis doloribus blanditiis at amet.
            Ea, perspiciatis suscipit?
          </p>
        </article>
        <article className='article-contact-about flex-container'>
          <button></button>
          <button></button>
        </article>
      </article>
    </section>
  )
}

export default About
