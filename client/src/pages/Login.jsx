import { Form, Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <h1>Bienvenue sur LifePulse</h1>
      <h2>HealthTracker</h2>
      <Form method="post">
        <div className="form">
          <h3>Se Connecter</h3>
          <label htmlFor="email">email</label>
          <input type="email" name="email" />
          <label htmlFor="password">mot de passe</label>
          <input type="password" name="password" />
          <button type="submit">Connexion</button>
        </div>
      </Form>
      <div className="form">
        <p>Vous n'avez pas encore de compte ?</p>
        <Link to="/newaccount">Cliquez ici</Link>
      </div>
    </>
  );
}
