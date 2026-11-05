/**
 * HeritageConnect - Firebase Firestore Database Service
 * 
 * Provides complete CRUD operations, real-time listeners, and 
 * 1-click database seeding for products, artisans, and orders.
 */

// Initial Seed Data (10 Authentic Indian Handicrafts from HeritageConnect)
const SEED_PRODUCTS = [
  {
    id: "prod-1",
    title: "Terracotta Incense & Diya Set",
    price: 450,
    retail: "₹900 retail",
    artist: "Master Ram Prasad • Gorakhpur Cluster, UP",
    craft: "Terracotta Pottery",
    origin: "Gorakhpur, Uttar Pradesh",
    time: "1 Full Day",
    img: "https://images.unsplash.com/photo-1606744888344-493238955dd5?auto=format&fit=crop&w=600&q=80",
    desc: "Each diya and incense vessel is hand-thrown on an unmotorized foot wheel using pure river silt clay, sun-baked for 14 hours, and smoke-fired with natural rice husk to yield an organic earthy terracotta finish.",
    category: "pottery",
    tags: ["under-1000", "gifts", "pottery"],
    rating: 4.9,
    reviewsCount: 84,
    stock: 25,
    material: "100% River Silt Clay",
    leadFree: true,
    artisanSharePercentage: 94
  },
  {
    id: "prod-2",
    title: "Hand-Painted Coaster Set (4 Pcs)",
    price: 550,
    retail: "₹1,100 retail",
    artist: "Sita Devi Women's Guild • Mithila, Bihar",
    craft: "Madhubani Folk Art",
    origin: "Mithila, Bihar",
    time: "2 Days",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCQloTU6n-Ogz1D4JwtRX9sLwSzRSP4_ETOe_92LPLCfZM-QkvRw1eqnZQyu7qiFvH_fRAaokg84Ang8YHndo2uc3lq7yyU0AgjQINGrKobybUEhZS81FLJqonUkoGvpcsb5yTSgEMRJDNNBHhu75unluxiv0gBPUI78REMnpwh8DwKTfO0yTcBb_CAsGL2iTxs9LjxujNIvdo7cNJdU4n_3x_k49HOvO1riLY3DV02",
    desc: "Rendered with sharpened bamboo twigs dipped in soot ink and wild turmeric washes on recycled handmade cotton paper. Celebrates rural flora and nature with authentic double lines.",
    category: "paintings",
    tags: ["under-1000", "gifts", "paintings"],
    rating: 5.0,
    reviewsCount: 112,
    stock: 40,
    material: "Handmade Paper & Natural Dyes",
    leadFree: true,
    artisanSharePercentage: 94
  },
  {
    id: "prod-3",
    title: "Miniature Dancing Bobble Toy",
    price: 650,
    retail: "₹1,300 retail",
    artist: "Master K. Nageswara Rao • Krishna District, AP",
    craft: "Kondapalli Woodcraft",
    origin: "Kondapalli, Andhra Pradesh",
    time: "2 Days",
    img: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=600&q=80",
    desc: "Hand-carved from sustainable, lightweight Tella Poniki softwood. Smoothed with natural tamarind seed paste and balanced on a brass pivot point for gentle dancing motion.",
    category: "toys",
    tags: ["under-1000", "gifts", "toys"],
    rating: 4.8,
    reviewsCount: 96,
    stock: 18,
    material: "Tella Poniki Softwood & Vegetable Lacquer",
    leadFree: true,
    artisanSharePercentage: 94
  },
  {
    id: "prod-4",
    title: "Hand-Etched Acoustic Temple Bell",
    price: 950,
    retail: "₹1,900 retail",
    artist: "Ustad Farooq Ahmed • Moradabad, UP",
    craft: "Moradabad Brassware",
    origin: "Moradabad, Uttar Pradesh",
    time: "3 Days",
    img: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=600&q=80",
    desc: "Cast using sand molds and hand-turned on wooden lathes to produce clear acoustic resonance. Decorated with traditional chiseled floral lotus borders.",
    category: "metal",
    tags: ["under-1000", "metal"],
    rating: 4.9,
    reviewsCount: 134,
    stock: 15,
    material: "Solid 80/20 Bell Brass",
    leadFree: true,
    artisanSharePercentage: 94
  },
  {
    id: "prod-5",
    title: "Blue Pottery Tea Mug Set (Pair)",
    price: 1200,
    retail: "₹2,400 retail",
    artist: "Kripal Kumbh Heritage Atelier • Jaipur",
    craft: "Jaipur Blue Pottery",
    origin: "Jaipur, Rajasthan",
    time: "4 Days",
    img: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80",
    desc: "Handcrafted without clay using powdered quartz stone, raw glass, and natural katira gum. Hand-painted with natural cobalt oxide and glazed with non-toxic food-safe glass.",
    category: "pottery",
    tags: ["1000-2000", "pottery"],
    rating: 4.9,
    reviewsCount: 158,
    stock: 22,
    material: "Quartz Powder & Food-Grade Glaze",
    leadFree: true,
    artisanSharePercentage: 94
  },
  {
    id: "prod-6",
    title: "Handwoven Ikat Silk-Cotton Stole",
    price: 1450,
    retail: "₹2,900 retail",
    artist: "Bhoodan Weavers Coop • Pochampally",
    craft: "Pochampally Ikat Handloom",
    origin: "Pochampally, Telangana",
    time: "5 Days",
    img: "https://images.unsplash.com/photo-1607344645866-009c320c5ab8?auto=format&fit=crop&w=600&q=80",
    desc: "Yarns are bound and resist-dyed before weaving on traditional wooden pit looms. Features geometric symmetry with pure mulberry silk sheen and breathable cotton.",
    category: "textiles",
    tags: ["1000-2000", "textiles"],
    rating: 5.0,
    reviewsCount: 78,
    stock: 14,
    material: "Pure Mulberry Silk & Cotton",
    leadFree: true,
    artisanSharePercentage: 94
  },
  {
    id: "prod-7",
    title: "Cheriyal Folk Narrative Wall Mask",
    price: 1850,
    retail: "₹3,700 retail",
    artist: "Master D. Vaikuntam • Cheriyal Village",
    craft: "Cheriyal Scroll & Mask",
    origin: "Cheriyal, Telangana",
    time: "6 Days",
    img: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=600&q=80",
    desc: "Sculpted using a historic mixture of teak sawdust and boiled tamarind seed paste. Painted with crushed seashell white, natural indigo, and red mineral pigments.",
    category: "paintings",
    tags: ["1000-2000", "paintings"],
    rating: 4.9,
    reviewsCount: 62,
    stock: 9,
    material: "Teak Sawdust & Tamarind Paste",
    leadFree: true,
    artisanSharePercentage: 94
  },
  {
    id: "prod-8",
    title: "Jaali Filigree Carved Keepsake Box",
    price: 2200,
    retail: "₹4,400 retail",
    artist: "Master Irfan Ansari • Saharanpur",
    craft: "Saharanpur Wood Carving",
    origin: "Saharanpur, Uttar Pradesh",
    time: "4 Days",
    img: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=600&q=80",
    desc: "Carved entirely with handheld chisels into seasoned Indian Sheesham rosewood. Polished with organic beeswax to highlight rich natural wood grain.",
    category: "toys",
    tags: ["2000-3500", "wood"],
    rating: 4.9,
    reviewsCount: 145,
    stock: 12,
    material: "Certified Sheesham Rosewood",
    leadFree: true,
    artisanSharePercentage: 94
  },
  {
    id: "prod-9",
    title: "Surya Deva Celestial Folk Canvas",
    price: 2850,
    retail: "₹5,700 retail",
    artist: "Smt. Ganga Devi Clan • Ranti Village",
    craft: "Madhubani Line Art",
    origin: "Mithila, Bihar",
    time: "7 Days",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCQloTU6n-Ogz1D4JwtRX9sLwSzRSP4_ETOe_92LPLCfZM-QkvRw1eqnZQyu7qiFvH_fRAaokg84Ang8YHndo2uc3lq7yyU0AgjQINGrKobybUEhZS81FLJqonUkoGvpcsb5yTSgEMRJDNNBHhu75unluxiv0gBPUI78REMnpwh8DwKTfO0yTcBb_CAsGL2iTxs9LjxujNIvdo7cNJdU4n_3x_k49HOvO1riLY3DV02",
    desc: "Intricate depiction of Surya, the sun god, drawn with nibs dipped in lampblack soot on handmade paper, framed with ritual borders.",
    category: "paintings",
    tags: ["2000-3500", "paintings"],
    rating: 5.0,
    reviewsCount: 89,
    stock: 7,
    material: "Handmade Paper & Soot Pigment",
    leadFree: true,
    artisanSharePercentage: 94
  },
  {
    id: "prod-10",
    title: "Tree of Life Hand-Drawn Scroll",
    price: 3200,
    retail: "₹6,800 retail",
    artist: "Master Devendra Chitrakar (7th Gen)",
    craft: "Srikalahasti Kalamkari",
    origin: "Srikalahasti, Andhra Pradesh",
    time: "10 Days",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDV7GYPPT8Qns4GIurHsU8OBywdun1if4E14PEXL8Acdd6tNjyF6uDZ209-zTl4P5GkCYaxh5dXbV_HeM_KiKml5-CDB3fg7tJUOXwbhPk4hCEhO6EGiF1OBNIUalroy8kFS5TcILSKhGsrd4CodMdgz7BQyilVeyjAHGgIScvvEFIG7LpY7mK_KsL7RZ21yyt_eH1qTKUOu5Fr9p-K1nWmP0b_JAI3E18gTN0xfoff",
    desc: "Hand-painted on hand-spun khadi cotton soaked in buffalo milk, drawn with bamboo pens dipped in fermented iron acetate, and washed 7 times in the Swarnamukhi River.",
    category: "paintings",
    tags: ["2000-3500", "paintings"],
    rating: 5.0,
    reviewsCount: 204,
    stock: 5,
    material: "Organic Khadi Cotton & Natural Iron Wash",
    leadFree: true,
    artisanSharePercentage: 94
  }
];

// Seed Artisans
const SEED_ARTISANS = [
  {
    id: "artisan-1",
    name: "Master Ram Prasad",
    lineage: "4th Generation Terracotta Potter",
    location: "Gorakhpur, Uttar Pradesh",
    craft: "River Silt Terracotta",
    activeSince: "1982",
    apprenticeFamilies: 12,
    bio: "Using techniques perfected by his great-grandfather, Ram Prasad shapes raw river silt from the Rapti River into ritual diyas and incense holders without using electrical power.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: "artisan-2",
    name: "Master Devendra Chitrakar",
    lineage: "7th Generation Kalamkari Master",
    location: "Srikalahasti, Andhra Pradesh",
    craft: "Natural Dye Kalamkari",
    activeSince: "1974",
    apprenticeFamilies: 19,
    bio: "Preserving the 182-year-old family tradition of Srikalahasti freehand drawing using bamboo kalam pens and natural indigo, pomegranate rind, and alum baths.",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCYos-D0d3ZIm9UNaC2BzSayEtQDB_dog0RHdhbLEmHaxaueROgH2-FOUXqM9h9_5mtfzno-wIAmS_47L6_mXJWv7eJp4WE5VrV9dzJFDFs1u72AOZJSg5yRIl8Fn0ITlZ_wqTDSmlJue3PQkFFRVKB__L6q6eArRxWcDfwmGqfi0DhDVKtVKHzM4LJVoJgNGEShGJemb6DaVJD_ETmf7puHBY_2X0zb3pa6rAaKrlB"
  },
  {
    id: "artisan-3",
    name: "Master K. Nageswara Rao",
    lineage: "3rd Generation Toymaker",
    location: "Kondapalli, Andhra Pradesh",
    craft: "Kondapalli Softwood Toys",
    activeSince: "1988",
    apprenticeFamilies: 8,
    bio: "Carves traditional dancing figures from Poniki softwood harvested selectively to protect regional forests, balancing every figure on handcrafted brass pivots.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80"
  }
];

// Initial Seed Orders with Delivery Tracking
const SEED_ORDERS = [
  {
    orderId: "HC-GI-84920",
    customerName: "Vikramaditya Sharma",
    customerEmail: "vikram@example.com",
    customerLocation: "Gurgaon, Haryana",
    items: [
      { name: "Terracotta Incense & Diya Set", price: 450, qty: 1 },
      { name: "Blue Pottery Tea Mug Set (Pair)", price: 1200, qty: 1 }
    ],
    totalAmount: 1650,
    artisanPayout: 1551,
    status: "Delivered",
    isDelivered: true,
    deliveryStatus: "delivered",
    fulfillmentStage: "delivered",
    deliveredAt: new Date(Date.now() - 86400000).toISOString(),
    trackingNumber: "INPOST-84920",
    courier: "India Post SpeedPost",
    createdAt: new Date(Date.now() - 86400000 * 4).toISOString()
  },
  {
    orderId: "HC-GI-84921",
    customerName: "Ananya Iyer",
    customerEmail: "ananya@example.com",
    customerLocation: "Bengaluru, Karnataka",
    items: [
      { name: "Tree of Life Hand-Drawn Scroll", price: 3200, qty: 1 }
    ],
    totalAmount: 3200,
    artisanPayout: 3008,
    status: "In Transit",
    isDelivered: false,
    deliveryStatus: "not_delivered",
    fulfillmentStage: "in_transit",
    deliveredAt: null,
    trackingNumber: "INPOST-84921",
    courier: "Guild Express Logistics",
    createdAt: new Date(Date.now() - 86400000 * 2).toISOString()
  },
  {
    orderId: "HC-GI-84922",
    customerName: "Pooja Hegde",
    customerEmail: "pooja@example.com",
    customerLocation: "Mumbai, Maharashtra",
    items: [
      { name: "Handwoven Ikat Silk-Cotton Stole", price: 1450, qty: 1 }
    ],
    totalAmount: 1450,
    artisanPayout: 1363,
    status: "Delivered",
    isDelivered: true,
    deliveryStatus: "delivered",
    fulfillmentStage: "delivered",
    deliveredAt: new Date(Date.now() - 86400000 * 2).toISOString(),
    trackingNumber: "INPOST-84922",
    courier: "India Post SpeedPost",
    createdAt: new Date(Date.now() - 86400000 * 5).toISOString()
  },
  {
    orderId: "HC-GI-84923",
    customerName: "Karan Mehta",
    customerEmail: "karan@example.com",
    customerLocation: "New Delhi, Delhi",
    items: [
      { name: "Hand-Etched Acoustic Temple Bell", price: 950, qty: 1 }
    ],
    totalAmount: 950,
    artisanPayout: 893,
    status: "In Transit",
    isDelivered: false,
    deliveryStatus: "not_delivered",
    fulfillmentStage: "in_transit",
    deliveredAt: null,
    trackingNumber: "INPOST-84923",
    courier: "India Post SpeedPost",
    createdAt: new Date(Date.now() - 86400000).toISOString()
  },
  {
    orderId: "HC-GI-84924",
    customerName: "Rohan Nambiar",
    customerEmail: "rohan@example.com",
    customerLocation: "Chennai, Tamil Nadu",
    items: [
      { name: "Miniature Dancing Bobble Toy", price: 650, qty: 1 }
    ],
    totalAmount: 650,
    artisanPayout: 611,
    status: "Processing",
    isDelivered: false,
    deliveryStatus: "not_delivered",
    fulfillmentStage: "pending_packing",
    deliveredAt: null,
    trackingNumber: "INPOST-84924",
    courier: "Guild Express Logistics",
    createdAt: new Date(Date.now() - 3600000 * 5).toISOString()
  },
  {
    orderId: "HC-GI-84925",
    customerName: "Sunita Deshmukh",
    customerEmail: "sunita@example.com",
    customerLocation: "Pune, Maharashtra",
    items: [
      { name: "Jaali Filigree Carved Keepsake Box", price: 2200, qty: 1 }
    ],
    totalAmount: 2200,
    artisanPayout: 2068,
    status: "Delivered",
    isDelivered: true,
    deliveryStatus: "delivered",
    fulfillmentStage: "delivered",
    deliveredAt: new Date(Date.now() - 86400000 * 3).toISOString(),
    trackingNumber: "INPOST-84925",
    courier: "India Post SpeedPost",
    createdAt: new Date(Date.now() - 86400000 * 6).toISOString()
  }
];

class FirebaseDatabaseService {
  constructor() {
    this.app = null;
    this.db = null;
    this.initialized = false;
    this.isLive = false;
  }

  // Initialize Firebase using current config
  init() {
    try {
      if (typeof firebase === "undefined") {
        console.warn("Firebase SDK script not loaded yet.");
        return false;
      }

      const config = window.FIREBASE_CONFIG;
      if (!config || !config.apiKey) {
        console.warn("No Firebase configuration found.");
        return false;
      }

      // Check if already initialized with same project
      if (firebase.apps.length > 0) {
        this.app = firebase.apps[0];
      } else {
        this.app = firebase.initializeApp(config);
      }

      this.db = firebase.firestore();
      this.initialized = true;
      this.isLive = window.isFirebaseConfigSet();
      return true;
    } catch (err) {
      console.error("Failed to initialize Firebase:", err);
      return false;
    }
  }

  // Test connection to Firestore
  async testConnection() {
    if (!this.init()) {
      return { success: false, message: "Firebase SDK is not initialized." };
    }

    if (!window.isFirebaseConfigSet()) {
      return { 
        success: false, 
        message: "You are using placeholder credentials. Please paste your real Firebase Config." 
      };
    }

    try {
      // Ping Firestore by attempting to read with a short limit
      const snapshot = await this.db.collection("products").limit(1).get();
      return {
        success: true,
        message: `Connected successfully! Found ${snapshot.size} product(s) in Firestore.`,
        empty: snapshot.empty
      };
    } catch (error) {
      return {
        success: false,
        message: `Firestore connection error: ${error.message}. Make sure your Firestore security rules allow read/write in test mode.`
      };
    }
  }

  // 1-Click Database Seeding
  async seedDatabase(onProgress = null) {
    if (!this.init()) {
      throw new Error("Firebase SDK not initialized");
    }

    const report = (msg) => {
      console.log(`[Firebase Seeder] ${msg}`);
      if (onProgress) onProgress(msg);
    };

    report("Starting database seed...");

    // 1. Seed Products
    report(`Uploading ${SEED_PRODUCTS.length} authentic handicraft products...`);
    const batch = this.db.batch();

    for (const prod of SEED_PRODUCTS) {
      const docRef = this.db.collection("products").doc(prod.id);
      batch.set(docRef, {
        ...prod,
        updatedAt: firebase.firestore.FieldValue.serverTimestamp()
      }, { merge: true });
    }
    await batch.commit();
    report(`✓ Successfully seeded ${SEED_PRODUCTS.length} products into 'products' collection.`);

    // 2. Seed Artisans
    report(`Uploading ${SEED_ARTISANS.length} master artisan profiles...`);
    const artisanBatch = this.db.batch();
    for (const art of SEED_ARTISANS) {
      const docRef = this.db.collection("artisans").doc(art.id);
      artisanBatch.set(docRef, {
        ...art,
        updatedAt: firebase.firestore.FieldValue.serverTimestamp()
      }, { merge: true });
    }
    await artisanBatch.commit();
    report(`✓ Successfully seeded ${SEED_ARTISANS.length} artisan profiles into 'artisans' collection.`);

    // 3. Seed Sample Orders
    report(`Uploading initial orders...`);
    const orderBatch = this.db.batch();
    for (const ord of SEED_ORDERS) {
      const docRef = this.db.collection("orders").doc(ord.orderId);
      orderBatch.set(docRef, ord, { merge: true });
    }
    await orderBatch.commit();
    report(`✓ Successfully seeded sample orders into 'orders' collection.`);

    report("🎉 Database initialization and seeding complete!");
    return {
      productsCount: SEED_PRODUCTS.length,
      artisansCount: SEED_ARTISANS.length,
      ordersCount: SEED_ORDERS.length
    };
  }

  // Fetch all products with fallback to SEED_PRODUCTS
  async getProducts() {
    if (this.init() && window.isFirebaseConfigSet()) {
      try {
        const snapshot = await this.db.collection("products").get();
        if (!snapshot.empty) {
          const list = [];
          snapshot.forEach(doc => {
            list.push({ id: doc.id, ...doc.data() });
          });
          return list;
        }
      } catch (err) {
        console.warn("Could not fetch from Firestore, falling back to local dataset:", err);
      }
    }
    return SEED_PRODUCTS;
  }

  // Subscribe to real-time updates for products
  subscribeProducts(callback) {
    if (!this.init() || !window.isFirebaseConfigSet()) {
      callback(SEED_PRODUCTS);
      return () => {};
    }

    return this.db.collection("products").onSnapshot(snapshot => {
      if (snapshot.empty) {
        callback(SEED_PRODUCTS);
      } else {
        const list = [];
        snapshot.forEach(doc => {
          list.push({ id: doc.id, ...doc.data() });
        });
        callback(list);
      }
    }, err => {
      console.warn("Products snapshot error:", err);
      callback(SEED_PRODUCTS);
    });
  }

  // Add new product
  async addProduct(productData) {
    if (!this.init()) throw new Error("Firebase not initialized");
    const docRef = await this.db.collection("products").add({
      ...productData,
      rating: productData.rating || 5.0,
      reviewsCount: productData.reviewsCount || 1,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    });
    return docRef.id;
  }

  // Update product
  async updateProduct(productId, updates) {
    if (!this.init()) throw new Error("Firebase not initialized");
    await this.db.collection("products").doc(productId).update({
      ...updates,
      updatedAt: firebase.firestore.FieldValue.serverTimestamp()
    });
  }

  // Delete product
  async deleteProduct(productId) {
    if (!this.init()) throw new Error("Firebase not initialized");
    await this.db.collection("products").doc(productId).delete();
  }

  // Create an order with Delivery Tracking fields
  async createOrder(orderData) {
    const orderId = "HC-GI-" + Math.floor(10000 + Math.random() * 90000);
    const trackingNumber = "INPOST-" + Math.floor(10000 + Math.random() * 90000);
    
    const fullOrder = {
      orderId,
      customerName: orderData.customerName || "Patron Craft Connoisseur",
      customerEmail: orderData.customerEmail || "patron@heritageconnect.org",
      customerLocation: orderData.customerLocation || "New Delhi, India",
      items: orderData.items || [],
      totalAmount: orderData.totalAmount || 0,
      artisanPayout: Math.round((orderData.totalAmount || 0) * 0.94),
      status: "Processing",
      isDelivered: false,
      deliveryStatus: "not_delivered",
      fulfillmentStage: "pending_packing",
      deliveredAt: null,
      trackingNumber,
      courier: "India Post SpeedPost",
      createdAt: new Date().toISOString()
    };

    // Update in-memory seed list
    SEED_ORDERS.unshift(fullOrder);

    if (this.init() && window.isFirebaseConfigSet()) {
      try {
        await this.db.collection("orders").doc(orderId).set(fullOrder);
      } catch (err) {
        console.warn("Failed to write order to Firestore, falling back to local simulation:", err);
      }
    }

    return fullOrder;
  }

  // Update Delivery Status (Delivered vs Not Delivered)
  async updateOrderDelivery(orderId, isDelivered, stage = null) {
    const fulfillmentStage = stage || (isDelivered ? "delivered" : "in_transit");
    const status = isDelivered ? "Delivered" : (fulfillmentStage === "in_transit" ? "In Transit" : "Processing");
    const deliveredAt = isDelivered ? new Date().toISOString() : null;

    const updates = {
      isDelivered: !!isDelivered,
      deliveryStatus: isDelivered ? "delivered" : "not_delivered",
      fulfillmentStage,
      status,
      deliveredAt
    };

    // Update in-memory fallback
    const localOrder = SEED_ORDERS.find(o => (o.orderId || o.id) === orderId);
    if (localOrder) {
      Object.assign(localOrder, updates);
    }

    if (this.init() && window.isFirebaseConfigSet()) {
      try {
        await this.db.collection("orders").doc(orderId).update({
          ...updates,
          updatedAt: firebase.firestore.FieldValue.serverTimestamp()
        });
      } catch (err) {
        console.warn("Firestore order update error:", err);
      }
    }

    return updates;
  }

  // Compute live Delivery Statistics (Delivered vs Not Delivered)
  computeDeliveryStats(ordersList) {
    const list = ordersList || SEED_ORDERS;
    const total = list.length;
    const delivered = list.filter(o => o.isDelivered === true || o.deliveryStatus === 'delivered' || o.status === 'Delivered').length;
    const notDelivered = total - delivered;
    const inTransit = list.filter(o => !o.isDelivered && (o.fulfillmentStage === 'in_transit' || o.status === 'In Transit' || o.status === 'Dispatched')).length;
    const pendingPacking = notDelivered - inTransit;
    const deliveredPercent = total > 0 ? Math.round((delivered / total) * 100) : 0;

    return {
      totalOrders: total,
      deliveredCount: delivered,
      notDeliveredCount: notDelivered,
      inTransitCount: inTransit,
      pendingPackingCount: pendingPacking > 0 ? pendingPacking : 0,
      deliveredPercentage: deliveredPercent
    };
  }

  // Get orders
  async getOrders() {
    if (this.init() && window.isFirebaseConfigSet()) {
      try {
        const snapshot = await this.db.collection("orders").orderBy("createdAt", "desc").get();
        const list = [];
        snapshot.forEach(doc => list.push({ id: doc.id, ...doc.data() }));
        return list;
      } catch (err) {
        console.warn("Firestore orders read failed:", err);
      }
    }
    return SEED_ORDERS;
  }

  // Subscribe to live orders
  subscribeOrders(callback) {
    if (!this.init() || !window.isFirebaseConfigSet()) {
      callback(SEED_ORDERS);
      return () => {};
    }

    return this.db.collection("orders").onSnapshot(snapshot => {
      const list = [];
      snapshot.forEach(doc => list.push({ id: doc.id, ...doc.data() }));
      // Sort client side if no composite index yet
      list.sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0));
      callback(list);
    }, err => {
      console.warn("Orders listener error:", err);
      callback(SEED_ORDERS);
    });
  }

  // Get Artisans
  async getArtisans() {
    if (this.init() && window.isFirebaseConfigSet()) {
      try {
        const snapshot = await this.db.collection("artisans").get();
        if (!snapshot.empty) {
          const list = [];
          snapshot.forEach(doc => list.push({ id: doc.id, ...doc.data() }));
          return list;
        }
      } catch (err) {
        console.warn("Firestore artisans read failed:", err);
      }
    }
    return SEED_ARTISANS;
  }
}

// Global instance
window.HeritageDB = new FirebaseDatabaseService();
window.SEED_PRODUCTS_DATA = SEED_PRODUCTS;
window.SEED_ARTISANS_DATA = SEED_ARTISANS;
