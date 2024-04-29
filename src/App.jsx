import {Routes, Route, Link} from "react-router-dom";
import { Formulario } from './SistemaNotas/JSX/Formulario'
import { Formulario2 } from './SistemaNotas copy/JSX/Formulario2'

export function App() {
  return (
    <>
        <div>Atividades do Curso</div>
        <Link to="/Formulario">SISTEMA DE NOTAS</Link>
        <p></p>
        <Link to="/Formulario2">ORGANO</Link>
        <p></p>
        <div>
          <main>
            <Routes>
                <Route path="Formulario" element={<Formulario/>} />
                <Route path="Formulario2" element={<Formulario2/>} />
            </Routes>
          </main>
        </div>
    </>
  )
}