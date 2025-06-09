export default function FormAuto() {
  return (
    <form className="form">
      <h3 className="form-title">Cotización Seguro Auto</h3>
      <div className="form-group">
        <label>Nombre</label>
        <input type="text" placeholder="Nombre completo" />
      </div>
      <div className="form-group">
        <label>Marca</label>
        <input type="text" placeholder="Ej: Toyota" />
      </div>
      <div className="form-group">
        <label>Modelo</label>
        <input type="text" placeholder="Ej: Corolla" />
      </div>
      <div className="form-group">
        <label>Año</label>
        <input type="text" placeholder="2015" />
      </div>
      <div className="form-group">
        <label>Mail</label>
        <input type="email" placeholder="Mail de contacto" />        
      </div>

      <button type="submit">Enviar</button>
    </form>
  );
}
