import React from 'react';
import './Cart.css'

const Cart = () => {
    return (
        <div className='cart'>
            <div>
                <h3>Mohammed Ibrahim</h3>
                <div className='personal-info'>
                    <h5>Weight: 60 kg</h5>
                    <h5>Height: 5.9</h5>
                </div>
            </div>
            <div>
                <h3>Add A Break</h3>
                <div className='break-info'>
                    <button>1min</button>
                    <button>3min</button>
                    <button>5min</button>
                    <button>7min</button>
                </div>
            </div>
            <div className='exercise-details'>
                <h3>Exercise Details</h3>
                <div>
                    <p>Exercise Time:</p>
                    <p>Break Time:</p>
                </div>
            </div>
            <div className='complete-btn'>
                <button>Activity Completed</button>
            </div>
        </div>
    );
};

export default Cart;