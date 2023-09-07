import { BsGithub, BsLinkedin } from "react-icons/bs";
import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <a
          href="https://linkedin.com/in/bolaghaly"
          target="_blank"
          rel="noreferrer"
          title="Bola Ghaly's Linkedin Profile"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/BolaGhaly"
          target="_blank"
          rel="noreferrer"
          title="Bola Ghaly's GitHub Profile"
        >
          <BsGithub />
        </a>
      </div>
      <p>&copy; 2023 by Bola Ghaly</p>
      <div>
        <a
          href="https://github.com/BolaGhaly/Admin-Dashboard/blob/main/LICENSE"
          target="_blank"
          rel="noreferrer"
          title="License"
        >
          License
        </a>
        <a
          href="https://github.com/BolaGhaly/Admin-Dashboard/blob/main/README.md"
          target="_blank"
          rel="noreferrer"
          title="Documentation"
        >
          Documentation
        </a>
      </div>
    </footer>
  );
};

export default Footer;
