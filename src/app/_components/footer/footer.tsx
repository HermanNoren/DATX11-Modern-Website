import React from "react";
import "./footer.css"; // Import the CSS file

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="text-container">
      <p className="deCube">deCube
      <a href="" className="footer-link" target="_blank" rel="noopener noreferrer">
            INSTAGRAM
          </a>
          <a href="" className="footer-link" target="_blank" rel="noopener noreferrer">
            FACEBOOK
          </a>
          <a href="" className="footer-link" target="_blank" rel="noopener noreferrer">
            LINKEDIN
          </a>
          <a href="" className="footer-link" target="_blank" rel="noopener noreferrer">
            SPOTIFY
          </a>
      </p>
      <p className="kubo"> CUBE/KUB/CUBO/KUUTIO/立方体/CUBE/KUB/CUBO/KUUTIO/立方体/CUBE/KUB/CUBO/KUUTIO/立方体 CUBO/KUUTIO/立方体/CUBE/KUB/CUBO/KUUTIO/立方体/CUBE/KUB/ 立方体 CUBE/KUB/CUBO/KUUTIO/立方体/CUBE/KUB/CUBO/KUUTIO/立方体/CUBE/KUB/CUBO/KUUTIO/ KUUTIO/立方体 CUBE/KUB/CUBO/KUUTIO/立方体/CUBE/KUB/CUBO/KUUTIO/立方体/CUBE/KUB/CUBO/KUUTIO/立方体/CUBE/KUB/CUBO/KUUTIO/立方体</p>
      <p className="copyright"> ©deCube 2025</p>
      </div>
    </footer>
  );
};

export default Footer;