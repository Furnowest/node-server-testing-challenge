const supertest = require("supertest")
const { intersect } = require("../data/config")
const server = require("../server")

describe(" integration tests", () => {
	it("gets a list of movies", async () => {
		const res = await supertest(server).get("/movies")
		expect(res.statusCode).toBe(200)
		expect(res.body.length).toBeGreaterThanOrEqual(4)
		expect(res.body[0].title).toBe("trollz")
    })
    
})