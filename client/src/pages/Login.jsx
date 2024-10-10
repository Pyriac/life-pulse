import { Form, Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <h1>Bienvenue sur LifePulse</h1>
      <h2>HealthTracker</h2>
      <Form>
        <h3>Se Connecter</h3>
        <label htmlFor="email">email</label>
        <input type="email" />
        <label htmlFor="password">mot de passe</label>
        <input type="password" />
        <button type="submit">Connexion</button>
      </Form>
      <p>Vous n'avez pas encore de compte ?</p>
      <Link to="/newaccount">Cliquez ici</Link>
    </>
  );
}
