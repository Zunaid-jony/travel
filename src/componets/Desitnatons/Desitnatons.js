import React from 'react';
import './Desitnatons.css'
import img from '../img/secend.jpg.jpg'
import Sarvis from '../Sarves/Sarvis';

const Desitnatons = () => {
    return (
        <div>
            <div className='img-aria'>
            <div className='img-aria'>
               <div className='texs'>
                   <h6>BEST DESTIATIONS AROUND THE WORLD</h6>
                   <h1>Travel,enjoy</h1>
                   <h1>and live e new</h1>
                   <h1>and full life</h1>
                   <h6>built wicket lognger admire do barton vanity itsel do in it.</h6>
                   <h6>built wicket lognger admire do barton vanity itsel do in it.</h6>
                   <button>Find out more</button>
               </div>
            </div>
            <div className='img-div img-aria'>
                <img src={img}></img>
            </div>
           
        </div>
        <Sarvis></Sarvis>
        </div>
        
    );
};

export default Desitnatons;