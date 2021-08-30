import React from 'react';
import spiner from '../../../Image/spinner.gif'

const Spinner = () => {
    return (
        <div>
            <img style={{ height: "100vh", width: "100%" }} src={spiner} alt="Loading . . ." />
        </div>
    );
};

export default Spinner;