import React from "react";

const Cards = ({
  title,
  icon,
  description,
  styles,
  about,
  education,
  startingDate,
  course,
  school,
  level,
  dashed,
  endingDate,
  jobType,
  company,
  position,
}) => {
  return (
    <div
      className={` ${styles} rounded-md p-2 flex items-start gap-6 bg-color-primary-variant  cursor-pointer hover:bg-color-bg `}
    >
      {about && (
        <>
          <span className="text-3xl font-extrabold">{icon}</span>
          <div className="flex flex-col gap-2">
            <h1 className="text-base font-bold text-slate-50">{title}</h1>
            <p className="text-sm text-slate-300">{description}</p>
          </div>
        </>
      )}
      {education && (
        <div className="flex gap-2 items-center">
          <span className="text-3xl font-extrabold">{icon}</span>
          <h1 className="text-base font-bold text-slate-300">{title}</h1>
        </div>
      )}
      <div className="flex flex-col gap-1 items-start ">
        <div className="flex items-center gap-2">
        <p className="text-sm font-bold text-slate-300">{startingDate}</p>
        {dashed && <>- </>}
        <p className="text-sm font-bold text-slate-300">{endingDate}</p>

        </div>
        <p className="text-sm font-medium flex items-center gap-3 text-color-light">
          {" "}
          <span>{course || company }</span> {dashed && <>- </>} <span>{level || jobType }</span>{" "}
        </p>
        <p className="text-sm font-medium  text-color-light">{position}</p>
        <p className="text-sm font-medium  text-color-light">{school}</p>
      </div>
    </div>
  );
};

export default Cards;
