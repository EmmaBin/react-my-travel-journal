import React from 'react'
import pin from '../assets/pin.png'

export default function Card(props){
    return(
        <>
        <div className='card-list'>
            <div className='card'>
                <img src={props.item.imageUrl} className='card--img' />
                <img src={pin} />
                <p className='card--location'>{props.item.location}</p>
                <h1>{props.item.title}</h1>
                <h3>{props.item.startDate} - {props.item.endDate}</h3>
                <p className='card--text'>{props.item.description}</p>

            </div>
        </div>
        </>
    )
}

