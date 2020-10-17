import React from 'react';
import Header from './HeaderComponent';

const Main = () => {
    
    return(
        <React.Fragment>
            <Header />
            <img alt="kakuya logo" src={require("../images/kakuyalogo.jpeg")} width="70%"  />
            
        </React.Fragment>
    );
}

export default Main;