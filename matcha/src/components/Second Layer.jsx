import React, { useEffect } from 'react';
import '../css/MATCHA STYLE.css';
import weblogo from '../img/BRANCH.png';
import MatchaBrownies from '../img/MATCHA_BROWNIES.png';
import MatchaTiramisu from '../img/MATCHA_TIRAMISU.jpg';
import MatchaGreenTeaIceCream from '../img/MATCHA_GREEN_TEA_ICE_CREAM.png';
import MatchaCreamCheesePoundCake from '../img/MATCHA_CREAM_CHEESE_POUND_CAKE.jpg';
import MatchaCookies from '../img/MATCHA_COOKIES.jpg';
import { Link } from 'react-router-dom';

function Second_Layer() {

    useEffect(() => {
        let next = document.querySelector('.next');
        let prev = document.querySelector('.prev');
    
        const nextFunction = () => {
            let items = document.querySelectorAll('.item');
            document.querySelector('.slide').appendChild(items[0]);
        };
    
        const prevFunction = () => {
            let items = document.querySelectorAll('.item');
            document.querySelector('.slide').prepend(items[items.length - 1]);
        };
    
        next.addEventListener('click', nextFunction);
        prev.addEventListener('click', prevFunction);
    
        return () => {
            next.removeEventListener('click', nextFunction);
            prev.removeEventListener('click', prevFunction);
        };
    }, []); 
    
    return (
        <div id="secondlayer">
            <div className="row">
                <h3 className="secondcenter">BEST JAPANESE MATCHA RECIPES:</h3>
                <div className="secondimage">
                    <img src={weblogo} alt="branch tree" />
                </div>
            </div>

            <div className="container">
                <div className="slide">
                    <div className="item" style={{ backgroundImage: `url(${MatchaBrownies})` }}>
                        <div className="content">
                            <div className="name">
                                <Link to="/brownies">Matcha Brownies</Link>
                            </div>
                        </div>
                    </div>
                    <div className="item" style={{ backgroundImage: `url(${MatchaTiramisu})` }}>
                        <div className="content">
                            <div className="name">
                                <Link to="/tiramisu">Matcha Tiramisu</Link>
                            </div>
                        </div>
                    </div>
                    <div className="item" style={{ backgroundImage: `url(${MatchaGreenTeaIceCream})` }}>
                        <div className="content">
                            <div className="name">
                                <Link to="/icecream">Matcha Green Tea Ice Cream</Link>
                            </div>
                        </div>
                    </div>
                    <div className="item" style={{ backgroundImage: `url(${MatchaCreamCheesePoundCake})` }}>
                        <div className="content">
                            <div className="name">
                                <Link to="/poundcake">Matcha Cream Cheese Pound Cake</Link>
                            </div>
                        </div>
                    </div>
                    <div className="item" style={{ backgroundImage: `url(${MatchaCookies})` }}>
                        <div className="content">
                            <div className="name">
                                <Link to="/cookies">Matcha Cookies</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="button">
                    <button className="prev">
                        <i className="fa-solid fa-arrow-left"></i>
                    </button>
                    <button className="next">
                        <i className="fa-solid fa-arrow-right"></i>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Second_Layer;
