import Meeting from "../../model/Meeting.js";

export const search = async ({
  startTime,
  endTime,
  location,
  pageSize,
  pageNumber,
}) => {
  // 1 - Build filters
  const filters = buildFilters({ startTime, endTime, location });
  //2 - Search meetings
  const resultSet = await Meeting.find(filters, null, {
    skip: pageSize * (pageNumber - 1),
    limit: pageSize,
  });
  // 3 - Count total elements
  const totalElements = await Meeting.countDocuments(filters);

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

export const create = async (data) => {
  // 1 - Verify data
  await verifyMeeting(data);
  // 2 - Create meeting
  const meeting = new Meeting();
  mergeMeeting(meeting, data);

  // 3 - Save meeting
  return await meeting.save();
};

export const update = async (id, data, user) => {
  // 1 - Validate data
  await verifyMeeting(data);
  // 2 - Fetch meeting
  const meeting = await Meeting.findById(id);
  if (!meeting) throw new Error("Meeting not found");

  // 3 - Check if user is the owner
  //TODO

  // 4 - Update meeting
  mergeMeeting(meeting, data);
  return await meeting.save();
};
const verifyMeeting = async ({
  title,
  startTime,
  endTime,
  description,
  user,
}) => {
  if (!title || !startTime || !endTime || !description || !user) {
    throw new Error("Invalid meeting details");
  }
};

const mergeMeeting = (
  meeting,
  { title, startTime, endTime, description, location, user }
) => {
  meeting.title = title;
  meeting.startTime = startTime;
  meeting.endTime = endTime;
  meeting.description = description;
  meeting.location = {
    type: "Point",
    coordinates: [location.longitude, location.latitude],
  };
};

const buildFilters = ({
  startTime,
  endTime,
  location: { minLongitude, maxLongitude, minLatitude, maxLatitude },
}) => {
  return {
    ...(startTime && { startTime: { $gte: startTime } }),
    ...(endTime && { endTime: { $lte: endTime } }),
    ...(location && {
      location: {
        $geoWithin: {
          $geometry: {
            type: "Polygon",
            coordinates: [
              [
                [minLongitude, minLatitude],
                [minLongitude, maxLatitude],
                [maxLongitude, maxLatitude],
                [maxLongitude, minLatitude],
                [minLongitude, minLatitude],
              ],
            ],
          },
        },
      },
    }),
  };
};
