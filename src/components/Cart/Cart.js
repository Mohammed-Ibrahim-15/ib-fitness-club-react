import React, { useState } from 'react';
import MySwal from '../Alert/Alert';
import Alert from '../Alert/Alert';
import './Cart.css'

const Cart = (props) => {
    const { duration } = props
    const [min, setMin] = useState(0)

    const newArr = [1, 3, 5, 7]

    const breakAdd = ([index]) => {
        const num = newArr[index]
        setMin(num)

    }


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
                    <button onClick={() => breakAdd([0])}><span >1</span> min</button>
                    <button onClick={() => breakAdd([1])}><span >3</span> min</button>
                    <button onClick={() => breakAdd([2])}><span >5</span> min</button>
                    <button onClick={() => breakAdd([3])}><span >7</span> min</button>
                </div>
            </div>
            <div className='exercise-details'>
                <h3>Exercise Details</h3>
                <div>
                    <p>Exercise Time: {duration} min </p>
                    <p>Break Time: {min} min </p>
                </div>
                <Alert></Alert>
            </div>
        </div>
    );
};

export default Cart;