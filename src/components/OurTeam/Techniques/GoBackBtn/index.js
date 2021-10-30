
import React from 'react';

import './index.css';

const GoBackBtn = ({goBackClick}) => {


    return (
        <div className="go-back-btn" onClick={goBackClick}>
            Back
        </div>
    )
}

export default GoBackBtn;