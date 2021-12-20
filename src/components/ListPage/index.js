import React, {
  useState,
  useEffect,
} from "react";
import Search from "./search";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  getList,
  clearState,
} from "./../../redux/actions";

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

  const handleChange = e => {
    setText(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    getListAction(text);
    setText("");
  };
  return (
    <ul>
      <Search
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        text={text}
      />
      {requesting ? (
        <h1>Requesting</h1>
      ) : list.length > 0 ? (
        list.map(el => (
          <li key={el.id}>
            <Link to="#">
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
        <h1 style={{ textAlign: "center" }}>
          No Data found
        </h1>
      ) : (
        <h1 style={{ textAlign: "center" }}>
          Search something
        </h1>
      )}
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
