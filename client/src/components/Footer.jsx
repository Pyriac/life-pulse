import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="Footer">
      <Link to="/" alt="Accueil" className="emoji">
        🏠
      </Link>
      <Link className="addButton" to="/add">
        +
      </Link>
      <Link to="/" alt="profil" className="emoji">
        🙋‍♂️
      </Link>
    </div>
  );
}
