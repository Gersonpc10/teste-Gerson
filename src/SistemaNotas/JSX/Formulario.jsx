import '../CSS/Formulario.css'
import styles from '../CSS/Header.module.css'
import { useState } from 'react';
import CardNovo from './Card';

export const Formulario = (props) =>{

    const[nome, setNome]= useState();
    const[valor1, setValor1]= useState();
    const[valor2, setValor2]= useState();
    const [cards, setCards] = useState([]);
    const handlechange3 = Event => setNome(Event.target.value);
    const handlechange1 = Event => setValor1(Event.target.value);
    const handlechange2 = Event => setValor2(Event.target.value);
    
    
    const calcular = () => {
        const situacao = valor1/2 + valor2/2 >= 7 ? 'Aprovado' : 'Reprovado';
        const notafinal = valor1/2+valor2/2 ;
        const newCard = { nome, situacao, notafinal };
        setCards([...cards, newCard]);
    };
    return(
        <div className='campo-texto'>
            <label>
                {props.label}
            </label>
            <div className={styles.header}>
                <p>Sistema de Notas</p>
            </div>
            <p></p>

            Nome
            <input placeholder='Insira o nome do aluno'
                type='text'
                value={nome}
                onChange={handlechange3}
            />
            Nota 1
            <input 
                placeholder='Insira a 1º nota'
                value={valor1}
                onChange={handlechange1}
            />
            Nota 2
            <input 
                placeholder='Insira a 2º nota'
                value={valor2}
                onChange={handlechange2}
            />
            <button onClick={calcular}>
                Calcular Nota
            </button>
            {cards.map((card, index) => (
                <p key={index}><CardNovo 
                    nome={<span style={{color: 'blue'}}>{card.nome}</span>}  
                    situacao={<span style={{color: card.situacao === 'Aprovado' ? 'green' : 'red'}}>{card.situacao}</span>}  
                    notafinal={<span style={{color: card.situacao === 'Aprovado' ? 'green' : 'red'}}>{card.notafinal}</span>}  
                    />
                </p>
            ))}
            
        </div>
    )
}
