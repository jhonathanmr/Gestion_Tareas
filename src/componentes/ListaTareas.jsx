// Importamos el componente que muestra cada tarea individualmente
import TareaItem from './TareaItem'

// Este componente muestra la lista completa de tareas
// Recibe la lista de tareas y las funciones para eliminar o editar una tarea
function ListaTareas({ tareas, eliminarTarea, editarTarea }) {
  return (
    <div>
      {/* Título del listado */}
      <h2>Lista de Tareas</h2>

      {/* Condicional: si no hay tareas, muestra un mensaje */}
      {tareas.length === 0 ? (
        <p>No hay tareas.</p>
      ) : (
        // Si hay tareas, las recorremos con map para mostrar cada una usando el componente TareaItem
        tareas.map(tarea => (
          <TareaItem
            // La propiedad key ayuda a React a identificar cada elemento único en la lista
            key={tarea.id}
            // Pasamos la tarea completa para mostrar sus datos
            tarea={tarea}
            // Pasamos la función para eliminar una tarea
            eliminarTarea={eliminarTarea}
            // Pasamos la función para editar una tarea
            editarTarea={editarTarea}
          />
        ))
      )}
    </div>
  )
}

// Exportamos el componente para poder usarlo en otros archivos
export default ListaTareas
