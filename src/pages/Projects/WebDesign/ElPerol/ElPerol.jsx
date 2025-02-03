import Header from '../../../../components/header/header'
import Project from '../../Project/Project'
import './ElPerol.css'

const elPerol = {
  name: 'El Perol',
  imgMain:
    'https://res.cloudinary.com/dmztjnlrp/image/upload/v1738352580/Porfolio/El%20Perol/El-perol-main-image.png',
  type: 'Web site - Backend and Frontend',
  tools: 'React - Css - Node.js',
  colaboration: 'Individual - Bootcamp Rock the Code',
  focus:
    'El objetivo de este proyecto era crear una aplicación web sobre recetas de comida tradicional española que permitiera la interacción entre usuarios y su participación en el crecimiento de la web a través del contenido que ellos mismos pueden crear. El segundo foco importante era conseguir una imagen innovadora frente a las típicas web de recetas pero que mantuviera el interés en el Target de ese tipo de webs.',
  challenges:
    'Para mi el reto más significativo ha sido manejar la información de la base de datos de una forma dinámica que permita que la web, a nivel visual, mantenga su estructura. Era importante que los espacios estuvieran controlados y contenedores estuvieran controlados aún pudiendo el usuario agregar contenido con cierta flexibilidad.',
  process:
    'En primer lugar, realicé un trabajo de investigación en el que busqué las web de recetas más visitas e identifiqué qué información mostraban, cómo la mostraban y cómo era la interacción del usuario. Son páginas muy claras e intuitivas pero a nivel diseño son muy similares a los blocs. Buscan fundamentalmente la funcionalidad. Ahí fue donde encontré el hueco para darle una vuelta a este tipo de webs. Después, hice una investigación en proyectos y webs con un diseño más innovador enfocados a la gastronomía en general. Restaurantes, webs de productos alimenticios, revistas de comida, entre otros. Quería saber cómo otros diseñadores mostraban la comida, cuál era su propuesta. Y con esos dos enfoques empecé a construir el mio propio. A continuación desarrollé la parte backend: la base de datos de las recetas, qué usuarios quería tener, cómo iban a interactuar, qué acciones podían hacer en función del tipo de usuario. De esta forma creé el esqueleto de proyecto. Tendría 3 tipos de usuarios: usuario no registrado, usuario registrado en una cuenta básico y usuario registrado en una cuenta profesional. Cada uno tiene acceso a una información y a un grado de personalización diferente. Le di mucha importancia a las funciones de admin y las tareas de validación de contenido. Me centré en un diseño claro.Por último comencé a darle forma a nivel visual con la parte frontend. Utilicé React, porque consideré que me daba bastante flexibilidad para el tipo de proyecto que estaba realizando y para el estilo CSS. Al ser un proyecto individual, en esta última fase tuve espacio para algunos cambios y sobre todo para añadir alguna idea extra.'
}
const ElPerol = () => {
  return (
    <section id='section-elperol-project' className='flex-container'>
      <Header />
      <Project project={elPerol} />
    </section>
  )
}

export default ElPerol
