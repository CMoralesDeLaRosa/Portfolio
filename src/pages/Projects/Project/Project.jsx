import './Project.css'

const Project = ({ project }) => {
  console.log('name', project)
  return (
    <section id='section-project' className='flex-container'>
      <article className='article-project-main flex-container'>
        <div className='div-project-main-image'>
          <img src={project.imgMain} alt={project.name} />
        </div>
        <h2>{project.name}</h2>
        <ul className='ul-project-main flex-container'>
          <li>{project.type}</li>
          <li>{project.tools}</li>
          <li>{project.colaboration}</li>
        </ul>
      </article>
      <article className='article-project-structure flex-container'>
        <div>
          <h3>Project Focus</h3>
          <p>{project.focus}</p>
        </div>
        <div>
          <h3>Challenges</h3>
          <p>{project.challenges}</p>
        </div>
        <div>
          <h3>Project Process</h3>
          <p>{project.process}</p>
        </div>
      </article>
    </section>
  )
}

export default Project
