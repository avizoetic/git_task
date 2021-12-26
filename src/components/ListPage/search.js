import React from "react";

export default function Search({
  order,
  orderHandler,
  handleChange,
  handleSubmit,
  text,
}) {
  return (
    <form>
      <button style={{ marginRight: "20px" }} onClick={(e) => orderHandler(e)}>
        {order === "asc" ? "up" : "down"}
      </button>
      <i className="fas fa-sort"></i>
      <input
        type="text"
        placeholder="Search repository"
        value={text}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>Search</button>
    </form>
  );
}
