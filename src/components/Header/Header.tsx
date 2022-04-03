import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>
        COMIC<span className={styles.accent}>SHOP</span>
      </h1>
      <form>
        <input type="text" />
        <button type="button">search</button>
      </form>
    </header>
  );
}
