import React from "react";
import { Container } from "reactstrap";
import logo from "assets/img/logo.jpg"; // Adjust the path according to your project structure

const styles = {
  footer: {
    padding: '20px 0',
    backgroundColor: '#ada397', // Example background color
  },
  nav: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: '100px',
    height: '100px',
  },
};

function Footer() {
  return (
    <footer style={styles.footer}>
      <Container>
        <nav style={styles.nav}>
          <ul>
            <li>
              <img src={logo} alt="Logo" style={styles.img} />
            </li>
          </ul>
        </nav>
      </Container>
    </footer>
  );
}

export default Footer;
