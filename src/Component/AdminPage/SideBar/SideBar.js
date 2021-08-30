import React, { useEffect, useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt, faPlus, faGripHorizontal, faUsers, faComments, faList } from "@fortawesome/free-solid-svg-icons";
import './SideBar.css'
import logo from '../../../Image/logo1.png'

import firebase from "firebase/app";



const SideBar = ({ url }) => {

    const history = useHistory();
    const logInUser = JSON.parse(localStorage.getItem('user'))
    const [isAdmin, setIsAdmin] = useState(false)

    useEffect(() => {
        fetch('https://fathomless-retreat-05696.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: logInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data))
    }, [])


    const handelLogOut = () => {
        firebase.auth().signOut().then(() => {
            localStorage.clear()
            history.push("/")
        }).catch((error) => {
            console.log(error)
        });
    }

    return (
        <section className="sidebar d-flex flex-column justify-content-between col-2 pt-3 pb-5 pl-4">
            <ul className="list-unstyled">
                <li >
                    <Link to="/">
                        <img src={logo} alt="Logo" className="logo" />
                    </Link>
                </li>

                {isAdmin ? <div>
                    <li >
                        <Link to={`${url}/adminBookingList`}>
                            <FontAwesomeIcon icon={faList} /> <span>Booking List</span>
                        </Link>
                    </li>

                    <li>
                        <Link to={`${url}/makeAdmin`} >
                            <FontAwesomeIcon icon={faUsers} /> <span>Add Admin</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={`${url}/addService`} >
                            <FontAwesomeIcon icon={faPlus} /> <span>Add Service</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={`${url}/manageService`} >
                            <FontAwesomeIcon icon={faGripHorizontal} /> <span>Manage Service</span>
                        </Link>
                    </li>
                </div> : <div>

                    <li >
                        <Link to={`${url}/booking`}>
                            <FontAwesomeIcon icon={faPlus} /> <span>Book</span>
                        </Link>
                    </li>
                    <li >
                        <Link to={`${url}/customarBookingList`}>
                            <FontAwesomeIcon icon={faList} /> <span>Booking List</span>
                        </Link>
                    </li>
                    <li >
                        <Link to={`${url}/review`}>
                            <FontAwesomeIcon icon={faComments} /> <span>Review</span>
                        </Link>
                    </li>
                </div>
                }

            </ul>
            <div>
                <button onClick={handelLogOut} className="logOut-button" >
                    <FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span>
                </button>
            </div>
        </section>
    );
};

export default SideBar;