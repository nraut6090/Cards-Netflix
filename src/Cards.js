import React from "react";

function Cards(props) {
  return (
    <>
      <div className="cards">
        <div className="card">
          <img src={props.simg} alt="myPic" className="card_img"></img>
          <div className="card_info">
            <span className="card_category">{props.title}</span>
            <h3 className="card_title"> {props.sname}</h3>
            <a href={props.slink} target="_blank" rel="noopener noreferrer nofollow">
              <button>Watch Now</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default Cards;
