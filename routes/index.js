const fs = require("fs");
const router = require("express").Router();

const Files = fs
  .readdirSync("./src/routes")
  .filter((file) => file.endsWith(".js"));

for (const file of Files) {
  const route = require(`./${file}`);
  const path = file.split(".")[0];
  if (path === "index") continue;
  console.log(path);
  router.use(`/${path}`, route);
}

module.exports = router;