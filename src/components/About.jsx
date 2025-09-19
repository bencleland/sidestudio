import useInView from "../hooks/useInView";

export default function About() {
  const [ref, isVisible] = useInView();

  return (
    <section id="about" ref={ref} className="bg-white py-16 px-6 text-center">
      <h2
        className={`text-3xl font-bold text-yellow-500 mb-6 fade-in-up ${isVisible ? "animate" : ""}`}
        style={{ animationDelay: "0.3s" }}
      >
        About Us
      </h2>
      <p
        className={`text-gray-700 max-w-2xl mx-auto fade-in-up ${isVisible ? "animate" : ""}`}
        style={{ animationDelay: "0.6s" }}
      >
        Side Studio is your creative hub for recording, audio installs, and
        innovative sound solutions. We bring expertise, personality, and a
        retro-modern style to every project. (Placeholder text – replace later.)
      </p>
    </section>
  );
}
