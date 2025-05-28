import React, { useState } from "react";
import type { Syllabus } from "../types";

const initialSyllabi: Syllabus[] = [
  { id: 1, title: "Intro to AI", owner: "Alice" },
  { id: 2, title: "Web Dev 101", owner: "Bob" },
];

const SyllabusList: React.FC = () => {
  const [syllabi, setSyllabi] = useState<Syllabus[]>(initialSyllabi);

  const handleDelete = (id: number) => {
    setSyllabi(syllabi.filter((s) => s.id !== id));
  };

  return (
    <div>
      <h2>Generated Syllabi</h2>
      <ul>
        {syllabi.map((s) => (
          <li key={s.id}>
            {s.title} by {s.owner}
            <button
              onClick={() => handleDelete(s.id)}
              style={{ marginLeft: "10px" }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SyllabusList;
