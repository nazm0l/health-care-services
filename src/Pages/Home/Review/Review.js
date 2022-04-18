import React from 'react';

const Review = ({review}) => {

    const {name, picture, rating, text} = review;
    console.log(name);

    return (
        <div className='container col-md-4 mt-5 text-center'>
            <div className="card mx-auto" style={{width: "18rem"}}>
            <img src={picture} className="card-img-top w-25 mx-auto pt-2 rounded-pill" alt="..."/>
            <div className="card-body">
                <h4>{name}</h4>
                <strong className="card-text">Ratings: {rating}</strong>
                <p className="card-text mt-2">{text}</p>
            </div>
            </div>
        </div>
    );
};

export default Review;