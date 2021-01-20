const test = require("tape");
const faker = require("faker");
const db = require("../src/config/database");

test("timing test", function (t) {
  t.plan(3);

  t.equal(typeof Date.now, "function");
  const name = faker.name.findName();
  const email = faker.internet.email();
  t.equal(typeof name, "string");
  db.run(`INSERT INTO table1 (name, email) VALUES (?,?)`, [
    name,
    email,
  ]);
  db.get(`SELECT email FROM table1 WHERE name = ?`, name, (err, rows)=> {
    if (err) {
      console.error(err)
    }
    t.equal( email, rows.email);
  });
});
