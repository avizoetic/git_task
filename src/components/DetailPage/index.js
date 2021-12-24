import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";

// export default function DetailPage() {
//   console.log("hello");
//   let { id } = useParams();
//   console.log("na", id);
//   return (
//     <div>
//       <h1>Detail Page</h1>
//     </div>
//   );
// }

import { connect } from "react-redux";
import { getDetail, clearState } from "./../../redux/actions";

function DetailPage({
  getDetailAction,
  clearStateAction,
  error,
  requesting,
  detail,
}) {
  useEffect(() => {
    return () => {
      clearStateAction();
    };
  }, []);

  const {
    state: { el },
  } = useLocation();

  console.log("location", el);

  // console.log("hello hello", detail)
  console.log("hello");
  let { name } = useParams();
  console.log("na", name);
  // const [text, setText] = useState("");

  return (
    <>
      <h1>Detail</h1>
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
