// Este componente representa una sola tarea en la lista
// Recibe una tarea y dos funciones: una para eliminarla y otra para editarla
function TareaItem({ tarea, eliminarTarea, editarTarea }) {
  return (
    // Contenedor visual de la tarea
    <div className="tarea">
      {/* Se muestra el título de la tarea */}
      <h3>{tarea.titulo}</h3>

      {/* Se muestran los detalles de la tarea: categoría, descripción, fecha y responsable */}
      <p><strong>Categoría:</strong> {tarea.categoria}</p>
      <p><strong>Descripción:</strong> {tarea.descripcion}</p>
      <p><strong>Fecha:</strong> {tarea.fecha}</p>
      <p><strong>Responsable:</strong> {tarea.responsable}</p>

      {/* Botón para editar: al hacer clic, se pasa esta tarea para ser editada */}
      <button onClick={() => editarTarea(tarea)}>Editar</button>

      {/* Botón para eliminar: al hacer clic, se pasa el id para borrarla de la lista */}
      <button onClick={() => eliminarTarea(tarea.id)}>Eliminar</button>
    </div>
  )
}

// Hacemos que este componente pueda usarse en otros archivos
export default TareaItem
