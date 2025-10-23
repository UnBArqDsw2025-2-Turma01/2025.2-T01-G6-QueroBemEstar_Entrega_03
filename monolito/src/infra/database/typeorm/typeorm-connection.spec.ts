import { TypeOrmConnection } from "./typeorm-connection"

describe("TypeORMConnection", () => {
  it("should be instatiable only once", () => {
    const instance = TypeOrmConnection.getInstance()
    const sut = TypeOrmConnection.getInstance()
    expect(sut).toBe(instance)
  })
})
