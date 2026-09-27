const iotService = require('../services/iot/iotService');
const { sendSuccess } = require('../utils/apiResponse');
const asyncHandler = require('../utils/asyncHandler');

const receiveSensorData = asyncHandler(async (req, res) => {
  const result = await iotService.processFinalSensorData(req.body);

  return sendSuccess(
    res,
    {
      message: 'Sensor telemetry received',
      status: result.status,
      testId: result.testId
    },
    result.status === 'SAVED' ? 201 : 200
  );
});

module.exports = {
  receiveSensorData
};