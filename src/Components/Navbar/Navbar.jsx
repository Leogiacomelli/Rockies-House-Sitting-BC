/* import "./Navbar.css"; */
import styles from "./Navbar.module.css";
import imagen1 from "../imagenes/zapas.jpg";
import CartWidget from "../CartWidget/CartWidget";

const Navbar = () => {
  return (
    <div className={styles.containerNavbar}>
      <img
        src="https://assets.adidas.com/images/w_600,f_auto,q_auto/a3b3c26ba11f450a9f91ae9b00f43cb9_9366/Zapatillas_Galaxy_6_Negro_GW3847_01_standard.jpg"
        alt=""
        style={{ width: "8%", height: "10vh", objectFit: "cover" }}
      />
      <ul className={styles.containerList}>
        <li>Todas</li>
        <li>Urbanas</li>
        <li>Deportivas</li>
      </ul>
      <CartWidget />
    </div>
  );
};
export default Navbar;
