import './App.css'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './pages/landingPage/landingPage'
import WebDesign from './pages/webDesign/webDesign'
import GraphicDesign from './pages/graphicDesign/graphicDesign'
import Audiovisual from './pages/Audiovisual/Audiovisual'
import About from './pages/about/about'

function App() {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='*' element={<LandingPage />} />
      <Route path='web-design' element={<WebDesign />} />
      <Route path='audiovisual' element={<Audiovisual />} />
      <Route path='graphic-design' element={<GraphicDesign />} />
      <Route path='about' element={<About />} />
    </Routes>
  )
}

export default App
