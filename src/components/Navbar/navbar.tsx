import Container from "../Container/container";
import Heading from "../Heading/heading";
import styles from "./navbar.module.css";

const navbarObj = [
  {
    socialMedia: "github",
    href: "https://github.com/Divyue30597",
    src: "/github.svg",
    alt: "github-icon",
  },
  {
    socialMedia: "linkedIn",
    href: "https://www.linkedin.com/in/divyue-sharma-791064119/",
    src: "/linkedIn.svg",
    alt: "linkedIn-icon",
  },
  {
    socialMedia: "Twitter",
    href: "https://twitter.com/divyue",
    src: "/twitter.svg",
    alt: "twitter-icon",
  },
];

export default function Navbar() {
  return (
    <Container>
      <header>
        <nav className={styles.navbar}>
          <Heading
            className={styles.heading}
            heading="h1"
            headingText=" ✌️ Shady Fluent Library"
            fontSize="32px"
          />
          <ul>
            {navbarObj.map((navbar) => {
              return (
                <li key={navbar.socialMedia}>
                  <a target="_blank" href={navbar.href}>
                    <img src={navbar.src} alt={navbar.alt} />
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
    </Container>
  );
}
