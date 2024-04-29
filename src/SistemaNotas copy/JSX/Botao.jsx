import '../CSS/Botao.css'

export const Botao =(props) =>{
    return(
        <button className="botao">
            {props.texto}
        </button>
    )
}


/*eu poderia substiruir o
"{props.texto}" por "{props.children}"
isso quer dizer que lá no formulario eu poderia colocar por exemplo
uma imagem/ícone ao invés do botão.
e la no  formulario eu poderia substituir o
<Botao texto="Criar Card"/>
por
<Botao> 
    Criar Card
</ Botao>
Assim tudo que tiver la dentro da tag botao será clicável
*/