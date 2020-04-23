const request = require("supertest");
const server = require("../server.js");
const db = require("../data/db-config.js");

describe("GET /api/users", () => {
  it("returns 200", () => {
    return request(server)
      .get("/api/users")
      .then((res) => {
        expect(res.status).toBe(200);
      });
  });
  it("returns a list of all users", () => {
    return request(server)
      .get("/api/users")
      .then((res) => {
        expect(res.body.length).toBe(4);
      });
  });
});

describe("GET /api/users/:id", () => {
  it("returns 200", () => {
    return request(server)
      .get("/api/users/1")
      .then((res) => {
        expect(res.status).toBe(200);
      });
  });
  it("returns the user with the specified ID", () => {
    return request(server)
      .get("/api/users/1")
      .then((res) => {
        expect(res.body.name).toBe("Alice");
      });
  });
});

describe("POST /api/users", () => {
  it.todo("returns 201");
  it.todo("creates a new user in the database");
  it.todo("returns the new user to the client");
});

describe("DELETE /api/users/:id", () => {
  it.todo("returns 204");
  it.todo("deletes the user with the specified ID");
});
