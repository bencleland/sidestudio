import useInView from "../hooks/useInView";

export default function IntakeForm() {
  const [ref, isVisible] = useInView();

  return (
    <section
      id="intake-form"
      ref={ref}
      className="text-white py-16 px-6 relative animate-dot-drift"
      style={{
        backgroundColor: "#000",
        backgroundImage: `
          radial-gradient(circle, rgba(255,255,255,0.12) 1px, transparent 1px),
          linear-gradient(rgba(255, 216, 0, 0.05), rgba(255, 216, 0, 0.05))
        `,
        backgroundSize: "24px 24px, 100% 100%",
      }}
    >
      <h2
        className={`text-3xl font-bold text-yellow-400 mb-8 text-center fade-in-up ${isVisible ? "animate" : ""}`}
        style={{ animationDelay: "0.3s" }}
      >
        Get In Touch
      </h2>

      <form name="contact" method="POST" data-netlify="true" className="max-w-lg mx-auto space-y-4">
        <input type="hidden" name="form-name" value="contact" />

        {[
          { type: "text", name: "name", placeholder: "Name", delay: "0.5s" },
          { type: "email", name: "email", placeholder: "Email", delay: "0.7s" },
          { type: "text", name: "phone", placeholder: "Phone", delay: "0.9s" },
        ].map((field, idx) => (
          <input
            key={idx}
            type={field.type}
            name={field.name}
            placeholder={field.placeholder}
            className={`w-full p-3 rounded bg-gray-900 border border-yellow-400 text-white placeholder-gray-400 fade-in-up ${isVisible ? "animate" : ""}`}
            style={{ animationDelay: field.delay }}
            required={field.type !== "text" || field.name !== "phone"}
          />
        ))}

        <select
          name="project"
          className={`w-full p-3 rounded bg-gray-900 border border-yellow-400 text-white fade-in-up custom-select ${isVisible ? "animate" : ""}`}
          style={{ animationDelay: "1.1s" }}
        >
          <option>Recording</option>
          <option>Installs</option>
          <option>Creative</option>
          <option>Something Else</option>
        </select>

        <textarea
          name="message"
          rows="4"
          placeholder="Tell us about your project..."
          className={`w-full p-3 rounded bg-gray-900 border border-yellow-400 text-white placeholder-gray-400 fade-in-up ${isVisible ? "animate" : ""}`}
          style={{ animationDelay: "1.3s" }}
        ></textarea>

        <button
          type="submit"
          className={`bg-yellow-400 text-black font-bold py-3 px-6 rounded-full hover:bg-yellow-300 transition fade-in-up ${isVisible ? "animate" : ""}`}
          style={{ animationDelay: "1.5s" }}
        >
          Submit
        </button>
      </form>
    </section>
  );
}
