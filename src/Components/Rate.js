import React from 'react'
import star from '../star.svg';
import starFill from '../star-fill.svg';

function Rate({rating}) {
    let ratings=[0,0,0,0,0];
    ratings=ratings.map((r,index)=>index<rating?1:0);

    return (
        <span>
         {
            ratings.map(r=>r===1?<img src={starFill}/>:<img src={star}/>)
         }
        </span>
    )
}

export default Rate
