import React from "react";
import './App.css';

function Card(props){
    // console.log(props);

    return(
  <>
      <div className='column'>
          <div className='card'>
            <img src={props.imgsrc} alt="imagge" className="card_img" />
            <div className='card_info'>
              <span className='card-category'>Technology</span>
              <h3 className='card_title'>{props.title}</h3>
              <a href={props.link} target="_blank">
                <button> Whatch Now</button>
              </a>
            </div>
          </div>
    </div>

  </>
    );
  }

  export default Card;


  