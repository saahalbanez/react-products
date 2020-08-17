import React from 'react';
import Loupe from '../assets/loupe.png';

import './Search.css';

export default function Search(){
    return (
        <>
            <div className="div-search">
                <img src={Loupe}/>
                <label>|</label>
                <input type="text" placeholder="Buscar"/>                                                            
            </div>
        </>
    )
}