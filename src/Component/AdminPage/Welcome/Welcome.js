import React from 'react';
import AdminPageTitle from '../AdminPageTitle/AdminPageTitle';

const Welcome = () => {
    return (
        <section className="wlcomePage ">
            <AdminPageTitle title={"Welocme To Admin Page"} />
            <div className="px-5">
                <h3>Select A Topics From Sidebar</h3>
            </div>
        </section>

    );
};

export default Welcome;