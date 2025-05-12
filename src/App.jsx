import './App.css'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './pages/landingPage/landingPage'
import WebDesign from './pages/webDesign/webDesign'
import GraphicDesign from './pages/GraphicDesign/graphicDesign'
import Audiovisual from './pages/Audiovisual/Audiovisual'
import {
  audiovisualRoutes,
  graphicDesignRoutes,
  webDesignRoutes
} from './utils/routes'
import React from 'react'
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
      {webDesignRoutes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          element={React.createElement(route.component)}
        />
      ))}
      {audiovisualRoutes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          element={React.createElement(route.component)}
        />
      ))}
      {graphicDesignRoutes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          element={React.createElement(route.component)}
        />
      ))}
    </Routes>
  )
}

export default App
