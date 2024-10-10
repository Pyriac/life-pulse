const AbstractRepository = require("./AbstractRepository");

class UserRepository extends AbstractRepository {
  constructor() {
    super({ table: "user" });
  }

  async read(id) {
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );
    return rows[0];
  }

  async readByEmail(email) {
    const [rows] = await this.database.query(
      `select * from ${this.table} where email = ?`,
      [email]
    );
    return rows[0];
  }

  async create(user) {
    const [result] = await this.database.query(
      `insert into ${this.table} (email, password) values (?, ?)`,
      [user.email, user.hashedPassword]
    );
    return result.insertId;
  }
}

module.exports = UserRepository;
