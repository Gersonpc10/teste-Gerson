
import styles from './Sidebar.module.css';
import dev from '../assets/developer.png';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src={dev}/>
      <div className={styles.profile}>
        <strong>Mônica Andrade</strong>
        <span>Front-End</span>
      </div>
    </aside>
  );
}