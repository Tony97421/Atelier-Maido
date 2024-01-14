const AbstractManager = require("./AbstractManager");

class bijouxManager extends AbstractManager {
  constructor() {
    super({ table: "bijoux" });
  }

  async readAll() {
    const [result] = await this.database.query(`SELECT * FROM ${this.table}`);
    return result;
  }
}

module.exports = bijouxManager;
