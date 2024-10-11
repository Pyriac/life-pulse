import propTypes from "prop-types";

export default function CardNotes({ note }) {
  console.info(note.date);
  const displayDate = note.date.toString().split("T")[0];
  const [year, month, day] = displayDate.split("-");
  const formattedDate = `${day}/${month}/${year}`;
  return (
    <div className="CardNotes">
      <h3>{formattedDate}</h3>
      <p className="sportNote">{note.sport}</p>
      <p className="sleepNote">{note.sleep}</p>
      <p className="mentalNote">{note.mental}</p>
    </div>
  );
}

CardNotes.propTypes = {
  note: propTypes.shape({
    sport: propTypes.string.isRequired,
    sleep: propTypes.string.isRequired,
    mental: propTypes.string.isRequired,
    date: propTypes.string.isRequired,
  }).isRequired,
};
