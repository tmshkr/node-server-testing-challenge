const request = require("supertest");
const server = require("./server.js");
const db = require("./data/db-config.js");

describe("server.js", () => {
  it("GET / returns 200", () => {
    return request(server)
      .get("/")
      .then((res) => {
        expect(res.status).toBe(200);
      });
  });
});
