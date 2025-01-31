import './App.css'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './pages/landingPage/landingPage'
import WebDesign from './pages/webDesign/webDesign'
import GraphicDesign from './pages/graphicDesign/graphicDesign'
import Audiovisual from './pages/Audiovisual/Audiovisual'
import About from './pages/about/about'
import { webDesignRoutes } from './utils/routes'

function App() {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='*' element={<LandingPage />} />
      <Route path='web-design' element={<WebDesign />} />
      <Route path='audiovisual' element={<Audiovisual />} />
      <Route path='graphic-design' element={<GraphicDesign />} />
      <Route path='about' element={<About />} />

      {webDesignRoutes.map((route, index) => (
        <Route key={index} path={route.path} element={<route.component />} />
      ))}
    </Routes>
  )
}

export default App
