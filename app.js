const { Table } = require("console-table-printer");

function getUserTable(users) {
  const table = new Table();

  users.forEach((userName, index) =>
    table.addRow({
      userName: userName,
      index: index,
    })
  );

  return table;
}

module.exports = {
  getUserTable: getUserTable,
};
