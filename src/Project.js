import React from "react";

export default function ModuleCard({ title, description, tasks, techStack }) {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p><strong>Description:</strong> {description}</p>
      <ul>
        {tasks.map((task, idx) => (
          <li key={idx}>{task}</li>
        ))}
      </ul>
      <p><strong>Tech Stack:</strong> {techStack}</p>
    </div>
  );
}
