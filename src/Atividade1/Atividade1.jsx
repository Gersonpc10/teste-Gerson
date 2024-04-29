import {Routes, Route} from "react-router-dom";
import Home from './Home';
import Cadastro from './Cadastro';
import Consulta from './Consulta';
import Header from "./Headerr";
import Sidebar from "./Sidebar";

export function Atividade1() {
  return (
    
    <div>
      
        <div>
          <main>
            <Header/>
            <Sidebar/>
          </main>
        </div>
    </div>
  )
}