import NavBarStyles from "../styles/NavBar.module.css";

const NavBar = () => {
  return (
    <div className={NavBarStyles.lines}>
      -------------------------------------------------------------
      <div className={NavBarStyles.navBar}>
        <a href="#aboutme_page">About Me</a>
        <a href="#projects_page">Projects</a>
        <a href="#experience_page">Experience & Skills</a>
        <a href="#funfacts_page">Fun Facts</a>
        <a href="#contact_page">Contact Info</a>
      </div>
      -------------------------------------------------------------
    </div>
  );
};

export default NavBar;
