import './App.css';
import React from 'react';
import Home from './Home';
import Header from "./Header";
import Footer from "./Footer";
const App = () => {
    return (
        //Bem
        <div className="app">
            <Header/>
            <Home/>
            <Footer/>

            {/*<Banner/>*/}
            {/*Search*/}
            {/*<Cards/>*/}
            {/*<Footer/>*/}
            {/*SearchPage*/}
            {/*...*/}
        </div>
    );
}

export default App;
