import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
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
                {
                    activities.map(activity => <Activity activity={activity}></Activity>)
                }

            </div>
            <div className="cart-container">
                <h1>Cart</h1>
            </div>
        </div>
    );
};

export default Activities;