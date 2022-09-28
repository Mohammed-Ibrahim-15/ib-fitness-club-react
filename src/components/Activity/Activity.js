import React from 'react';
import './Activity.css'

const Activity = (props) => {
    const { addToList, activity } = props
    const { name, picture, ageLimit, duration } = activity
    // console.log(props.activity)
    return (
        <div className='activity'>
            <img src={picture} alt="" />
            <div className='info'>
                <h3>Exercise: {name} </h3>
                <p>Age Limit: {ageLimit} years </p>
                <p>Duration: {duration} min </p>
            </div>
            <button className='btn-cart'>
                <p onClick={() => addToList(activity.duration)}>Add to list</p>
            </button>
        </div>
    );
};

export default Activity;