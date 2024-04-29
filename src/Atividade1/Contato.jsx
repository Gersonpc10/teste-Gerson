import styles from './Contato.module.css'

export function Contato(props){
    return(
        <div>
            <div className={styles.content}>
                <div className={styles.field}><p><strong>Nome:</strong> {props.nome}</p></div>
                <div className={styles.field}><p><strong>Endereço:</strong> {props.endereco}</p></div>
                <div className={styles.field}><p><strong>Telefone:</strong> {props.telefone}</p></div>
                <br/>
            </div>
        </div>
    );
}