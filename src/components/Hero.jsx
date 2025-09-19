export default function Hero() {
  return (
    <section
      className="text-center flex flex-col items-center justify-center min-h-screen px-6 relative animate-dot-drift"
      style={{
        backgroundColor: "#000",
        backgroundImage: `
          radial-gradient(circle, rgba(255,255,255,0.12) 1px, transparent 1px),
          linear-gradient(rgba(255, 216, 0, 0.05), rgba(255, 216, 0, 0.05))
        `,
        backgroundSize: "24px 24px, 100% 100%",
      }}
    >
      <img
        src="/logo.png"
        alt="Side Studio Logo"
        className="w-56 sm:w-64 md:w-72 lg:w-80 mb-6 fade-in-up animate"
        style={{ animationDelay: "0.3s" }}
      />

      <div
        className="text-gray-200 text-lg sm:text-xl md:text-2xl mb-8 fade-in-up animate flex items-center justify-center flex-wrap gap-3"
        style={{ animationDelay: "0.6s" }}
      >
        <span>Recording</span>
        <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
        <span>Installs</span>
        <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
        <span>Creative</span>
      </div>

      <a
        href="#intake-form"
        className="bg-yellow-400 text-black font-bold py-3 px-6 rounded-full transition hover:bg-yellow-300 hover:shadow-neon fade-in-up animate"
        style={{ animationDelay: "0.9s" }}
      >
        Work With Us
      </a>
    </section>
  );
}
