import { useState } from 'react'
import { BannerOrgano } from './Banner'
import { Botao } from './Botao'
import { CampoTexto } from './Campotexto'
import { ListaSuspensa } from './ListaSuspensa'

export const Formulario2 = (props) =>{
    const times = ['PROGRAMAÇÃO','FRONT-END','DATA SCIENCE','DEVOPS','UX E DESIGN','MOBILE','INOVAÇÃO E GESTÃO']
    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')

/*ao clicar no botão vai chamar a função, impedindo
do navegador render a pág. ficando a cargo do botão*/
    const aoSalvar =(evento) =>{ /*"evento" incluido p/ impedir que a pag atualize por padrão*/
        evento.preventDefault()
        console.log('Form foi submetido => ', nome, cargo, imagem)  /*essa msg deve aparecer no console quando todos os campos OBRIGATORIOS forem preenchidos */
        }
    return(
        <section>
            <form onSubmit={aoSalvar}>
                <header>
                    <BannerOrgano/>
                    <CampoTexto valor={nome} aoAlterado={valor => setNome(valor)} obrigatorio={true} label="Nome" placeholder="Digite seu Nome"/>
                    <CampoTexto valor={cargo} aoAlterado={valor => setCargo(valor)} obrigatorio={true} label="Cargo" placeholder="Digite seu Cargo"/>
                    <CampoTexto valor={imagem} aoAlterado={valor => setImagem(valor)} label="Imagem" placeholder="Digite seu Imagem"/>
                    <ListaSuspensa obrigatorio={true} label="Time" itens={times}/>
                    <Botao texto="Criar Card"/>
                </header>
            </form>
        </section>
        
    )
}
