import { useEffect, useState } from "react";
import "./Stats.css";

const statsData = [
  { value: 50, label: "Projects Delivered", suffix: "+" },
  { value: 100, label: "Students Trained", suffix: "+" },
  { value: 10, label: "Technologies", suffix: "+" },
  { value: 5, label: "Countries Reached", suffix: "+" },
];

function Stats() {
  const [counts, setCounts] = useState(statsData.map(() => 0));

  useEffect(() => {
    const intervals = statsData.map((stat, index) =>
      setInterval(() => {
        setCounts(prev => {
          const updated = [...prev];
          if (updated[index] < stat.value) {
            updated[index] += 1;
          }
          return updated;
        });
      }, 25)
    );

    return () => intervals.forEach(clearInterval);
  }, []);

  return (
    <section className="stats-section">
      <div className="stats-bg"></div>

      <div className="stats-container">
        {statsData.map((stat, index) => (
          <div className="stat-card" key={index}>
            <h3>
              {counts[index]}
              {stat.suffix}
            </h3>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;
