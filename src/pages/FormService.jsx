// src/pages/FormService.jsx
import { useParams } from 'react-router-dom'

export default function FormService() {
  const { category, service } = useParams()

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Formulario: {decodeURIComponent(service)}</h1>
      <form>
        {/* Aquí agregas los campos específicos */}
        <div>
          <label>Nombre:</label>
          <input type="text" name="nombre" required/>
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" required/>
        </div>
        {/* … más inputs según necesidad … */}
        <button type="submit">Enviar</button>
      </form>
    </div>
  )
}
