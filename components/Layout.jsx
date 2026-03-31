'use client';
import { useState } from "react";

export default function Layout({ children }) {
  const [tap, setTap] = useState(0);

  const handleTap = () => {
    const next = tap + 1;
    if (next === 5) {
      const pass = prompt("Enter admin password:");
      if (pass === "Chibuzor12.") {
        window.location.href = "/admin";
      }
      setTap(0);
    } else {
      setTap(next);
    }
  };

  return (
    <div>
      <header>
        <h1>YK</h1>
        <nav>
          <a href="/">Home</a>
          <a href="/shop">Shop</a>
        </nav>
      </header>

      <main>{children}</main>

      <footer>
        <p onClick={handleTap}>© YK Collection</p>
        <a href="https://wa.me/2349014223167">Designed by Kiddarts</a>
      </footer>
    </div>
  );
}
