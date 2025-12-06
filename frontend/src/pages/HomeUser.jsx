import React from "react";

export default function HomeUser() {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) return <p>Loading...</p>;

  return (
    <div>
      <h1>Welcome {user.name}</h1>
      <p>Phone: {user.phone}</p>
      <p>Address: {user.address}</p>
    </div>
  );
}
