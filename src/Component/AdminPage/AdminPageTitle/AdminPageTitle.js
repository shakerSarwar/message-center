import React from 'react';

const AdminPageTitle = ({ title }) => {
    const logInUser = JSON.parse(localStorage.getItem('user'))
    return (
        <div className="py-3 px-5 bg-white mb-5 d-flex justify-content-between align-items-center">
            <h4>{title}</h4>
            <h5>{logInUser.displayName}</h5>
        </div>
    );
};

export default AdminPageTitle;