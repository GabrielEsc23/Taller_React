// src/components/FormularioRegistro.jsx
import { useState } from "react"; // Importa el hook useState de React para manejar estados.
import "../eslilos/formulario.css"; // Importa los estilos CSS para el formulario.

const FormularioRegistro = () => {
  // Define los estados para manejar los datos del formulario.
  const [nombre, setNombre] = useState(""); // Estado para almacenar el nombre del usuario.
  const [correo, setCorreo] = useState(""); // Estado para almacenar el correo electrónico del usuario.
  const [materias, setMaterias] = useState([""]); // Estado para las materias cursadas.
  const [fechas, setFechas] = useState([""]); // Estado para las fechas de las materias.
  const [creditos, setCreditos] = useState([""]); // Estado para los créditos de las materias.
  const [docentes, setDocentes] = useState([""]); // Estado para los nombres de los docentes.
  const [mensaje, setMensaje] = useState(""); // Estado para almacenar el mensaje de confirmación.

  // Maneja el envío del formulario.
  const manejarEnvio = (e) => {
    e.preventDefault(); // Previene el comportamiento predeterminado de recargar la página.

    // Valida que todos los campos obligatorios estén completos.
    if (
      !nombre ||
      !correo ||
      materias.some((m) => !m) || // Verifica si alguna materia está vacía.
      fechas.some((f) => !f) || // Verifica si alguna fecha está vacía.
      creditos.some((c) => !c) || // Verifica si algún número de créditos está vacío.
      docentes.some((d) => !d) // Verifica si algún docente está vacío.
    ) {
      alert("Por favor, completa todos los campos obligatorios."); // Muestra un mensaje de alerta si hay campos vacíos.
      return;
    }

    // Construye un mensaje con los detalles de las materias.
    const detallesMaterias = materias.map(
      (materia, index) =>
        `${materia} (Créditos: ${creditos[index]}, Docente: ${docentes[index]}, Fecha: ${fechas[index]})`
    );

    // Establece el mensaje de confirmación.
    setMensaje(
      `Gracias, ${nombre}. Has cursado las siguientes materias: ${detallesMaterias.join(", ")}.`
    );
  };

  // Maneja los cambios en el campo de materia.
  const manejarCambioMateria = (index, valor) => {
    const nuevasMaterias = [...materias]; // Crea una copia del arreglo de materias.
    nuevasMaterias[index] = valor; // Actualiza el valor de la materia en la posición específica.
    setMaterias(nuevasMaterias); // Actualiza el estado.
  };

  // Maneja los cambios en el campo de fecha.
  const manejarCambioFecha = (index, valor) => {
    const nuevasFechas = [...fechas]; // Crea una copia del arreglo de fechas.
    nuevasFechas[index] = valor; // Actualiza el valor de la fecha en la posición específica.
    setFechas(nuevasFechas); // Actualiza el estado.
  };

  // Maneja los cambios en el campo de número de créditos.
  const manejarCambioCredito = (index, valor) => {
    const nuevosCreditos = [...creditos]; // Crea una copia del arreglo de créditos.
    nuevosCreditos[index] = valor; // Actualiza el valor de los créditos en la posición específica.
    setCreditos(nuevosCreditos); // Actualiza el estado.
  };

  // Maneja los cambios en el campo de docente.
  const manejarCambioDocente = (index, valor) => {
    const nuevosDocentes = [...docentes]; // Crea una copia del arreglo de docentes.
    nuevosDocentes[index] = valor; // Actualiza el valor del docente en la posición específica.
    setDocentes(nuevosDocentes); // Actualiza el estado.
  };

  // Agrega un nuevo conjunto de campos (materia, fecha, créditos y docente).
  const agregarCampo = () => {
    setMaterias([...materias, ""]); // Agrega un nuevo campo de materia vacío.
    setFechas([...fechas, ""]); // Agrega un nuevo campo de fecha vacío.
    setCreditos([...creditos, ""]); // Agrega un nuevo campo de créditos vacío.
    setDocentes([...docentes, ""]); // Agrega un nuevo campo de docente vacío.
  };

  return (
    <div className="container">
      <h2>Formulario de Registro</h2>
      <form onSubmit={manejarEnvio}>
        <div className="campo">
          <label>Nombre:</label>
          <input
            type="text"
            value={nombre} // Enlaza el valor del input con el estado nombre.
            onChange={(e) => setNombre(e.target.value)} // Actualiza el estado al cambiar el valor del input.
            required // Hace que este campo sea obligatorio.
          />
        </div>

        <div className="campo">
          <label>Correo Electrónico:</label>
          <input
            type="email"
            value={correo} // Enlaza el valor del input con el estado correo.
            onChange={(e) => setCorreo(e.target.value)} // Actualiza el estado al cambiar el valor del input.
            required // Hace que este campo sea obligatorio.
          />
        </div>

        <div className="campo">
          <h3>Materias Cursadas</h3>
          {materias.map((materia, index) => (
            <div className="materia-fecha" key={index}>
              <label>Materia:</label>
              <input
                type="text"
                value={materia} // Enlaza el valor del input con el estado materias.
                onChange={(e) => manejarCambioMateria(index, e.target.value)} // Actualiza el estado correspondiente al cambiar el valor.
                required // Hace que este campo sea obligatorio.
              />
              <label>Fecha:</label>
              <input
                type="date"
                value={fechas[index]} // Enlaza el valor del input con el estado fechas.
                onChange={(e) => manejarCambioFecha(index, e.target.value)} // Actualiza el estado correspondiente al cambiar el valor.
                required // Hace que este campo sea obligatorio.
              />
              <label>Número de Créditos:</label>
              <input
                type="number"
                value={creditos[index]} // Enlaza el valor del input con el estado creditos.
                onChange={(e) => manejarCambioCredito(index, e.target.value)} // Actualiza el estado correspondiente al cambiar el valor.
                required // Hace que este campo sea obligatorio.
              />
              <label>Docente:</label>
              <input
                type="text"
                value={docentes[index]} // Enlaza el valor del input con docentes.
                onChange={(e) => manejarCambioDocente(index, e.target.value)} // Actualiza el estado correspondiente
                required // Hace que este campo sea obligatorio.
              />
            </div>
          ))}
          <button type="button" onClick={agregarCampo}>
            Agregar Materia
          </button>
        </div>

        <button type="submit">Enviar</button>
      </form>

      {mensaje && <p>{mensaje}</p>} {/* Muestra el mensaje de confirmación */}
    </div>
  );
};

export default FormularioRegistro;
