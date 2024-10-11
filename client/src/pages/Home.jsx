import { useLoaderData, Link } from "react-router-dom";
import ProgressBar from "../components/ProgressBar";
import CardNotes from "../components/CardNotes";

export default function Home() {
  const notesData = useLoaderData();
  const sport = notesData.reduce((acc, note) => acc + note.sport, 0);
  const sleep =
    notesData.reduce((acc, note) => acc + note.sleep, 0) / notesData.length;
  const mental =
    notesData.reduce((acc, note) => acc + note.mental, 0) / notesData.length;
  console.info(notesData);
  return (
    <div className="home">
      <div className="home_progress">
        <h2>Bonjour User 👋</h2>
        <h3>Voici un résumé de tes derniers jours :</h3>

        <h4>Sport :</h4>
        <ProgressBar data={sport} className="F39C12" />
        <h4>Sommeil :</h4>
        <ProgressBar data={sleep} className="D2B4DE" />
        <h4>Mental :</h4>
        <ProgressBar data={mental} className="1ABC9C" />
      </div>
      <div className="home_card">
        {notesData.map((note) => (
          <CardNotes key={note.id} note={note} />
        ))}
      </div>
      <Link className="addButton" to="/add">
        +
      </Link>
    </div>
  );
}
