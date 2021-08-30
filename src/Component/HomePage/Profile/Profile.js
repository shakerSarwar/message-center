import React from 'react';
import Footer from '../../ShearComponent/Footer/Footer';
import NavBar from '../../ShearComponent/NavBar/NavBar';
import firebase from "firebase/app";
import { useHistory } from "react-router-dom";



const Profile = () => {
    const logInUser = JSON.parse(localStorage.getItem('user'))
    const history = useHistory();

    const handelLogOut = () => {
        firebase.auth().signOut().then(() => {
            localStorage.clear()
            history.push("/")
        }).catch((error) => {
            console.log(error)
        });
    }


    return (
        <>
            <NavBar />
            <section className="border col-12 col-md-9 col-lg-8 my-5 rounded mx-auto d-flex flex-column user-details justify-content-center align-items-center pb-5">
                <img
                    src={logInUser.photoURL || "https://i.ibb.co/JqYKzYK/avatar.jpg"}
                    className="my-5 user-image"
                    alt="Image"
                />
                <table>
                    <tbody>
                        <tr>
                            <td>Name</td>
                            <td>: </td>
                            <td>{logInUser.displayName}</td>
                        </tr>
                        <tr>
                            <td>email</td>
                            <td>:</td>
                            <td>{logInUser.email}</td>
                        </tr>
                    </tbody>
                </table>
                <button onClick={handelLogOut} className="btn btn-primary mt-3">Log Out</button>
            </section>
            <Footer />
        </>
    );
};

export default Profile;