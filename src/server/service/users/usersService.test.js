import { afterEach, beforeEach, describe, expect, it } from "vitest";
import sinon from "sinon";
import User from "../../model/User";
import { getByUsername, create } from "./usersService";

describe("Should test getByUsername function", () => {
  let findOneStub;

  beforeEach(() => {
    findOneStub = sinon.stub(User, "findOne");
  });
  afterEach(() => {
    findOneStub.restore();
  });

  it("Should return a 404 error", async () => {
    findOneStub.withArgs({ username: "test" }).resolves(null);
    await expect(getByUsername("test")).rejects.toThrow("User not found");
  });

  it("Should return user", async () => {
    findOneStub.withArgs({ username: "test" }).resolves({
      username: "test",
      email: "toto",
    });
    const user = await getByUsername("test");

    expect(user).toBeDefined();
    expect(user.username).toBe("test");
    expect(user.email).toBe("toto");
  });
});

describe("Should test create function", () => {
  let existsStub;
  let saveStub;

  beforeEach(() => {
    existsStub = sinon.stub(User, "exists");
    saveStub = sinon.stub(User.prototype, "save");
  });
  afterEach(() => {
    existsStub.restore();
    saveStub.restore();
  });

  it("Should throw error on existing username", async () => {
    existsStub.withArgs({ username: "test" }).resolves(true);

    await expect(
      create({ username: "test", email: "toto", password: "1234" })
    ).rejects.toThrow("Username already exist");
  });

  it("Should throw error on existing email", async () => {
    existsStub.withArgs({ username: "test" }).resolves(false);
    existsStub.withArgs({ email: "toto" }).resolves(true);

    await expect(
      create({ username: "test", email: "toto", password: "1234" })
    ).rejects.toThrow("Email already exist");
  });

  it("Should create user", async () => {
    existsStub.withArgs({ username: "test" }).resolves(false);
    existsStub.withArgs({ email: "toto" }).resolves(false);

    saveStub.resolvesThis();

    const result = await create({
      username: "test",
      email: "toto",
      password: "1234",
    });

    expect(result).toBeDefined();
    expect(result.username).toBe("test");
    expect(result.email).toBe("toto");
    expect(result.hash).toBeDefined();
    expect(result.salt).toBeDefined();
  });
});
