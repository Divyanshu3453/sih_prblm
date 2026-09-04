import client from "./client";

// Backend route exists in src/routes/reportRoutes.js.
// Note: current src/app.js does NOT mount /api/reports.
export const getTestReport = async (testId) => {
  const { data } = await client.get(`/reports/tests/${testId}`);
  return data.data;
};