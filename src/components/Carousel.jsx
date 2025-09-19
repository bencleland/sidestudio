import useInView from "../hooks/useInView";

export default function Carousel() {
  const [ref, isVisible] = useInView();

  return (
    <section ref={ref} className="bg-gray-100 py-12">
      <div className="overflow-x-scroll flex space-x-4 px-6">
        {[1, 2, 3, 4].map((n, idx) => (
          <img
            key={n}
            src={`/carousel${n}.jpg`}
            alt={`Carousel ${n}`}
            className={`w-64 h-40 object-cover flex-shrink-0 rounded shadow fade-in-up ${isVisible ? "animate" : ""}`}
            style={{ animationDelay: `${0.3 + idx * 0.2}s` }}
          />
        ))}
      </div>
    </section>
  );
}
