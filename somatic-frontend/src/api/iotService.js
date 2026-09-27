import client from "./client";

/*
 * This is the frontend relay for Bluetooth/IoT telemetry.
 * Payload must match backend iotValidator exactly:
 * {
 *   testId, cowId, deviceId, timestamp,
 *   measurements: { ph, temperature, conductivity }
 * }
 */
export const sendSensorData = async (payload) => {
  const { data } = await client.post("/api/iot/sensor-data", payload);
  return data.data;
};