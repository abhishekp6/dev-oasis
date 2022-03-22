// Google OAuth Flow based authentication component

import React from "react";
import { FcGoogle } from 'react-icons/fc';
import './Login.css';
import configObj from "./Api-creds";
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions/index'

class Login extends React.Component{

    state = {
        buttonText: 'SignIn'
    };

    componentDidMount(){
        try {
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
        } catch (error) {
            console.log(error);
        }
    }

    updateSignInStatus = () => {
        let authText = this.props.isSignedIn === true ? 'Signout' : 'SignIn';
        this.setState({ buttonText: authText });
    }

    onSignInClick = () => {
        this.auth.signIn();
        this.props.signIn();
    }

    onSignOutClick = () => {
        this.auth.signOut();
        this.props.signOut();
    }

    onAuthButtonClick = () => {
        if(this.props.isSignedIn === true){
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

const mapStateToProps = (state) => {
    return {isSignedIn: state.isSignedIn};
}

export default connect(mapStateToProps, { signIn, signOut })(Login);