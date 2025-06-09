// src/App.jsx
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Subheader from './components/Subheader'
import Home from './pages/Home.jsx'
import Nosotros from './pages/Nosotros'
import FormService from './pages/FormService'
import Empresas from './pages/Empresas'
import Individuos from './pages/Individuos'
import Quote from './pages/Quote'

export default function App() {
  return (
    <div>
      <Header />
      <Subheader />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/servicio/:category/:service" element={<FormService />} />
                    <Route path="/empresas" element={<Empresas />} />
          <Route path="/individuos" element={<Individuos />} />
          <Route path="/cotizador" element={<Quote />} />
          {/* Puedes añadir más rutas aquí */}
        </Routes>
      </main>
    </div>
  )
}
