import { Form } from "react-router-dom";
import DayNotesForm from "../components/DayNotesForm";

export default function Add() {
  return (
    <div className="add">
      {" "}
      <h2>Comment c'est passé votre journée ?</h2>
      <Form method="post">
        <DayNotesForm />
        <button type="submit" className="createButton">
          C'est noté !
        </button>
      </Form>
    </div>
  );
}
