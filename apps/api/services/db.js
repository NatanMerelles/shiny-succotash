const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database(':memory:')

function query(sql, params) {
  return []
}

module.exports = {
  query,
}
