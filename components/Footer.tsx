import { GrGithub, GrLinkedin } from "react-icons/gr";

const Footer = () => {
  return (
    <footer>
      <div className="footer-icons">
        <a
          href="https://linkedin.com/in/bolaghaly"
          target="_blank"
          rel="noreferrer"
          className="footer-linkedin-logo"
          title="Bola Ghaly's Linkedin Profile"
        >
          <GrLinkedin />
        </a>
        <a
          href="https://github.com/BolaGhaly"
          target="_blank"
          rel="noreferrer"
          className="footer-github-logo"
          title="Bola Ghaly's GitHub Profile"
        >
          <GrGithub />
        </a>
      </div>
      <p>Copyright &copy; 2023 by Bola Ghaly. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
