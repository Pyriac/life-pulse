export default function DayNotesForm() {
  const thisDay = new Date();
  const formattedDate = thisDay.toISOString().split("T")[0];
  return (
    <div className="form">
      <h4>Notez votre :</h4>
      <label htmlFor="sport">Forme physique</label>
      <input type="number" name="sport" />
      <label htmlFor="sleep">Sommeil</label>
      <input type="number" name="sleep" />
      <label htmlFor="mental">Moral</label>
      <input type="number" name="mental" />
      <label htmlFor="date">
        Tu enregistres tes valeurs pour aujourd'hui ?
      </label>
      <input type="date" name="date" defaultValue={formattedDate} />
    </div>
  );
}
