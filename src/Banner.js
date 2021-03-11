import React, {useState} from "react";
import './Banner.css'
import {Button} from "@material-ui/core";

const Banner = () => {
    const [showSearch, setShowSearch] = useState(false);
    return (
        <div className="banner">
            <div className="banner__search">
                {showSearch && <Search/>}

                <Button className='banner__searchButton' onClick={()=>setShowSearch(!showSearch)} variant="outlined">Search Dates</Button>
            </div>
            <div className="banner__info">
                <h1>Get Out and stretch your imagination</h1>
                <h5>plan a Different kind of gateway to uncover the hidden gems near you.</h5>
                <Button variant="outlined">Explore Nearby</Button>
            </div>
        </div>
    )
}
export default Banner;