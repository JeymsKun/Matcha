import React from 'react';
import '../css/MATCHA STYLE.css';
import weblogo from '../img/MATCHA LOGO2.png';

function First_Layer () {
    return (
        <div id="firstlayer">
	
            <row>
                <h3 className="firstleft"> LET'S MAKE SOME </h3>

                <div className="firstright">
                        <img src={weblogo} alt="logo" />
                </div>
            </row>

        </div>
    )
}

export default First_Layer