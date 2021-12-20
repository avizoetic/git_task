import React from "react";
import { useLocation } from "react-router-dom";

export default function Detail() {
  const location = useLocation();
  console.log("na", location.state);
  return (
    <div>
      <h1>Detail Page</h1>
    </div>
  );
}
