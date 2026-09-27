const axios = require('axios');
const env = require('../../config/env');
const { adaptMlResponse } = require('./mlAdapter');
const { logger, logStage } = require('../../utils/logger');

/**
 * Communicates with the external Machine Learning API.
 */
async function getMastitisPrediction(testId, cowId, sensorData, observations) {
    logStage('ML_REQUEST_SENT', { testId, cowId });

    const payload = {
        temperature: sensorData.temperature,
        ph: sensorData.ph,
        conductivity: sensorData.conductivity
    };

    try {
        const response = await axios.post(env.ML_API_URL, payload, {
            headers: {
                'Content-Type': 'application/json'
            },
            timeout: env.ML_TIMEOUT_MS
        });

        console.log("\n========== ML PREDICTION ==========");
        console.log("Predicted SCC:", response.data.prediction);
        console.log("===================================\n");

        logStage('ML_RESPONSE_RECEIVED', { testId });

        return adaptMlResponse(response.data);

    } catch (error) {
        logger.error('ML API Request Failed', {
            testId,
            message: error.message,
            code: error.code
        });

        throw new Error(`ML Service Failed: ${error.message}`);
    }
}

module.exports = { getMastitisPrediction };