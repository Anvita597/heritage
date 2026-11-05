/**
 * HeritageConnect - Firebase Configuration
 * 
 * HOW TO GET YOUR FIREBASE CONFIG:
 * 1. Go to https://console.firebase.google.com/
 * 2. Click "Add project" and name it (e.g., "heritage-connect")
 * 3. In project overview, click the Web icon (</>) to create a web app
 * 4. Copy the `firebaseConfig` object and replace the placeholder below
 *    OR paste it in the Firebase Manager UI (firebase-manager.html)
 */

const DEFAULT_FIREBASE_CONFIG = {
  apiKey: "AIzaSyYOUR_API_KEY_HERE",
  authDomain: "heritage-connect-demo.firebaseapp.com",
  projectId: "heritage-connect-demo",
  storageBucket: "heritage-connect-demo.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abcdef123456"
};

// Check if user has saved custom Firebase config in browser localStorage
function getActiveFirebaseConfig() {
  try {
    const saved = localStorage.getItem("HERITAGE_FIREBASE_CONFIG");
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed.apiKey && parsed.projectId && !parsed.apiKey.includes("YOUR_API_KEY")) {
        return parsed;
      }
    }
  } catch (e) {
    console.warn("Could not read Firebase config from localStorage", e);
  }
  return DEFAULT_FIREBASE_CONFIG;
}

// Global reference
window.FIREBASE_CONFIG = getActiveFirebaseConfig();

// Helper to check if configuration has been replaced with real credentials
window.isFirebaseConfigSet = function() {
  const cfg = window.FIREBASE_CONFIG;
  return cfg && 
         cfg.apiKey && 
         !cfg.apiKey.includes("YOUR_API_KEY") && 
         cfg.projectId && 
         !cfg.projectId.includes("heritage-connect-demo");
};

// Helper to save new config
window.saveFirebaseConfig = function(configObj) {
  localStorage.setItem("HERITAGE_FIREBASE_CONFIG", JSON.stringify(configObj));
  window.FIREBASE_CONFIG = configObj;
};

// Helper to reset config
window.resetFirebaseConfig = function() {
  localStorage.removeItem("HERITAGE_FIREBASE_CONFIG");
  window.FIREBASE_CONFIG = DEFAULT_FIREBASE_CONFIG;
};
