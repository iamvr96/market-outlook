/* ===================================================================
   Firebase settings for index.html (invitation) and admin.html (team)
   =================================================================== */

// Paste your NEW Firebase web app config here
// Firebase console → Project settings (⚙) → General → Your apps → Web app (</>) → "SDK setup and configuration" → Config
export const firebaseConfig = {
  apiKey: "AIzaSyBU8LBFl7zxd3wHW-0zANCvWlkfxpS2JfI",
  authDomain: "mbsb-market-outlook-240e9.firebaseapp.com",
  projectId: "mbsb-market-outlook-240e9",
  storageBucket: "mbsb-market-outlook-240e9.firebasestorage.app",
  messagingSenderId: "217568357482",
  appId: "1:217568357482:web:e5345c891fbaf2af7dae13"
};

/* ---------------- no need to edit below ---------------- */
export const isConfigured = () => !Object.values(firebaseConfig).some(v => String(v).startsWith("PASTE"));
