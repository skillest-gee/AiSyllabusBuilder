import React from "react";
import type { User } from "../types";

const mockUsers: User[] = [
  { id: 1, name: "Alice", role: "Instructor" },
  { id: 2, name: "Bob", role: "Admin" },
];

const UserList: React.FC = () => {
  return (
    <div>
      <h2>Registered Users</h2>
      <ul>
        {mockUsers.map((user) => (
          <li key={user.id}>
            {user.name} – {user.role}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
