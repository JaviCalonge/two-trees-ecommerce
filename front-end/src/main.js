import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./main.css";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebaseConfig"; // Importar configuración
// Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Initialize Firebase
initializeApp(firebaseConfig);

const app = createApp(App);

app.use(router);
app.mount("#app");

/////////////////////////

// import { createApp } from "vue";
// import App from "./App.vue";
// import router from "./router";
// import "./main.css";

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCYFWnEgsjITHm6OIgXsH2t1b3HndT-UMg",
//   authDomain: "basil-e-commerce.firebaseapp.com",
//   projectId: "basil-e-commerce",
//   storageBucket: "basil-e-commerce.firebasestorage.app",
//   messagingSenderId: "145733370148",
//   appId: "1:145733370148:web:d1ab652382b2daa5fc33b1",
// };

// // Initialize Firebase
// initializeApp(firebaseConfig);

// const app = createApp(App);

// app.use(router);
// app.mount("#app");
