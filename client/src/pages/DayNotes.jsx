import { useState } from "react";
import { useLoaderData, Form } from "react-router-dom";

export default function DayNotes() {
  const [style, setStyle] = useState("hidden");
  const dayNote = useLoaderData();
  const displayDate = dayNote.date.toString().split("T")[0];
  const [year, month, day] = displayDate.split("-");
  const formattedDate = `${day}/${month}/${year}`;
  return (
    <>
      <div className="form">
        <h2>Voici tes notes du {formattedDate}</h2>
        <ul>
          <li>Sport : {dayNote.sport}</li>
          <li>Sommeil : {dayNote.sleep}</li>
          <li>Mental : {dayNote.mental}</li>
        </ul>
        <p>Tu veux changer tes notes ?</p>

        <button type="button" onClick={() => setStyle("form")}>
          Yep
        </button>
      </div>
      <div>
        <Form method="put">
          <div className={style}>
            <label htmlFor="sport">Sport :</label>
            <input type="number" name="sport" defaultValue={dayNote.sport} />
            <label htmlFor="sleep">Sommeil :</label>
            <input type="number" name="sleep" defaultValue={dayNote.sleep} />
            <label htmlFor="mental">Moral :</label>
            <input type="number" name="mental" defaultValue={dayNote.mental} />

            <button type="submit">Mettre à jour</button>
          </div>
        </Form>
        <Form method="delete" className={style}>
          <button type="submit">Supprimer</button>
        </Form>
      </div>
    </>
  );
}
