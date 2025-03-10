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
    component: ElPerol
  },
  {
    path: 'audiovisual/roots',
    component: PokemonCards
  },
  {
    path: 'audiovisual/jornadas-españa-rd',
    component: RetroGames
  }
]
