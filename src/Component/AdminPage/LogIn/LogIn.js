import React, { useContext } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import firebase from "firebase/app";
import "firebase/auth";
import { useHistory, useLocation } from "react-router";
import './LogIn.css'
import firebaseConfig from './Firebase.Config'
import { userContext } from '../../../App';
import NavBar from '../../ShearComponent/NavBar/NavBar';
import Footer from '../../ShearComponent/Footer/Footer';


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app(); // if already initialized, use that one
}

const LogIn = () => {
    const [logedInUser, setLogedInUser] = useContext(userContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    //google provider
    const googleProvider = new firebase.auth.GoogleAuthProvider();

    const handelGoogleSingIn = () => {
        firebase
            .auth()
            .signInWithPopup(googleProvider)
            .then((result) => {
                const { email, displayName, photoURL } = result.user;
                const userDetails = {
                    isError: false,
                    email: email,
                    displayName: displayName,
                    photoURL: photoURL,
                    errorMassege: "",
                };
                setLogedInUser(userDetails);
                localStorage.setItem('user', JSON.stringify(userDetails))
                getAuthToken()
                history.replace(from);
            })
            .catch((error) => {
                const userDetails = {
                    isError: true,
                    email: "",
                    displayName: "",
                    photoURL: "",
                    errorMassege: error.message,
                };
                setLogedInUser(userDetails);
            });
    };

    const getAuthToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
            .then(function (idToken) {
                sessionStorage.setItem("idToken", idToken)
            }).catch(function (error) {
                console.log(error)
            });
    }


    return (
        <>
            <NavBar />
            <section className="container LogIn-Section my-5">
                <div className="row text-left justify-content-center">
                    <div className="col-md-6">
                        <h4 className="text-center mb-4 mt-5">Continue With Google</h4>
                        <button
                            className="login-button py-2 mb-5 w-100 text-left btn-danger"
                            onClick={handelGoogleSingIn}
                        ><FontAwesomeIcon icon={faGoogle} className="google-icon" />Continue With Google</button>
                        {logedInUser.isError && (
                            <p className="text-danger mt-3">{logedInUser.errorMassege}</p>
                        )}
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default LogIn;