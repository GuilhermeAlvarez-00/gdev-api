import { describe, test, expect } from "vitest"
import { User } from "../user.entity"

describe("User Entity", () => {
  test("should not create an user without name, email and password", () => {
    expect(() => {
      const userData = {
        name: "Jhon Doe",
        email: "",
        password: "123"
      }
      User.create(userData);
    }).toThrow("Missing required fields name, email and password");
  })
})


