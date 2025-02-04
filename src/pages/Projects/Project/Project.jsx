import './Project.css'
import { FaSquare } from 'react-icons/fa6'
import ArticleFocusElPerol from '../WebDesign/ElPerol/ArticleFocusElPerol'

const Project = ({ project }) => {
  const projectDetails = [
    { icon: <FaSquare className='square-green' />, text: project.type },
    { icon: <FaSquare className='square-green' />, text: project.tools },
    { icon: <FaSquare className='square-green' />, text: project.colaboration }
  ]

  return (
    <section id='section-project' className='flex-container'>
      <article className='article-project-main flex-container'>
        <div className='div-project-main-image'>
          <img src={project.imgMain} alt={project.name} />
        </div>
        <h2>{project.name}</h2>
        <ul className='ul-project-main flex-container'>
          {projectDetails.map((item, index) => (
            <li key={index} className='flex-container'>
              {item.icon}
              {item.text}
            </li>
          ))}
          <FaSquare className='square-green-last' />
        </ul>
      </article>
      <article className='article-project-focus flex-container'>
        <h3>Project Focus</h3>
        {project.name === 'El Perol' ? (
          <ArticleFocusElPerol project={project} />
        ) : null}
      </article>
      <article className='article-project-challenges flex-container'>
        <h3>Challenges</h3>
        <p>{project.challenges}</p>
      </article>
      <article className='article-project-process flex-container'>
        <h3>Project Process</h3>
        <p>{project.process}</p>
      </article>
    </section>
  )
}

export default Project
