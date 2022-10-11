import React from "react";
import icon from "../images/placeholder.png"



function Card(props) {
  return (
    <>
      <div className="main--card flex flex-row p-8 font-serif w-6/6">
        <img className="w-80 rounded-md shadow-lg shadow-black" src={`../images/${props.image}`} alt="Country"/>
        <div className="box--location ml-10">
        <img className="w-4 relative top-5" src={icon} alt="" />
          <span className="p-3 ml-3 text-sm text-gray-500">{props.country}</span>
          <span>
            <a href="https://www.google.com/maps" className="text-sm text-gray-500 underline underline-offset-4"> VIEW ON GOOGLE MAP </a>
          </span>
          <div className="desc flex flex-col p-3">
            <h1 className="font-bold text-3xl mb-5">{props.place}</h1>
            <span className="mb-2 text-sm text-gray-500">{props.date}</span>
            <p>
             {props.description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
