import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaSort } from "@react-icons/all-files/fa/FaSort";

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
        {order === "asc" ? "Asc" : "Desc"}
      </button>
      {/* <i className="fas fa-sort"></i> */}
      {/* <FontAwesomeIcon icon="fa-solid fa-sort" />
      <FaSort /> */}
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
