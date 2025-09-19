import useInView from "../hooks/useInView";

export default function Footer() {
  const [ref, isVisible] = useInView();

  return (
    <footer
      ref={ref}
      className={`bg-black text-gray-400 text-center py-6 fade-in-up ${isVisible ? "animate" : ""}`}
      style={{ animationDelay: "0.3s" }}
    >
      <p className="text-yellow-400 font-bold">Side Studio</p>
      <p>© {new Date().getFullYear()} Side Studio. All rights reserved.</p>
    </footer>
  );
}
