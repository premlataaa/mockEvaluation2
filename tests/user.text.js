const app = require("../index");
const request = require("superjest");
const mongoose = require("mongoose");

beforeAll (async()=>{
    await mongoose.connect(process.env.MONGO_URL)
})

describe("User Routes", () => {
    it("should register a new user", async () => {
      const res = await request(app).post("/users/register").send({
        name: "John Doe",
        email: "john@example.com",
        password: "password",
        mobileNumber: "1234567890",
        gender: "male",
        role: "customer"
      });
      expect(res.statusCode).toEqual(201);
      expect(res.body).toHaveProperty("email", "john@example.com");
    });
  
    it("should not register user with existing email", async () => {
      const res = await request(app).post("/api/users/register").send({
        name: "Jane Doe",
        email: "john@example.com",
        password: "password",
        mobileNumber: "1234567890",
        gender: "female",
        role: "customer"
      });
      expect(res.statusCode).toEqual(400);
    });
  });