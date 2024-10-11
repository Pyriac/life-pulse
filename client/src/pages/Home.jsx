import { useState, useEffect } from "react";
import { useLoaderData, Link } from "react-router-dom";
import ProgressBar from "../components/ProgressBar";
import CardNotes from "../components/CardNotes";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const notesData = useLoaderData();
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);
  const sport = notesData.reduce((acc, note) => acc + note.sport, 0);
  const sleep =
    notesData.reduce((acc, note) => acc + note.sleep, 0) / notesData.length;
  const mental =
    notesData.reduce((acc, note) => acc + note.mental, 0) / notesData.length;
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
      <div className={`home_card ${isVisible ? "visible" : ""}`}>
        {notesData.map((note) => (
          <Link key={note.id} to={`/daynotes/${note.id}`}>
            <CardNotes note={note} />
          </Link>
        ))}
      </div>
    </div>
  );
}
