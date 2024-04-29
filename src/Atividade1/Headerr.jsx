import styles from './Header.module.css';
import logo from '../assets/logo.svg';

export function Headerr() {
  return (
    <header className={styles.header}>
      <img src={logo} alt="Logotipo do Sistema de contatos" />
    </header>
  );
}