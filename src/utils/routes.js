import jornadasEspanaRD from '../pages/Projects/Audiovisual/JornadasEspanaRD/JornadasEspanaRD'
import Papaoutai from '../pages/Projects/Audiovisual/Papaoutai/Papaoutai'
import Roots from '../pages/Projects/Audiovisual/Roots/Roots'
import CreandOh from '../pages/Projects/GraphicDesign/CreandOh/CreandOh'
import ElPerol from '../pages/Projects/WebDesign/ElPerol/ElPerol'
import PokemonCards from '../pages/Projects/WebDesign/PokemonCards/PokemonCards'
import RetroGames from '../pages/Projects/WebDesign/RetroGames/RetroGames'
import WebDesign from '../pages/webDesign/webDesign'

export const webDesignRoutes = [
  {
    path: 'web-design/el-perol',
    component: WebDesign
  },
  {
    path: 'web-design/pokemon-cards',
    component: WebDesign
  },
  {
    path: 'web-design/retro-games',
    component: WebDesign
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
