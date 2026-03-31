import "./globals.css";

export const metadata = {
  title: "YK Collection",
  description: "Luxury fashion store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
