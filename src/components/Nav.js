import React from 'react';

import './Nav.css';
import Code from '../assets/nav/code.png';
import Supplies from '../assets/nav/supplies.png';
import Box from '../assets/nav/box.png';
import Gift from '../assets/nav/gift-box.png';
import Recommended from '../assets/nav/recommended.png';
import { Link } from 'react-router-dom';

export default function Nav(){
    return (
        <div className="div-nav">            
            <div className="image-nav" alt="">
                <Link to='/'>
                    <img src={Code}/>
                </Link>
                <hr></hr>   
            </div>                                 
            <div className="image-nav">
                <Link to='/'>
                    <img src={Supplies} alt=""/>
                    <p>Todos</p>                                    
                </Link>   
                <hr></hr>
            </div>            
            <div className="image-nav" alt="">
                <Link to='/exclusive'>
                    <img src={Box}/>
                    <p>Exclusivos</p>
                </Link>
                <hr></hr>   
            </div>            
            <div className="image-nav" alt="">
                <Link to='/promotion'>
                <img src={Gift}/>                
                <p>Promoção</p>
                </Link>
                <hr></hr>   
            </div>            
            <div className="image-nav" alt="">
                <img src={Recommended}/>
                <p>Favoritos</p>
                <hr></hr>                               
            </div>                        
        </div>        
    )
}