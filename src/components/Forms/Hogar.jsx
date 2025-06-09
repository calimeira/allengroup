export default function FormHogar() {
  return (
    <form className="form">
      <h3 className="form-title">Seguro para el Hogar</h3>
      <div className="form-group">
        <label>Nombre y Apellido</label>
        <input type="text" placeholder="Nombre completo" />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input type="email" placeholder="Mail de contacto" />
      </div>
      <div className="form-group">
        <label>Telefono</label>
        <input type="text" placeholder="Telefono" />
      </div>
      <div className="form-group">
        <label>Codigo Postal</label>
        <input type="text" placeholder="CP" />
      </div>
      <div className="form-group">
        <label>Metros cubiertos</label>
        <input type="text" placeholder="Metros cubiertos" />        
      </div>
      <div className="form-group">
        <label>Tipo de Hogar</label>
        <input type="text" placeholder="Departamento, Casa" />
      </div>
      

      <button type="submit">Enviar</button>
    </form>
  );
}
