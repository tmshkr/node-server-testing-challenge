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
  afterEach(async () => await db("users").where({ name: "Erin" }).del());
  it("returns 201", () => {
    return request(server)
      .post("/api/users")
      .send({ name: "Erin" })
      .then((res) => {
        expect(res.status).toBe(201);
      });
  });
  it("returns the new user ID to the client", async () => {
    const res = await request(server).post("/api/users").send({ name: "Erin" });
    const id = res.body;
    expect(typeof id).toBe("number");
  });

  it("creates a new user in the database", async () => {
    const res = await request(server).post("/api/users").send({ name: "Erin" });
    const id = res.body;
    const newUser = await db("users").where({ id }).first();
    expect(newUser.name).toBe("Erin");
  });
});

describe("DELETE /api/users/:id", () => {
  it.todo("returns 204");
  it.todo("deletes the user with the specified ID");
});
