// components/StatsBar.tsx
export default function StatsBar() {
  const stats = [
    { label: "Years of Experience", value: "5+" },
    { label: "Clients Served", value: "1.0k+" },
    { label: "Global Reach", value: "20+" },
  ];

  return (
    <section className="bg-gradient-to-r from-gray-900 to-gray-950 py-12 border-t border-gray-800">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 text-center gap-8 px-6">
        {stats.map((stat, index) => (
          <div key={stat.label} className="group hover:scale-105 transition-transform duration-300">
            <h3 className="text-4xl font-bold text-orange-500 group-hover:text-orange-400 transition-colors">{stat.value}</h3>
            <p className="text-gray-400 mt-2 group-hover:text-gray-300 transition-colors">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
