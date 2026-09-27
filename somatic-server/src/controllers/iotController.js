const iotService = require('../services/iot/iotService');
const { sendSuccess } = require('../utils/apiResponse');
const asyncHandler = require('../utils/asyncHandler');

// Demo payloads (you can add more scenarios if needed)
const demoPayloads = {
  healthy: {
    ph: 6.8,
    temperature: 38.5,
    conductivity: 6.1
  },
  mastitis: {
    ph: 7.5,
    temperature: 40.2,
    conductivity: 8.3
  }
};

exports.receiveSensorData = asyncHandler(async (req, res) => {
  try {
    const demoPayloads = {
      healthy: { ph: 6.8, temperature: 38.5, conductivity: 6.1 },
      mastitis: { ph: 7.5, temperature: 40.2, conductivity: 8.3 }
    };

    const payload = req.query.demo
      ? demoPayloads[req.query.demo.toLowerCase()] || demoPayloads.healthy
      : req.body;

    const result = await iotService.processFinalSensorData(payload);

    return sendSuccess(
      res,
      {
        message: req.query.demo
          ? `Demo telemetry (${req.query.demo}) received`
          : "Sensor telemetry received",
        status: result.status,
        testId: result.testId,
        demo: !!req.query.demo
      },
      result.status === "SAVED" ? 201 : 200
    );
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});



