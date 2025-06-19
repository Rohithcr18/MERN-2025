import React from 'react'
import image from "../assets/img.jpg"
import './style.css'
export const Home = ({items}) => {
  return (
    <div>
        <ol>
            {items.map((fruit)=>(<li>{fruit}</li>))}
        </ol>
        <img src={image} alt="background" className="image"/>
    </div>
  )
}

