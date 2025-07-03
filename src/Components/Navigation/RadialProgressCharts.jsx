import React from "react";
import {
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";
 
const data = [
  {
    name: "Sales",
    value: 5,
    fill: "#4f46e5", // Indigo
    color: "#4f46e5",
    change: "+36%",
    up: true,
  },
  {
    name: "Confirm",
    value: 36,
    fill: "#22c55e", // Green
    color: "#22c55e",
    change: "+36%",
    up: true,
  },
  {
    name: "With Zone",
    value: 100,
    fill: "#f43f5e", // Red
    background: " linear-gradient(0deg, #C4C4C4, #C4C4C4),linear-gradient(195.23deg, #EDAD2B 10.7%, #DF1B47 86.26%)",
    color: "#f43f5e",
    change: "-6%",
    up: false,
  },
];
 
const RadialProgressChart = () => {
  const size = 150;
 
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
      {/* Chart */}
      <svg width={size} height={size}>
        {data.map((d, index) => {
          const radius = 15 + index * 20;
          const circumference = 2 * Math.PI * radius;
          const offset = circumference - (d.value / 100) * circumference;
 
          return (
            <g key={d.name} transform={`translate(${size / 2}, ${size / 2})`}>
              <circle
                r={radius}
                stroke="#f3f4f6"
                strokeWidth={12}
                fill="none"
              />
              <circle
                r={radius}
                stroke={d.color}
                strokeWidth={12}
                strokeDasharray={circumference}
                strokeDashoffset={offset}
                strokeLinecap="round"
                fill="none"
                transform="rotate(-90)"
              />
            </g>
          );
        })}
      </svg>
 
      {/* Legend */}
      <div>
        {data.map((d) => (
          <div
            key={d.name}
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "1rem",
            }}
          >
            <span
              style={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                backgroundColor: d.color,
                marginRight: 10,
              }}
            ></span>
            <span style={{ fontWeight: 500, marginRight: 8 }}>{d.name}</span>
            <span
              style={{
                color: d.up ? "#22c55e" : "#f43f5e",
                fontWeight: "bold",
              }}
            >
              {d.change} {d.up ? "↑" : "↓"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
 
export default RadialProgressChart;