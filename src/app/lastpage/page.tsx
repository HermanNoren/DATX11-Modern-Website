import "./lastpage.css";
import Link from "next/link";

function LastPage() {
  return (
    <div className="last-page">
      <div className="last-header">deCube</div>
      <div className="thanks-container">
        <img src="/cube.png" alt="Cube" className="cube-image" />
        <p className="thank-you">
          Thank you for
          <br />
          checking out deCube!
        </p>
        <p className="press-button">
          Press the button below to get to the start of the site
        </p>
        <Link href="/homepage" className="decube-button">
          <button className="deCube-button">deCube.com</button>
        </Link>
      </div>

      <div className="margin">.</div>
    </div>
  );
}

export default LastPage;
