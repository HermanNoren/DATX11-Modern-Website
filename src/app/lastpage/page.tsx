import "./lastpage.css";
import Link from "next/link";
import { Boxes } from "lucide-react";

function LastPage() {
  return (
    <div className="last-page">
      <div className="thanks-container">
        <div className="decube-logo-end">
          <Boxes strokeWidth={1} className="logo-icon" />
        </div>
        <p className="thank-you">
          Thank you for
          <br />
          checking out deCube!
        </p>
        <p className="press-button">
          Press the button below to get to the start of the site
        </p>
        <Link href="/home" className="decube-button">
          <button className="deCube-button">deCube.com</button>
        </Link>
      </div>

      <div className="margin">.</div>
    </div>
  );
}

export default LastPage;