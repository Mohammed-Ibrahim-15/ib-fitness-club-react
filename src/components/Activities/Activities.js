import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import Cart from '../Cart/Cart';
import './Activities.css'

const Activities = () => {
    const [activities, setActivities] = useState([])
    const [duration, setDuration] = useState(0)
    useEffect(() => {
        fetch('fitness.json')
            .then(res => res.json())
            .then(data => setActivities(data))
    }, [])

    const addToList = (workoutTime) => {
        // console.log('Hello', activity)
        const time = duration + workoutTime;
        setDuration(time)
    }

    return (
        <div className='main-container'>
            <div className="activity-container">
                {
                    activities.map(activity =>
                        <Activity
                            activity={activity}
                            key={activity.id}
                            addToList={addToList}
                        ></Activity>)
                }

            </div>
            <div className="cart-container">
                <Cart duration={duration} activities={activities}></Cart>
            </div>
        </div>
    );
};

export default Activities;