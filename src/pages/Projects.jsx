export default function Projects() {
  const projects = ["Fiber Z", "Upag", "T-Connect"];

  return (
    <section className="px-12 py-16">
      <h2 className="text-3xl font-bold mb-8">My Projects</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <div
            key={i}
            className="bg-[#f2f4f7]/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl hover:scale-105 transition"
          >
            <h3 className="text-xl font-semibold">{project}</h3>
            <p className="text-gray-400 mt-2">
              Modern scalable web application.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
