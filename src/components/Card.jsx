import React from "react";

function Card(props){
return (
  <div>
    <div className="card">
      <div className="top">
        <h2>{props.name}</h2>
        <img
          src={props.img}
          alt="avatar_img"
        />
      </div>
      <div className="bottom">
        <p>{props.tel}</p>
        <p>{props.mail}</p>
      </div>
    </div>
  </div>
); 

}

export default Card