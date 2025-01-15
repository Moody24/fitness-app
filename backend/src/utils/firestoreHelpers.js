/**
 * Convert Firestore snapshot to an array of documents.
 * @param {FirebaseFirestore.QuerySnapshot} snapshot - Firestore snapshot.
 * @returns {Array} - Array of formatted Firestore documents.
 */
const formatFirestoreDocs = (snapshot) => {
    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  };
  
  /**
   * Get the current timestamp for Firestore.
   * @returns {FirebaseFirestore.Timestamp} - Firestore timestamp.
   */
  const getFirestoreTimestamp = () => {
    const admin = require("firebase-admin");
    return admin.firestore.Timestamp.now();
  };
  
  module.exports = { formatFirestoreDocs, getFirestoreTimestamp };
  