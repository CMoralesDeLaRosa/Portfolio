import './App.css'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './pages/landingPage/landingPage'
import WebDesign from './pages/webDesign/webDesign'
import AudiovisualProjects from './pages/audiovisualProjects/audiovisualProjects'
import GraphicDesign from './pages/graphicDesign/graphicDesign'

function App() {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='*' element={<LandingPage />} />
      <Route path='webDesign' element={<WebDesign />} />
      <Route path='audiovisual' element={<AudiovisualProjects />} />
      <Route path='graphicDesign' element={<GraphicDesign />} />
      <Route path='about' element={<about />} />
    </Routes>
  )
}

export default App
