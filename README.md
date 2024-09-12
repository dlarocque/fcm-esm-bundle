# FCM with ESM in SW

Firebase Cloud Messaging currently don't support ESM syntax (`import ... from ...`). For most users, the solution to this is to use the `-compat` bundles imported from the CDN.

For users who wish to use ESM syntax, they must bundle their service worker file into a `firebase-messaging-sw.js` file that does *not* use ESM syntax. This repository provides an example for how to do that.
