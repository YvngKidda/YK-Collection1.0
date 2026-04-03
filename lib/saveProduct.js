import { db } from "./firebase";
import { collection, addDoc } from "firebase/firestore";

export async function saveProduct(product) {
  await addDoc(collection(db, "products"), product);
}
