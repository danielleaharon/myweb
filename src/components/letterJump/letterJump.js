import React from 'react';
import './letterJump.scss';


export default function LetterJump({ textarr }) {

    return (
        <>
            {textarr.map((item, index) => {
                if (item === " ")
                    return <span key={index} className=''> </span>
                if (item === "br")
                    return <br key={index}></br>
                return <span key={index} className=" jump" >	{item}</span>
            })}

        </>

    );

}
