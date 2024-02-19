import styles from "./navbar.module.css";

export default function Navbar() {
  return (
    <header>
      <nav className={styles.navbar}>
        <h1>✌️ Shady Library</h1>
        <ul>
          <li>
            <a target="_blank" href="https://github.com/Divyue30597">
              <img src="/github.svg" alt="github-icon" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/divyue-sharma-791064119/"
            >
              <img src="/linkedIn.svg" />
            </a>
          </li>
          <li>
            <a target="_blank" href="https://twitter.com/Divyue">
              <img src="/twitter.svg" />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
