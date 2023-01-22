import React from 'react';
import './btnArrow.scss';


export default function btnArrow({onClick,text,href,target, span,className}) {

    return (

        <a   className={'btn-arrow '+className} href={href} target={target} onClick={onClick} >
            {span?<div className='navLink-who'>{text}
            <span className='link-span'>{span}</span>
            </div>:text}
            <span className='arrow'>
                <i className="fas fa-angle-right"></i>
            </span>
        </a>



    );

}
