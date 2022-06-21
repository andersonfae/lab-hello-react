import IronLogo from "../../assets/images/ironhack-logo-xs.png";
import IronBar from "../../assets/images/menu-top-xs.png";
import style from "../Navbar/style.module.css";

function Navbar() {
  return (
    <nav className={style.container}>
      <img src={IronLogo} alt="logo" />
      <img src={IronBar} alt="logo" />
    </nav>
  );
}
