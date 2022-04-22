import React from 'react';
import img  from '../img/servis.jpg.png'
import './Sarvis.css'
import { Link } from 'react-router-dom';

const Sarvis = () => {
    return (
        <div>
            <h1>We Offer Best Series</h1>
           <div  className='servis-img'>
           <div className='card' style={{width: '18rem'}}>
                <img src={img} class="card-img-top" alt=""></img>
                <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Link to='/login'  className="btn btn-primary">Go somewhere</Link>
                 </div>   

            </div>
            <div className='card ' style={{width: '18rem'}}>
                <img src={img} class="card-img-top" alt=""></img>
                <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Link to='/login'  className="btn btn-primary">Go somewhere</Link>
                 </div>   

            </div>
            <div className='card' style={{width: '18rem'}}>
                <img src={img} class="card-img-top" alt=""></img>
                <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Link to='/login'  className="btn btn-primary">Go somewhere</Link>
                 </div>   

            </div>
            <div className='card' style={{width: '18rem'}}>
                <img src={img} class="card-img-top" alt=""></img>
                <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Link to='/login'  className="btn btn-primary">Go somewhere</Link>
                 </div>   

            </div>
           </div>
        </div>
    );
};

export default Sarvis;