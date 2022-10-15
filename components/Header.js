import headerStyles from "../styles/Header.module.css";
import NavBar from "./NavBar";
import Image from "next/image";

const Header = ({ children }) => {
  return (
    <div>
      <div>
        <h1 className={headerStyles.title}>
          <Image src="/../public/Headshot.jpg" width={500} height={250} />
          <div className={headerStyles.hello}>Hello, my name is </div>
          <span>Joshua Fendi</span>
        </h1>
      </div>
      <NavBar />
    </div>
  );
};

export default Header;
