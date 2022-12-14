import { Routes, Route, Navigate } from "react-router-dom"

import { Menu } from './components/Menu'

import { HomePage } from './pages/Home'
import { CatalogPage } from './pages/Catalog'


import './App.scss'

const App = () => (
  <div className="App">
    
    <Menu />
    <Routes>
      <Route path="menu">
        <Route path=":category" element={<CatalogPage />} />
        <Route index element={<Navigate to="/" />} />
      </Route>
      <Route index element={<HomePage />} />
    </Routes>

  </div>
)

export default App
