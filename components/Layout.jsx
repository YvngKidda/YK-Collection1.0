"use client";
import { useState } from "react";

export default function Layout({ children }) {
  const [tapCount, setTapCount] = useState(0);

  const handleTap = () => {
    const next = tapCount + 1;

    if (next === 5) {
      const password = prompt("Enter admin password:");
      if (password === "Chibuzor12.") {
        window.location.href = "/admin";
      } else {
        alert("Wrong password");
      }
      setTapCount(0);
    } else {
      setTapCount(next);
    }
  };

  return (
    <div>
      {/* HEADER */}
      <header style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "16px",
        borderBottom: "1px solid #eee"
      }}>
        <h1 style={{ fontWeight: "700" }}>YK</h1>

        <div>
          <a href="/" style={{ marginRight: "15px" }}>Home</a>
          <a href="/shop">Shop</a>
        </div>
      </header>

      {/* MAIN */}
      <main>{children}</main>

      {/* FOOTER */}
      <footer style={{
        textAlign: "center",
        padding: "40px 20px",
        borderTop: "1px solid #eee"
      }}>
        <p onClick={handleTap} style={{ cursor: "pointer" }}>
          © YK Collection
        </p>

        <a href="https://wa.me/2349014223167">
          Designed by Kiddarts
        </a>
      </footer>
    </div>
  );
}
