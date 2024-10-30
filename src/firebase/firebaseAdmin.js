import admin from "firebase-admin";

if (!admin.apps.length) {
  admin.initializeApp({
    // credential: admin.credential.cert(serviceAccount),
    project_id: process.env.PROJECT_ID,
    private_key_id: process.env.PRIVATE_KEY_ID,
    private_key: process.env.PRIVATE_KEY.replace(/\\n/g, "\n"),
    client_email: process.env.CLIENT_EMAIL,
  });
}

export const auth = admin.auth();
