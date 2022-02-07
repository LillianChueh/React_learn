import React from 'react';

const Spinner = (props) => {
    return (
        <div className='ui active dimmer'>
            <div className='ui big text loader'>
                {props.message}
            </div>
        </div>
    );
};

// 預設Props的值，避免忘記給值
Spinner.defaultProps = {
    message : 'Loading...',
};
export default Spinner;