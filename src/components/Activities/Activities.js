import React, { useEffect, useState } from 'react';
import './Activities.css'

const Activities = () => {
    const [activities, setActivities] = useState([])
    useEffect(() => {
        fetch('fitness.json')
            .then(res => res.json())
            .then(data => setActivities(data))
    }, [])
    return (
        <div className='main-container'>
            <div className="activity-container">
                <h1>Activity</h1>
                {
                    activities.map(activity => <p>{activity.name}</p>)
                }

            </div>
            <div className="cart-container">
                <h1>Cart</h1>
            </div>
        </div>
    );
};

export default Activities;