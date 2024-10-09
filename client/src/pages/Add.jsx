import { Form } from "react-router-dom";

export default function Add() {
  return (
    <div>
      {" "}
      <h2>Comment c'est passé votre journée ?</h2>
      <Form method="post">
        <button type="submit">C'est noté !</button>
      </Form>
    </div>
  );
}
