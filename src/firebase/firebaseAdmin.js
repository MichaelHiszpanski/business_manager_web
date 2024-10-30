import admin from "firebase-admin";

// if (!admin.apps.length) {
//   admin.initializeApp({
//     // credential: admin.credential.cert(serviceAccount),
//     project_id: process.env.PROJECT_ID,
//     private_key_id: process.env.PRIVATE_KEY_ID,
//     private_key: process.env.PRIVATE_KEY.replace(/\\n/g, "\n"),
//     client_email: process.env.CLIENT_EMAIL,
//   });
// }
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.PROJECT_ID,
      privateKey: process.env.PRIVATE_KEY.replace(/\\n/g, "\n"),
      clientEmail: process.env.CLIENT_EMAIL,
    }),
  });
}
export const verifyIdToken = async (token) => {
  try {
    const decodedToken = await admin.auth().verifyIdToken(token);
    return decodedToken;
  } catch (error) {
    console.error("Error verifying token:", error);
    return null;
  }
};

export const auth = admin.auth();
