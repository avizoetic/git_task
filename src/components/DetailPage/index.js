import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { getDetail, clearState } from "./../../redux/actions";

function DetailPage({
  getDetailAction,
  clearStateAction,
  error,
  requesting,
  detail,
}) {
  const [showDetail, setShowDetail] = useState();

  useEffect(() => {
    return () => {
      clearStateAction();
      showDetails();
    };
  }, []);

  let { owner, name } = useParams();

  const showDetails = () => {
    getDetailAction({ owner: owner, name: name });
    setShowDetail("show");
  };

  return (
    <>
      <h1>Detail</h1>
      <button onClick={showDetails}>show details</button>
      {showDetail == "show" ? (
        <div>
          <br></br>
          <p>
            {" "}
            Username --{" "}
            <a href={detail?.owner?.html_url} target="_blank">
              {detail?.owner?.login}{" "}
            </a>
          </p>
          <p>
            {" "}
            Repository --{" "}
            <a href={detail?.html_url} target="_blank">
              {detail?.full_name}{" "}
            </a>
          </p>
          <p> No. of open issues -- {detail?.open_issues_count} </p>
          <p> Default branch -- {detail?.default_branch}</p>
        </div>
      ) : (
        <p></p>
      )}
    </>
  );
}

const mapStateToProps = ({ detailReducer }) => {
  const { error, requesting, detail } = detailReducer;
  return { error, requesting, detail };
};

export default connect(mapStateToProps, {
  getDetailAction: getDetail,
  clearStateAction: clearState,
})(DetailPage);
