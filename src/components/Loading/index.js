import React from "react";
import ReactLoading from "react-loading";

export default function Loading() {
  return (
    <div className="loading">
      <ReactLoading type="cylon" color="crimson" height={200} width={120} />
    </div>
  );
}