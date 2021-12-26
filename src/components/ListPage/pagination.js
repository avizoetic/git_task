import React from "react";

export default function Pagination({
  paginatedBtn,
  handlePageChange,
  setPerPage,
}) {
  const handleChange = (e) => {
    console.log(e.target.value);
    setPerPage(e.target.value);
  };
  return (
    <div className="pagination">
      <form>
        <select onChange={handleChange} name="perPage">
          <option>10</option>
          <option>25</option>
          <option>50</option>
        </select>
      </form>
      {Array(paginatedBtn)
        .fill(0)
        .map((_, i) => (
          <button key={i + 1} onClick={() => handlePageChange(i + 1)}>
            {i + 1}
          </button>
        ))}
      {/* <button>1</button>
      <button>2</button>
      <button>3</button> */}
    </div>
  );
}
