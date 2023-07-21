const { getUserTable } = require("./app");

function test1() {
  console.log("Length should be 3");
  if (getUserTable(["Name 1", "Name 2", "Name 3"]).table.rows.length !== 3)
    throw new Error("Length should be 3");
}

test1();
