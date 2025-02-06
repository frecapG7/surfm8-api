import Meeting from "../../model/Meeting";
import Message from "../../model/Message";

export const getMessages = async (meetingId, { pageSize, pageNumber }) => {
  // 1 - Get Meetings
  const meeting = await Meeting.findById(meetingId);
  if (!meeting) throw new Error("Meeting not found");

  // 2 - Get Messages
  const resultSet = await Message.find(
    {
      meeting,
    },
    null,
    {
      skip: pageSize * (pageNumber - 1),
      limit: pageSize,
      populate: "sender",
      sort: {
        createdAt: -1,
      },
    }
  );

  // 3 - Count total elements
  const totalElements = await Message.countDocuments({
    meeting,
  });

  return {
    resultSet,
    pagination: {
      pageNumber,
      pageSize,
      totalElements: totalElements,
      totalPages: Math.ceil(totalElements / pageSize),
    },
  };
};
