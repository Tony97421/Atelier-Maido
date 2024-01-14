const AbstractManager = require("./AbstractManager");

class commandeManager extends AbstractManager {
  constructor() {
    super({ table: "commandes" });
  }

  async createCommandes(userId, bijouxId) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (userId, bijouxId) VALUES (?, ?)`,
      [userId, bijouxId]
    );
    return result;
  }

  async readCommandes(userId, bijouxId) {
    const [result] = await this.database.query(
      `ISERT INTO ${this.table} JOIN Users ON ${this.table}.usersID = user.id JOIN bijoux ON ${this.table}.bijouxId = bijoux.id WHERE userId = ?`,
      [userId, bijouxId]
    );
    return result;
  }

  async delete(userId, bijouxId) {
    const [result] = await this.database.query(
      `DELETE FROM ${this.table} WHERE userId = ? AND bijouxId = ?`,
      [userId, bijouxId]
    );
    return result;
  }
}
module.exports = commandeManager;
