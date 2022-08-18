const fs = require('fs');
const sequelize = require('./index');

const models = {};

const modelFiles = fs
	.readdirSync("./models")
	.filter((file) => file.endsWith(".js"));

for (const file of modelFiles) {
	const name = `${file.split(".")[0]}`;
	const model = require(`../models/${file}`)(sequelize);
	if (!model) continue;
	models[name] = model;
	console.log(`[DB] ${name} Model Loaded `);
}

(async () => {
	await sequelize.sync();
	console.log("Database synced successfully");
})();


module.exports = models;