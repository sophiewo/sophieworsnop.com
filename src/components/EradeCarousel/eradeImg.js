import React from "react";

export default function EradeImg(props) {

return (
<div>
  <img src={props.img} className="slick-image" alt={props.alt} />
  <div className="slick-caption">
      <h4 > {props.title}  </h4>
  </div>
</div>
);
};