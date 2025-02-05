import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { search, create, update } from "./meetingsService";
import Meeting from "../../model/Meeting.js";
import sinon from "sinon";

// describe("Should test searchMeetings function", () => {
//   const findMock = vi.mock(Meeting, "find");
//   const countMock = vi.mock(Meeting, "countDocuments");

//   beforeEach(() => {
//     vi.resetAllMocks();
//   });

//   it("Should return meetings", async () => {
//     findMock.mockReturnValueOnce([{ title: "Meeting 1" }]);
//     countMock.mockReturnValueOnce(1);

//     const result = await search({ pageNumber: 1, pageSize: 1 });

//     expect(result.resultSet).toBeDefined();
//     expect(result.pagination.totalElements).toBe(1);
//   });
// });

describe("Should test create function", () => {
  let saveStub;

  beforeEach(() => {
    saveStub = sinon.stub(Meeting.prototype, "save");
  });

  afterEach(() => {
    saveStub.restore();
  });

  it("Should throw error on invalid meeting details", async () => {
    await expect(create({ title: "Meeting 1" }, {})).rejects.toThrow(
      "Invalid meeting details"
    );
  });

  it("Should create meeting", async () => {
    saveStub.resolvesThis();

    const result = await create({
      title: "Meeting 1",
      startTime: "2021-10-10T00:00:00.000Z",
      endTime: "2021-10-10T01:00:00.000Z",
      location: {
        latitude: 52.52,
        longitude: 13.405,
      },
      description: "Meeting 1",
      user: {},
    });

    expect(result.title).toBe("Meeting 1");
  });
});

describe("Should test update meeting", () => {
  let findByIdStub;

  beforeEach(() => {
    findByIdStub = sinon.stub(Meeting, "findById");
  });
  afterEach(() => {
    findByIdStub.restore();
  });

  it("Should throw error on invalid meeting details", async () => {
    await expect(
      update("156416541566", { title: "Meeting 1" }, {})
    ).rejects.toThrow("Invalid meeting details");
  });

  it("Should throw not found error", async () => {
    findByIdStub.resolves(null);

    await expect(
      update("156416541566", {
        title: "Meeting 1",
        startTime: "2021-10-10T00:00:00.000Z",
        endTime: "2021-10-10T01:00:00.000Z",
        location: {
          latitude: 52.52,
          longitude: 13.405,
        },
        description: "Meeting 1",
        user: {},
      })
    ).rejects.toThrow("Meeting not found");
  });

  it("Should update meeting", async () => {
    const expected = {
      save: sinon.stub().resolvesThis(),
    };

    findByIdStub.resolves(expected);

    const result = await update("156416541566", {
      title: "Meeting 1",
      startTime: "2021-10-10T00:00:00.000Z",
      endTime: "2021-10-10T01:00:00.000Z",
      location: {
        latitude: 52.52,
        longitude: 13.405,
      },
      description: "Meeting 1",
      user: {},
    });

    expect(result).toBe(expected);
  });
});
