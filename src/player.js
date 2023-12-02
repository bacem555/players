import React from 'react'
import {  Card } from 'react-bootstrap'
import './player.css'

const Player = ({tableau}) => {
  return (
    <div>
      {tableau.map(i=> <Card style={{ width: '18rem' }} className="card">
      <Card.Img variant="top" src={i.image} className="img" />
      <Card.Body>
        <div> <Card.Text>
        <div className="item">{i.name}</div>
        <div className="item">{i.age}</div>
          <div className="item">{i.nationality} </div>
          <div className="item">{i.Team}</div>
        </Card.Text></div>
       
        
      </Card.Body>
    </Card>)}
        
      
    </div>
  )
}

export default Player


