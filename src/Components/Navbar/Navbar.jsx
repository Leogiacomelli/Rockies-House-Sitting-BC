import styles from "./Navbar.module.css";

import CartWidget from "../CartWidget/CartWidget";

import { Link } from "react-router-dom";

const Navbar = ({ children }) => {
  let numero = 12;
  return (
    <div>
      <div className={styles.containerNavbar}>
        <Link
          to="/"
          style={{
            fontFamily: "'Dancing Script ",
            fontSize: "1.2rem",
            color: "#e1d4c7",
            textDecoration: "none",
          }}
        >
          <img
            style={{
              height: "10vh",
              width: "25vh",
              borderBottomLeftRadius: 50,
              borderBottomRightRadius: 50,
              borderTopLeftRadius: 50,
              borderTopRightRadius: 50,
            }}
            src="https://res.cloudinary.com/dbvlup2ye/image/upload/v1679173451/Rockies_House_Sitting-logos1_jx3aaf.jpg"
            alt=""
          />
        </Link>

        <ul className={styles.containerList}>
          <Link to="/" className={styles.navbarItem}>
            All
          </Link>
          <Link to="/category/house" className={styles.navbarItem}>
            House Services
          </Link>
          <Link to="/category/dog" className={styles.navbarItem}>
            Dog Services
          </Link>
          <Link to="/customerExperiences" className={styles.navbarItem}>
            Our Customers
          </Link>
        </ul>
        <CartWidget numero={numero} />
      </div>
      {children}
    </div>
  );
};

export default Navbar;
