/**
 * Log messages with a timestamp.
 * @param {string} level - Log level (info, warn, error).
 * @param {string} message - Log message.
 */
const log = (level, message) => {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] [${level.toUpperCase()}]: ${message}`);
  };
  
  module.exports = { log };
  