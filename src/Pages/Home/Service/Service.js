import React from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Service = ({service}) => {

    const {name, picture, price, description} = service;
    const navigate = useNavigate();

  return (
    <div className="col-md-4 mt-3">
      <Card className="mx-auto" style={{ width: "20rem" }}>
        <Card.Img variant="top" src={picture} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            <strong>Price: ${price}</strong>
          </Card.Text>
          <Card.Text>
            <p>{description}</p>
          </Card.Text>
          <Button onClick={()=>{navigate('/checkout')}} variant="dark">Buy Service</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Service;
