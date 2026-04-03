"use client";

import { useEffect, useState } from "react";
import { db } from "../../lib/firebase";
import { collection, getDocs } from "firebase/firestore";

export default function Shop() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const querySnapshot = await getDocs(collection(db, "products"));
      const items = [];

      querySnapshot.forEach((doc) => {
        items.push({ id: doc.id, ...doc.data() });
      });

      setProducts(items);
    }

    fetchProducts();
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Shop</h2>

      {products.length === 0 ? (
        <p>No products yet...</p>
      ) : (
        <div style={{ display: "grid", gap: 20 }}>
          {products.map((p) => (
            <div key={p.id} style={{ border: "1px solid #eee", padding: 10 }}>
              <img src={p.image} width="100%" />

              <h3>{p.name}</h3>
              <p>₦{p.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
