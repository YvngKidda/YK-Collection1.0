import Layout from "../../components/Layout";

export default function Shop() {
  const products = [
    { id: 1, name: "Black Hoodie", price: 25000 },
    { id: 2, name: "Sneakers", price: 40000 }
  ];

  return (
    <Layout>
      <div>
        {products.map(p => (
          <div key={p.id}>
            <h2>{p.name}</h2>
            <p>₦{p.price}</p>
          </div>
        ))}
      </div>
    </Layout>
  );
}