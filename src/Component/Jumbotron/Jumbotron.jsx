import React from "react";

const Jumbotron = (props) => {
    const {dataDetail} = props
  return (
    <div className="jumbotron">
      <h2 className="display-4">{dataDetail.title}</h2>
      <p className="lead">{dataDetail.description}</p>
      <p className="lead">Date : {dataDetail.release_date}</p>
      <hr className="my-4" />
      <p>Director : {dataDetail.director}</p>
      <p>Producer : {dataDetail.producer}</p>
    </div>
  );
};

export default Jumbotron;
