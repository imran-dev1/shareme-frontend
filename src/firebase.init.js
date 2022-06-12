import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
   apiKey: "AIzaSyDwv0WLeBQ-OgnGdOhnSLptP1WA4xCokBo",
   authDomain: "shareme-ia.firebaseapp.com",
   projectId: "shareme-ia",
   storageBucket: "shareme-ia.appspot.com",
   messagingSenderId: "532241418035",
   appId: "1:532241418035:web:52c8b731c2c91588cce046",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
