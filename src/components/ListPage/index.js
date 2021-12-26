import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getList, clearState } from "./../../redux/actions";
import Search from "./search";
import Pagination from "./pagination";

function ListPage({
  getListAction,
  clearStateAction,
  error,
  requesting,
  list,
}) {
  useEffect(() => {
    return () => {
      clearStateAction();
    };
  }, []);
  const [text, setText] = useState("");
  const [sort, setSort] = useState("full_name");
  const [page, setPage] = useState("1");
  const [perPage, setPerPage] = useState("10");
  const [order, setOrder] = useState("asc");
  const [paginatedBtn, setPaginatedBtn] = useState(0);

  useEffect(() => {
    if (Object.keys(list || {}) && list.data.length > 0) {
      // if (list.total <= 200) {
      //   setPaginatedBtn(
      //     Math.ceil(list.total / perPage)
      //   );
      // } else {
      //   setPaginatedBtn(5);
      // }

      getListAction({
        q: text,
        page: page,
        per_page: perPage,
        sort: sort,
        order: order,
      });
    }
  }, [perPage, order, page]);

  useEffect(() => {
    if (Object.keys(list || {}) && list.data.length > 0) {
      if (list.total <= 100) {
        setPaginatedBtn(Math.ceil(list.total / perPage));
      } else {
        setPaginatedBtn(5);
      }
    }
  }, [list]);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getListAction({
      q: text,
      page: page,
      per_page: perPage,
      sort: sort,
      order: order,
    });

    // setText("");
  };

  const handlePageChange = (pageNum) => {
    setPage(pageNum);
  };

  const orderHandler = (e) => {
    e.preventDefault();
    if (order === "asc") {
      setOrder("desc");
    } else {
      setOrder("asc");
    }
  };
  return (
    <ul>
      <Search
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        order={order}
        orderHandler={(e) => orderHandler(e)}
        text={text}
      />
      {requesting ? (
        <h1>Requesting</h1>
      ) : list.data.length > 0 ? (
        list?.data?.map((el) => (
          <li key={el.id}>
            <Link
              to={{
                pathname: `${el.owner.login}/${el.name}`,
                state: {
                  el,
                },
              }}
              params={{ username: text }}
            >
              <span>
                <strong>{el.name}</strong>
                <small>{el.owner.login}</small>
              </span>
              <span>
                forkks: {el.forks_count}
                <small>{el.description}</small>
              </span>

              <span>{el.updated_at}</span>
            </Link>
          </li>
        ))
      ) : error ? (
        <h1 style={{ textAlign: "center" }}>No Data found</h1>
      ) : (
        <h1 style={{ textAlign: "center" }}>Search something</h1>
      )}
      {paginatedBtn > 2 ? (
        <Pagination
          handlePageChange={(pageNum) => handlePageChange(pageNum)}
          paginatedBtn={paginatedBtn}
          setPerPage={setPerPage}
        />
      ) : null}
    </ul>
  );
}

const mapStateToProps = ({ listReducer }) => {
  const { error, requesting, list } = listReducer;
  return { error, requesting, list };
};

export default connect(mapStateToProps, {
  getListAction: getList,
  clearStateAction: clearState,
})(ListPage);
