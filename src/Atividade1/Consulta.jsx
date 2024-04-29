import { Contato } from "./Contato";

const contatos = [
    {
        nome: 'Joelma Ferreira',
        endereco: '"Rua 17, 896"',
        telefone: "99856587" 
    },
    {
        nome: 'Diego Fernandes',
        endereco: 'Rua das Flores, 12',
        telefone: "89545588" 
    },
    {
        nome: 'Pablo Picasso',
        endereco: 'Avenida das Nações',
        telefone: "96578541" 
    },
  ];

export function Consulta(){
    return(
        <div>
            <h2> Lista de Contatos </h2>
            {contatos.map((contato, index) => {
                return (
                    <Contato 
                        key={index}
                        nome={contato.nome} 
                        endereco={contato.endereco}  
                        telefone={contato.telefone} 
                    />
                )
            })}
        </div>
    );
}