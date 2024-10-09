import { useLoaderData } from "react-router-dom";

export default function Home() {
  const notesData = useLoaderData();
  const sport = notesData.reduce((acc, note) => acc + note.sport, 0);
  const sleep =
    notesData.reduce((acc, note) => acc + note.sleep, 0) / notesData.length;
  const mental =
    notesData.reduce((acc, note) => acc + note.mental, 0) / notesData.length;
  console.info(notesData);
  return (
    <>
      <h2>Bonjour User 👋</h2>
      <h3>Comment ce sont passés tes derniers jours :</h3>
      <h4>{sport}</h4>
      <h4>{sleep}</h4>
      <h4>{mental}</h4>
    </>
  );
}
