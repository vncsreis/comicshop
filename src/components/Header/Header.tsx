import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>COMICSHOP</h1>
      <form>
        <input type="text" />
        <button type="button">search</button>
      </form>
    </header>
  );
}
