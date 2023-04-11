import React from "react";

const JobCategoryCard = (props) => {
  const { image, title, vacancy } = props.job;

  return (
    <div className="card card-compact rounded w-90 m-2 md:p-0 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="There is a image available" className="md:h-72" />
      </figure>

      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{vacancy}</p>
      </div>
    </div>
  );
};

export default JobCategoryCard;
