import NavBarStyles from "../styles/NavBar.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

const NavBar = () => {
  const router = useRouter();
  const { pid } = router.query;

  return (
    <div className={NavBarStyles.lines}>
      -------------------------------------------------------------
      <div className={NavBarStyles.navBar}>
        <Link href={pid ? !"" : "../"}>Home</Link>
        <Link href={pid ? !"" : "/tabs/aboutme"}>About Me</Link>
        <Link href={pid ? !"" : "/tabs/experience"}>Experience</Link>
        <Link href={pid ? !"" : "/tabs/funfacts"}>Fun Facts</Link>
        <Link href={pid ? !"" : "/tabs/contact"}>Contact Info</Link>
      </div>
      -------------------------------------------------------------
    </div>
  );
};

export default NavBar;
