import React from 'react';
import '../css/MATCHA STYLE.css';
import thirdphoto from '../img/TRIVIA 2.png';

function Third_Layer () {
    return (
        <div id="thirdlayer">
	
            <row>
                <div className="thirdright">
                    <img src={thirdphoto} alt="trivia" />
                </div>
            </row>

            <row>
                <div className="thirdleft">
                    <p align="justify"> <span>Matcha</span> boasts a high level of antioxidants, notably EGCg (epigallocatechin gallate), which is known for its cancer-fighting properties. Gram for gram, matcha contains several times more antioxidants than other superfoods like goji berries or blueberries.</p>
                </div>
            </row>

        </div>
    )
}

export default Third_Layer;