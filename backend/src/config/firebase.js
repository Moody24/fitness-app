const path = require("path"); // Import path module
const admin = require("firebase-admin");

const serviceAccountPath = process.env.FIREBASE_SERVICE_ACCOUNT;

if (!serviceAccountPath) {
  console.error("Error: FIREBASE_SERVICE_ACCOUNT environment variable is not set.");
  process.exit(1);
}

// Resolve the absolute path of the service account key file
const resolvedPath = path.resolve(serviceAccountPath);
console.log("Resolved Service Account Path:", resolvedPath);

// Check if the file exists
const fs = require("fs");
if (!fs.existsSync(resolvedPath)) {
  console.error(`Error: Service account key file not found at ${resolvedPath}`);
  process.exit(1);
}

// Load the service account key file
const serviceAccount = require(resolvedPath);

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

module.exports = { admin, db };

