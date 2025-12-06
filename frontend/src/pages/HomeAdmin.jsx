import React from "react";

export default function HomeAdmin() {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) return <p>Loading...</p>;

  return (
    <div>
      <h1>Admin Panel</h1>
      <h2>Welcome {user.name}</h2>
    </div>
  );
}
