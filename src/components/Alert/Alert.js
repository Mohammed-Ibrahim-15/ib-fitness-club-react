import React from 'react';
import './Alert.css';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const sweetAlert = () => {
    const MySwal = withReactContent(Swal)

    MySwal.fire({
        title: <p>Activity Completed !!</p>,
        didOpen: () => {
        },
    })

}

const Alert = () => {

    return (
        <div>
            <div className='complete-btn'>
                <button onClick={sweetAlert}>Activity Completed</button>
            </div>
            <div>

            </div>
        </div>
    );
};

export default Alert