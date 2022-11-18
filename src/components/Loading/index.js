import React from "react";
import ReactLoading from "react-loading";

const Loading = () => {
  return (
    <div className="loading">
      <ReactLoading type="cylon" color="rgba(255,0,241,1)" height={200} width={120} />
    </div>
  );
}

export default Loading