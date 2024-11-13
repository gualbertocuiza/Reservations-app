// @vitest-environment node
import { describe, expect, it } from "vitest";
import { formatDate, getWeekRange, getDayLabel } from "../dates";

describe("Dates helpers tests", () => {
  it("formatDate", () => {
    const date = new Date("2021-01-01");
    expect(formatDate(date)).toEqual("2021-01-01");
  });

  it("getWeekRange", () => {
    const date = new Date("2024-10-17");
    const weekRange = getWeekRange(date);
    expect(weekRange.startDate).toEqual(new Date("2024-10-14"));
    expect(weekRange.endDate).toEqual(new Date("2024-10-20"));
  });

  it("getDayLabel", () => {
    const today = new Date();
    const tomorrow = new Date(new Date().setDate(new Date().getDate() + 1));
    const dayAfterTomorrow = new Date(
      new Date().setDate(new Date().getDate() + 2)
    );

    expect(getDayLabel(today)).toEqual({
      label: "Today",
      date: formatDate(today),
    });
    expect(getDayLabel(tomorrow)).toEqual({
      label: "Tomorrow",
      date: formatDate(tomorrow),
    });
    expect(getDayLabel(dayAfterTomorrow)).toEqual({
      label: "Day after tomorrow",
      date: formatDate(dayAfterTomorrow),
    });
  });
});
