import jornadasEspanaRD from '../pages/Projects/Audiovisual/JornadasEspanaRD/JornadasEspanaRD'
import Papaoutai from '../pages/Projects/Audiovisual/Papaoutai/Papaoutai'
import Roots from '../pages/Projects/Audiovisual/Roots/Roots'
import CreandOh from '../pages/Projects/GraphicDesign/CreandOh/CreandOh'
import ElPerol from '../pages/Projects/WebDesign/ElPerol/ElPerol'
import PokemonCards from '../pages/Projects/WebDesign/PokemonCards/PokemonCards'
import RetroGames from '../pages/Projects/WebDesign/RetroGames/RetroGames'

export const webDesignRoutes = [
  {
    path: 'web-design/el-perol',
    component: ElPerol
  },
  {
    path: 'web-design/pokemon-cards',
    component: PokemonCards
  },
  {
    path: 'web-design/retro-games',
    component: RetroGames
  }
]

export const audiovisualRoutes = [
  {
    path: 'audiovisual/papaoutai',
    component: Papaoutai
  },
  {
    path: 'audiovisual/roots',
    component: Roots
  },
  {
    path: 'audiovisual/jornadas-espana-rd',
    component: jornadasEspanaRD
  }
]
export const graphicDesignRoutes = [
  {
    path: 'graphic-design',
    component: Papaoutai
  },
  {
    path: 'graphic-design',
    component: CreandOh
  },
  {
    path: 'graphic-design',
    component: jornadasEspanaRD
  }
]
