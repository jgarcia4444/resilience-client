import React from 'react';

import './index.css';

const ShowContactBtn = ({show, handleClick}) => {

    return (
        <div className="basic-btn show-contact-form-btn" onClick={handleClick}>
            { show ? "Hide" : "Show" } Form
        </div>
    )
}

export default ShowContactBtn;