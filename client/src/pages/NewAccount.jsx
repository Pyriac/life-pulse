import { Form } from "react-router-dom";

export default function NewAccount() {
  return (
    <>
      <h1>Bienvenue sur LifePulse</h1>
      <h2>HealthTracker</h2>
      <Form method="post">
        <div className="form">
          <h3>Créer un compte</h3>
          <label htmlFor="email">Entre votre Email</label>
          <input type="email" name="email" />
          <label htmlFor="password">Mot de passe</label>
          <input type="password" name="password" />
          <label htmlFor="confirmPassword">Confirmez le mot de passe</label>
          <input type="password" name="confirmPassword" />
          <button type="submit">Créer compte</button>
        </div>
      </Form>
    </>
  );
}
