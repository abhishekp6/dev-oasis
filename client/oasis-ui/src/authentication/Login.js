// Google OAuth Flow based authentication component

import React from "react";
import { FcGoogle } from 'react-icons/fc';
import './Login.css';
import configObj from "./Api-creds";

class Login extends React.Component{

    state = {
        isSignedIn: null,
        buttonText: 'SignIn'
    };

    componentDidMount(){
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: configObj.CLIENT_ID,
                scope: "email"
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.updateSignInStatus();
                this.auth.isSignedIn.listen(this.updateSignInStatus)
            });
        });
    }

    updateSignInStatus = () => {
        this.setState({ isSignedIn: this.auth.isSignedIn.get() })
        let authText = this.state.isSignedIn === true ? 'Signout' : 'SignIn';
        this.setState({ buttonText: authText });
    }

    onSignInClick = () => {
        this.auth.signIn();
    }

    onSignOutClick = () => {
        this.auth.signOut();
    }

    onAuthButtonClick = () => {
        if(this.state.isSignedIn === true){
            this.onSignOutClick();
        }
        else{
            this.onSignInClick();
        }
    }

    render(){
        return(
            <div>
                <button className="authButton" onClick={this.onAuthButtonClick}>
                    <div className="c1"><FcGoogle /></div>
                    <div className="c2">{this.state.buttonText}</div>
                </button>
            </div>
        )
    }
}

export default Login;