import React from 'react';
import './Boton.css';

import {Link} from 'react-router-dom';

function Boton(props){
    return(
        <Link to={props.link} className="button__link" id={props.buttonid}>
            <button className='button'>
                {props.description}
            </button>
        </Link>
    );
}

export default Boton;