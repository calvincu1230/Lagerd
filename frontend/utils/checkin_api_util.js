import React from "react";

export const fetchAllCheckins = () => {
  return $.ajax({
    method: "GET",
    url: "/api/checkins"
  });
};

export const fetchCheckin = checkinId => {
  return $.ajax({
    method: "GET",
    url: `/api/checkins/${checkinId}`
  });
};

export const createCheckin = formData => {
  return $.ajax({
    method: "POST",
    url: "/api/checkins",
    data: formData,
    contentType: false,
    processData: false
  });
};

export const updateCheckin = checkin => {
  return $.ajax({
    method: "PATCH",
    url: `/api/checkins/${checkin.id}`,
    data: { checkin }
  });
};

export const deleteCheckin = checkinId => {
  return $.ajax({
    method: "DELETE",
    url: `/api/checkins/${checkinId}`
  });
};

export const displayStars = rating => { 
  let num = 0;
  const starsArr = [];
  while (num < 5) {
    if ((rating > num) && (rating >= (num + 1))) {
      starsArr.push(<img key={num} className="cap" src={fullCap} />)
    } else if (rating <= num + .25 && rating > num) {
      starsArr.push(<img key={num} className="cap" src={quarterCap} />)
    } else if (rating <= num + .50  && rating > num) {
      starsArr.push(<img key={num} className="cap" src={halfCap} />)
    } else if (rating <= num + .75 && rating > num) {
      starsArr.push(<img key={num} className="cap" src={threeQuartersCap} />)
    } else {
      starsArr.push(<img key={num} className="cap" src={emptyCap} />)
    }
    num += 1;
  }

  return starsArr;
} 