import '../CSS/ListaSuspensa.css'


export const ListaSuspensa = (props) =>{

    return(
        <div className="lista-suspensa">
            <label>{props.label}</label>
            <select onChange={evento => props.aoAlterado(evento.target.value)} value={props.value} required={props.required} value={props.value}>
                {props.itens.map(item=>{
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>


    )
}