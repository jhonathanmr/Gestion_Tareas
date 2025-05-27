// Importamos funciones de React para listar las tareas y el formulario
import { useState } from 'react'
import FormularioTarea from './componentes/FormularioTarea'
import ListaTareas from './componentes/ListaTareas'

function App() {
  // Lista de tareas en memoria
  const [tareas, setTareas] = useState([])

  // Tarea que se está editando (null si no hay)
  const [tareaEnEdicion, setTareaEnEdicion] = useState(null)

  // Texto para el filtro
  const [filtro, setFiltro] = useState('')

  // Función para agregar o actualizar una tarea
  const guardarTarea = (tarea) => {
    if (tarea.id) {
      // Si la tarea ya tiene ID, es una edición
      setTareas(tareas.map(t => t.id === tarea.id ? tarea : t))
    } else {
      // Si no tiene ID, es nueva
      tarea.id = Date.now()
      setTareas([...tareas, tarea])
    }
    // Limpiar la tarea en edición
    setTareaEnEdicion(null)
  }

  // Eliminar una tarea
  const eliminarTarea = (id) => {
    setTareas(tareas.filter(t => t.id !== id))
  }

  // Establecer la tarea que se quiere editar
  const editarTarea = (tarea) => {
    setTareaEnEdicion(tarea)
  }

  // Aplicar el filtro a las tareas
  const tareasFiltradas = tareas.filter(t =>
    t.titulo.toLowerCase().includes(filtro.toLowerCase()) ||
    t.categoria.toLowerCase().includes(filtro.toLowerCase())
  )

  return (
    <div className="contenedor">
      <div className="logo">
        <img src="/src/assets/logo.png" alt="Logo de Gestión de Tareas" className="logo-img" />
      </div>
      <h1>Gestión de Tareas</h1>

      <FormularioTarea
        guardarTarea={guardarTarea}
        tareaEnEdicion={tareaEnEdicion}
      />

      <input
        type="text"
        placeholder="Buscar por título o categoría..."
        value={filtro}
        onChange={e => setFiltro(e.target.value)}
      />

      <ListaTareas
        tareas={tareasFiltradas}
        eliminarTarea={eliminarTarea}
        editarTarea={editarTarea}
      />
    </div>
  )
}

export default App
