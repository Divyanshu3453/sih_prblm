const axios = require('axios');
const env = require('../../config/env');
const { adaptMlResponse } = require('./mlAdapter');
const { logger, logStage } = require('../../utils/logger');

// Utility function to generate random SCC demo value
function getRandomPrediction(min, max, preferred = []) {
  // 50% chance to pick from preferred values if provided
  if (preferred.length > 0 && Math.random() < 0.5) {
    return preferred[Math.floor(Math.random() * preferred.length)];
  }
  // Otherwise random between min–max
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
/**
 * Communicates with the external Machine Learning API.
 * Falls back to demo prediction if ML service is unavailable.
 */
async function getMastitisPrediction(testId, cowId, sensorData, observations) {
    logStage('ML_REQUEST_SENT', { testId, cowId });

    const payload = {
        temperature: sensorData.temperature,
        ph: sensorData.ph,
        conductivity: sensorData.conductivity,
        demo: sensorData.demoType || null   // optional flag for demo
    };

    try {
        const response = await axios.post(env.ML_API_URL, payload, {
            headers: { 'Content-Type': 'application/json' },
            timeout: env.ML_TIMEOUT_MS
        });

        logStage('ML_RESPONSE_RECEIVED', { testId });
        return adaptMlResponse(response.data);

    } catch (error) {
        logger.error('ML API Request Failed', {
            testId,
            message: error.message,
            code: error.code
        });

        logStage('ML_FALLBACK_USED', { testId });

        // --- Simple demo outputs with numeric SCC ---
        let demoOutput;
        if (payload.demo === "mastitis") {
            demoOutput = {
                prediction: getRandomPrediction(500, 800),          // numeric SCC
                label: "mastitis",           // extra label for clarity
                confidence: 0.92,
                modelVersion: "fallback-v1",
                fallback: true,
                message: "Demo ML output: Mastitis detected"
            };
        } else {
            demoOutput = {
                prediction: getRandomPrediction(100, 400, [100,150, 200, 250]),          // numeric SCC
                label: "healthy",            // extra label for clarity
                confidence: 0.95,
                modelVersion: "fallback-v1",
                fallback: true,
                message: "Demo ML output: Healthy cow"
            };
        }

        return adaptMlResponse(demoOutput);
    }
}

module.exports = { getMastitisPrediction };
