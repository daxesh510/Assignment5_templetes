import React from 'react'
import './index.css'


function Card(Props) {
    return (
        <>
            <div className='cards'>
                <div className='card'>
                    <img className="card__img" src={Props.imgsrc} alt=" my Pic" />
                    <div className='card__info'>
                        <p className="card__catagory">{Props.cardInfo}</p>
                        <h3 className="card__title"><b>{Props.title}</b></h3>
                        <a href={Props.link}>
                            <button> Watch Now </button>
                        </a>
                    </div>
                </div>
            </div>
        </>);
}

export default Card