import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging/sw";

const firebaseApp = initializeApp({
  // TODO (you): Replace this with your Firebase project config.
});

const messaging = getMessaging(firebaseApp);
