import React from "react";

const getCurrentDate = () => {
  const now = new Date();
  const day = now.getDate();
  const month = now.getMonth();
  const year = now.getFullYear();

  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const appendZero = num => {
    if (num < 10) {
      return `0${num}`;
    } else {
      return num;
    }
  };

  return `${day}/${month}/${year}  ${appendZero(hours)}:${appendZero(
    minutes
  )}:${appendZero(seconds)}`;
};

const CurrentDate = () => {
  return <div>As at : {getCurrentDate()}</div>;
};

export default CurrentDate;
