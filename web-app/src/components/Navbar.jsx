import { Link, Outlet } from "react-router-dom";

const Navbar = () => {

  const styles = {
    link: {
      color: "maroon",
      fontFamily: "Century Gothic",
      paddingRight: 20,
      fontSize: 20,
    },
    navbar: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      paddingInline: 5,
      backgroundColor: "lightgray",
    },
    title: {
      align: "left",
      color: "black",
      fontFamily: "century",
      paddingInline: 20,
      fontWeight: "bold",
    },
  };

  return (
    <div>
      <div style={styles.navbar}>
        <h3 style={styles.title}>SMARTCERTIFY</h3>
        <nav>
          <Link to="/" style={styles.link}>Home</Link>
        </nav>
      </div>
      <Outlet />
    </div>
  );
};

export default Navbar;