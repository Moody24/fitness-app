const admin = require("firebase-admin");
const serviceAccountPath = process.env.FIREBASE_SERVICE_ACCOUNT;
const serviceAccount = require(serviceAccountPath);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

module.exports = { admin, db };

