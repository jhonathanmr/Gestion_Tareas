// Importamos funciones de React para manejar estados y efectos
import { useState, useEffect } from 'react'

// Este componente se encarga de mostrar el formulario de tareas
function FormularioTarea({ guardarTarea, tareaEnEdicion }) {
  // Estas variables almacenan lo que el usuario escribe en el formulario
  const [titulo, setTitulo] = useState('')
  const [categoria, setCategoria] = useState('')
  const [descripcion, setDescripcion] = useState('')
  const [fecha, setFecha] = useState('')
  const [responsable, setResponsable] = useState('')
  const [id, setId] = useState(null) // Se usa para saber si es una tarea nueva o editada

  // Variables para trabajar con los datos que vienen de Internet (API)
  const [usuarios, setUsuarios] = useState([])            // Lista de personas que serán responsables
  const [cargandoUsuarios, setCargandoUsuarios] = useState(true)  // Si se están cargando los datos
  const [errorUsuarios, setErrorUsuarios] = useState(false)       // Si ocurrió un error al traer los datos

  // Este bloque se ejecuta una sola vez cuando se muestra el formulario
  // Se encarga de traer la lista de usuarios desde la API pública
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users') // Pedimos los datos
      .then(res => res.json())                          // Los convertimos a un formato que JavaScript entienda
      .then(data => {
        setUsuarios(data)        // Guardamos los usuarios
        setCargandoUsuarios(false) // Ya no estamos cargando
      })
      .catch(() => {
        setErrorUsuarios(true)    // Si ocurre un error, lo indicamos
        setCargandoUsuarios(false)
      })
  }, [])

  // Este bloque se ejecuta si se está editando una tarea ya existente
  useEffect(() => {
    if (tareaEnEdicion) {
      // Llenamos los campos del formulario con los datos de la tarea que se quiere editar
      setTitulo(tareaEnEdicion.titulo)
      setCategoria(tareaEnEdicion.categoria)
      setDescripcion(tareaEnEdicion.descripcion)
      setFecha(tareaEnEdicion.fecha)
      setResponsable(tareaEnEdicion.responsable)
      setId(tareaEnEdicion.id)
    }
  }, [tareaEnEdicion])

  // Esta función se ejecuta cuando el usuario envía el formulario
  const manejarEnvio = (e) => {
    e.preventDefault() // Evita que la página se recargue al enviar el formulario

    // Verificamos que todos los campos necesarios estén completos
    if (!titulo || !categoria || !fecha || !responsable) {
      alert('Por favor completa todos los campos obligatorios.')
      return
    }

    // Llamamos a la función que guarda la tarea (viene del componente principal)
    guardarTarea({ id, titulo, categoria, descripcion, fecha, responsable })

    // Limpiamos el formulario
    setTitulo('')
    setCategoria('')
    setDescripcion('')
    setFecha('')
    setResponsable('')
    setId(null)
  }

  // Lo que el componente muestra en pantalla
  return (
    <form onSubmit={manejarEnvio}>
      <h2>{id ? "Editar Tarea" : "Nueva Tarea"}</h2>

      {/* Campo para el título */}
      <input
        type="text"
        placeholder="Título"
        value={titulo}
        onChange={e => setTitulo(e.target.value)}
      />

      {/* Campo para la categoría */}
      <input
        type="text"
        placeholder="Categoría"
        value={categoria}
        onChange={e => setCategoria(e.target.value)}
      />

      {/* Campo para la descripción */}
      <textarea
        placeholder="Descripción"
        value={descripcion}
        onChange={e => setDescripcion(e.target.value)}
      ></textarea>

      {/* Campo para seleccionar una fecha */}
      <input
        type="date"
        value={fecha}
        onChange={e => setFecha(e.target.value)}
      />

      {/* Campo para seleccionar un responsable de una lista que viene desde la API */}
      <label htmlFor="responsable">Responsable</label>
      {cargandoUsuarios ? (
        <p>Cargando responsables...</p> // Mensaje mientras los datos se están cargando
      ) : errorUsuarios ? (
        <p style={{ color: 'red' }}>Error al cargar los responsables.</p> // Mensaje si hay un error
      ) : (
        <select
          id="responsable"
          value={responsable}
          onChange={e => setResponsable(e.target.value)}
          className="campo-select"
        >
          <option value="">-- Selecciona un responsable --</option>
          {usuarios.map(usuario => (
            <option key={usuario.id} value={usuario.name}>
              {usuario.name}
            </option>
          ))}
        </select>
      )}

      {/* Botón para enviar el formulario */}
      <div className="centrar">
        <button type="submit">{id ? "Actualizar" : "Agregar"}</button>
      </div>
    </form>
  )
}

// Exportamos el componente para que se pueda usar en otros archivos
export default FormularioTarea
