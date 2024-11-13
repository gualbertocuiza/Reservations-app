import { listReservations } from "~/server/models/Reservation";

export default defineEventHandler(async (event) => {
  const restaurant = getRouterParam(event, "_id");
  const query: {
    date: string;
    startTime: string;
    endTime: string;
    status: string;
    startDate: string;
  } = getQuery(event);
  const _query: {
    restaurant: string;
    date?: string | object;
    time?: any;
    status?: string;
  } = {
    restaurant: restaurant!,
  };
  if (query.date) _query.date = query.date;

  if (query.startTime && query.endTime)
    _query.time = { $gte: query.startTime, $lte: query.endTime };

  if (query.status) _query.status = query.status;

  if (query.startDate) _query.date = { $gte: query.startDate };

  try {
    const reservations = await listReservations(_query);
    return { data: reservations };
  } catch (error) {
    return {
      status: 500,
      body: {
        message: "Error listing reservations",
        error,
      },
    };
  }
});
