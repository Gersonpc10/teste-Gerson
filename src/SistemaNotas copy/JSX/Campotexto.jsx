import '../CSS/Campotexto.css'

export const CampoTexto = (props) => {


    /*let valor = ""  let é para declara uma variável que pode ser alterado ao longo do códgo
    se começar vazio, o stat começa do vazio*/

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)  /*pegar o valor digitado - target é um "evento" do javascript, existem 
diversos eventos javascript*/
    }         
    
    return(
        <div className="campo-texto">
            <label>{props.label}</label>
            <input 
            value={props.valor} 
            onChange={aoDigitado} 
            required={props.obrigatorio} 
            placeholder={props.placeholder}
            />
            
        </div>
    );
}