# 🏺 Setup Guide for HeritageConnect

This guide walks you through setting up and running your **Google Cloud Firestore Database** for the **HeritageConnect** authentic Indian handicrafts platform.

---

## 📁 What Has Been Created in Your Workspace

| File | Purpose |
| :--- | :--- |
| **`firebase-manager.html`** | 🎛️ **Interactive Database Control Panel**. Paste credentials, test connection, 1-click seed the database, add products, and watch live real-time orders stream in. |
| **`firebase-config.js`** | ⚙️ **Central Configuration**. Stores your Firebase credentials and project identifiers. Supports local storage override. |
| **`firebase-db.js`** | 📦 **CRUD & Seeding Service**. Complete Firestore API for products, artisans, orders, and real-time listeners using the official Google Firebase SDK. |
| **`exe.html`** | 🛍️ **Marketplace Storefront**. Updated to save real customer orders directly to Cloud Firestore and sync products. |

---

## 🚀 3-Minute Setup in Firebase Console

### Step 1: Create a Project in Firebase
1. Open your browser and navigate to the [Firebase Console](https://console.firebase.google.com/).
2. Click **"Add project"** (or **"Create a project"**).
3. Enter a project name, such as `heritage-connect` or `heritage-db`.
4. (Optional) Disable or enable Google Analytics, then click **"Create project"**.
5. When ready, click **"Continue"** to enter your project dashboard.

---

### Step 2: Create Cloud Firestore Database
1. In the left navigation menu, click **Build** &rarr; **Firestore Database**.
2. Click the **"Create database"** button.
3. **Database Location**: Select a region close to your target audience (e.g., `asia-south1` Mumbai for India, or `us-central1`).
4. **Security Rules**: Select **"Start in test mode"** (this allows full read and write access for 30 days while developing).
5. Click **"Create"**. Your Firestore database will initialize in a few seconds.

---

### Step 3: Register a Web App & Get Credentials
1. In the Firebase Console, click the **Gear Icon ⚙️** (next to *Project Overview*) &rarr; **Project settings**.
2. Scroll down to the **"Your apps"** card and click the **Web icon `</>`**.
3. Enter an App nickname (e.g. `heritage-web`) and click **"Register app"**.
4. Firebase will display your `firebaseConfig` object:
   ```javascript
   const firebaseConfig = {
     apiKey: "AIzaSyD-YOUR-ACTUAL-API-KEY",
     authDomain: "heritage-connect.firebaseapp.com",
     projectId: "heritage-connect",
     storageBucket: "heritage-connect.appspot.com",
     messagingSenderId: "123456789012",
     appId: "1:123456789012:web:abcdef123456"
   };
   ```

---

## ⚡ How to Connect & Seed the Database

You can connect your database in either of two ways:

### Method A: Using the Visual Control Panel (`firebase-manager.html`) — Recommended ⭐
1. Open `firebase-manager.html` in your browser (just double-click the file).
2. Paste your `firebaseConfig` code snippet directly into the **"Fast Paste"** box and click **"Auto-Fill Below"** &rarr; **"Save & Connect"**.
3. Click **"Test Connection"** to verify that Google Cloud Firestore is connected.
4. Click **"🚀 Seed Database Now"**:
   - In 2 seconds, it writes all **10 authentic Indian handicrafts** (Gorakhpur Terracotta, Jaipur Blue Pottery, Srikalahasti Kalamkari, Kondapalli Toys, etc.) to the `products` collection.
   - It writes master artisan profiles to the `artisans` collection.
   - It records initial sample orders into the `orders` collection.

### Method B: Directly in Code (`firebase-config.js`)
Open `firebase-config.js` and paste your credentials into `DEFAULT_FIREBASE_CONFIG`:
```javascript
const DEFAULT_FIREBASE_CONFIG = {
  apiKey: "YOUR_API_KEY",
  authDomain: "your-project-id.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project-id.appspot.com",
  messagingSenderId: "your-sender-id",
  appId: "your-app-id"
};
```

---

## 🗄️ Firestore Database Schema Design

### 1. `products` Collection
Stores handcrafted artworks available on the marketplace.
```json
{
  "id": "prod-1",
  "title": "Terracotta Incense & Diya Set",
  "price": 450,
  "retail": "₹900 retail",
  "artist": "Master Ram Prasad • Gorakhpur Cluster, UP",
  "craft": "Terracotta Pottery",
  "origin": "Gorakhpur, Uttar Pradesh",
  "time": "1 Full Day",
  "category": "pottery",
  "tags": ["under-1000", "gifts", "pottery"],
  "rating": 4.9,
  "reviewsCount": 84,
  "stock": 25,
  "material": "100% River Silt Clay",
  "leadFree": true,
  "artisanSharePercentage": 94,
  "img": "https://images.unsplash.com/...",
  "desc": "Hand-thrown on unmotorized foot wheel...",
  "updatedAt": "Timestamp"
}
```

### 2. `artisans` Collection
Stores master heritage artisans and their hereditary lineages.
```json
{
  "id": "artisan-1",
  "name": "Master Ram Prasad",
  "lineage": "4th Generation Terracotta Potter",
  "location": "Gorakhpur, Uttar Pradesh",
  "craft": "River Silt Terracotta",
  "activeSince": "1982",
  "apprenticeFamilies": 12,
  "bio": "Shapes raw river silt from the Rapti River into ritual diyas without electrical power.",
  "avatar": "https://images.unsplash.com/..."
}
```

### 3. `orders` Collection (with Delivery Tracking)
Stores patron orders with direct artisan payout and real-time delivery lifecycle tracking:
```json
{
  "orderId": "HC-GI-84920",
  "customerName": "Vikramaditya Sharma",
  "customerEmail": "vikram@example.com",
  "customerLocation": "Gurgaon, Haryana",
  "items": [
    { "name": "Terracotta Incense & Diya Set", "price": 450, "qty": 1 },
    { "name": "Blue Pottery Tea Mug Set (Pair)", "price": 1200, "qty": 1 }
  ],
  "totalAmount": 1650,
  "artisanPayout": 1551,
  "status": "Delivered",
  "isDelivered": true,
  "deliveryStatus": "delivered",
  "fulfillmentStage": "delivered",
  "deliveredAt": "2026-11-05T14:30:00.000Z",
  "trackingNumber": "INPOST-84920",
  "courier": "India Post SpeedPost",
  "createdAt": "2026-11-02T10:00:00.000Z"
}
```

#### Delivery Tracking Fields:
* **`isDelivered`** (*boolean*): `true` if delivered, `false` if not delivered.
* **`deliveryStatus`** (*string*): `"delivered"` | `"not_delivered"`.
* **`fulfillmentStage`** (*string*): `"pending_packing"` | `"in_transit"` | `"delivered"`.
* **`deliveredAt`** (*string | null*): Timestamp of successful delivery.
* **`trackingNumber`** (*string*): Postal tracking number (e.g. `INPOST-84920`).
* **`updateOrderDelivery(orderId, isDelivered, stage)`**: Database method to update status in 1 click.
* **`computeDeliveryStats()`**: Computes live breakdown of Delivered vs Not Delivered orders.

---

## 🔒 Firestore Security Rules

In Firebase Console &rarr; **Firestore Database** &rarr; **Rules**, apply these rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    
    // Products: public read, authenticated or dev write
    match /products/{productId} {
      allow read: if true;
      allow write: if true; // In production: if request.auth != null
    }
    
    // Artisans: public read
    match /artisans/{artisanId} {
      allow read: if true;
      allow write: if true;
    }
    
    // Orders: anyone can place an order, read orders
    match /orders/{orderId} {
      allow create: if true;
      allow read: if true;
      allow update, delete: if false;
    }
  }
}
```

---

## 🧪 Testing the Live Integration

1. Double-click `exe.html` to open the HeritageConnect Marketplace.
2. Click any craft, add items to the cart, and click **"Simulate Instant Payment"**.
3. Notice that the order is instantly recorded with a real Tracking ID (e.g. `HC-GI-18492`).
4. Switch to `firebase-manager.html` and click the **"Orders Collection"** tab:
   - Your order appears immediately in the live feed via Firebase real-time listeners (`onSnapshot`) without reloading the page!
