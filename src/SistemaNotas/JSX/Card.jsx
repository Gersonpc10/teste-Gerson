import React from 'react';
import styles from '../CSS/Card.module.css';




const CardNovo = ({ nome, situacao, notafinal }) => {


  return (
    <div className={styles.container}>
      <h2>Resultado Final das Notas</h2>
      <p>Nome: {nome}</p>
      <p>Situação: {situacao}</p>
      <p>Nota Final: {notafinal}</p>
    </div>
  );
}



export default CardNovo;