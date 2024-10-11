const AbstractRepository = require("./AbstractRepository");

class DayNotesRepository extends AbstractRepository {
  constructor() {
    super({ table: "dayNotes" });
  }

  async create(DayNotes) {
    const [result] = await this.database.query(
      `insert into ${this.table} (sport, sleep, mental, date, user_id) values (?, ?, ?, ?, ?)`,
      [
        DayNotes.sport,
        DayNotes.sleep,
        DayNotes.mental,
        DayNotes.date,
        DayNotes.user_id,
      ]
    );
    return result.insertId;
  }

  async read(id) {
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );
    return rows[0];
  }

  async readAll(userId) {
    const [rows] = await this.database.query(
      `select * from ${this.table} where user_id = ${userId} order by date desc`
    );
    return rows;
  }

  async update(DayNotes) {
    const [result] = await this.database.query(
      `update ${this.table} set sport = ?, sleep = ?, mental = ? where date = ?`,
      [DayNotes.sport, DayNotes.sleep, DayNotes.mental, DayNotes.date]
    );
    return result.insertId;
  }

  async delete(id) {
    const [result] = await this.database.query(
      `delete from ${this.table} where id = ?`,
      [id]
    );
    return result.affectedRows;
  }
}

module.exports = DayNotesRepository;
