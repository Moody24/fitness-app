const fs = require("fs");
const admin = require("firebase-admin");

const serviceAccountPath = process.env.FIREBASE_SERVICE_ACCOUNT;

// Debugging: Print the path being used
console.log("Service Account Path:", serviceAccountPath);

// Check if the file exists at the specified path
if (!fs.existsSync(serviceAccountPath)) {
  console.error(`Error: Service account key file not found at ${serviceAccountPath}`);
  process.exit(1);
}

const serviceAccount = require(serviceAccountPath);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

module.exports = { admin, db };
