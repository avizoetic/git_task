import React from "react";

export default function Search({ handleChange, handleSubmit, text }) {
  return (
    <form>
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
