import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBLu4AmwPqDnKBsQTXqcd1hAUs7Wpc2OYU",
  authDomain: "exam-project-d3676.firebaseapp.com",
  projectId: "exam-project-d3676",
  storageBucket: "exam-project-d3676.appspot.com",
  messagingSenderId: "843332895675",
  appId: "1:843332895675:web:f8d2991b497f0f4b14fa9e",
  measurementId: "G-DC0Q9JLRSX"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)