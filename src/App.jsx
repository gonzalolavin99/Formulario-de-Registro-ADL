import './App.css'
import Registro from './components/Registro'
import Formulario from './components/Formulario'

function App() {


  return (
    <div className='form-control formu'>
     <h1>Crea una cuenta</h1>
     <div>
      <Registro></Registro>
      <Formulario></Formulario>
      </div>
    </div>
  )
}

export default App
