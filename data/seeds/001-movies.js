
exports.seed = async function(knex) {
	await knex("movies").truncate()
	await knex("movies").insert([
		{ name: "trolls" },
		{ name: "frozen" },
		{ name: "pets" },
		{ name: "moana" },
	])
}