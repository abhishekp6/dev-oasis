import React from "react";
import Landingpage from "./landingpage/Landingpage";
import { BrowserRouter } from "react-router-dom";

class App extends React.Component{

    render(){
        return(
            <BrowserRouter>
                <Landingpage />
            </BrowserRouter>
        );
    }
}

export default App;