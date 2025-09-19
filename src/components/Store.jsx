import useInView from "../hooks/useInView";

export default function Store() {
  const [ref, isVisible] = useInView();
  const products = [
    { id: 1, name: "Side Studio Tee (Blue)", price: "$25", img: "/shirt-blue.jpg" },
    { id: 2, name: "Get Nanner’d Show Tee", price: "$25", img: "/shirt-nanners.jpg" },
    { id: 3, name: "Side Studio Tee (Red)", price: "$25", img: "/shirt-red.jpg" },
  ];

  return (
    <section id="store" ref={ref} className="bg-white py-16 px-6">
      <h2
        className={`text-3xl font-bold text-yellow-500 mb-8 text-center fade-in-up ${isVisible ? "animate" : ""}`}
        style={{ animationDelay: "0.3s" }}
      >
        Side Studio Store
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 max-w-5xl mx-auto">
        {products.map((p, idx) => (
          <div
            key={p.id}
            className={`border rounded-lg p-4 text-center shadow fade-in-up ${isVisible ? "animate" : ""}`}
            style={{ animationDelay: `${0.5 + idx * 0.2}s` }}
          >
            <img src={p.img} alt={p.name} className="w-full h-64 object-cover mb-4 rounded" />
            <h3 className="font-semibold">{p.name}</h3>
            <p className="text-gray-600 mb-2">{p.price}</p>
            <button className="bg-yellow-400 text-black py-2 px-4 rounded-full hover:bg-yellow-300 transition">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
