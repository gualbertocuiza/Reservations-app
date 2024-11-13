// Date helpers

// Format date to string yyyy-mm-dd
export const formatDate = (date: Date) => {
  return date.toISOString().split("T")[0];
};

// Get current week range based on date
export const getWeekRange = (date: Date) => {
  const start = new Date(date);
  start.setDate(date.getDate() - date.getDay());
  const end = new Date(start);
  end.setDate(start.getDate() + 6);
  return { startDate: start, endDate: end };
};

// Get label and date (eg. { label: 'Today', date: '2024-11-15' })
// Works only for: Today, Tomorrow, Day after tomorrow.
export const getDayLabel = (date: Date) => {
  const today = new Date();
  const _date = formatDate(date);
  const _today = formatDate(today);
  if (_date === _today) {
    return { label: "Today", date: formatDate(date) };
  }

  const tomorrow = formatDate(
    new Date(new Date().setDate(new Date().getDate() + 1))
  );
  if (_date === tomorrow) {
    return { label: "Tomorrow", date: formatDate(date) };
  }

  const dayAfterTomorrow = formatDate(
    new Date(new Date().setDate(new Date().getDate() + 2))
  );
  if (_date === dayAfterTomorrow) {
    return { label: "Day after tomorrow", date: formatDate(date) };
  }
  return { label: "", date: "" };
};
