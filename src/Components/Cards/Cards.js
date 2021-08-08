
import React from "react";
import { Card ,Button} from "react-bootstrap";
import img1 from "../../images/Frame-1.png";
import img2 from "../../images/Frame-2.png";
import img3 from "../../images/Frame.png";
import img4 from "../../images/Group.png";
import "./Cards.css";

const Cards = () => {
  return (
    <div
      className="  container d-flex  flex-wrap"
      style={{ justifyContent: "space-evenly" }}
    >
      <div>
        <Card className="card-style">
          <Card.Img
            variant="top"
            src={img1}
            style={{ padding: "10px", width: "200px", margin: "auto" }}
          />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Button href="/destination" className="card-btn">Hire</Button>
          </Card.Body>
        </Card>
      </div>
      <div>
        <Card className="card-style">
          <Card.Img
            variant="top"
            src={img2}
            style={{ padding: "10px", width: "195px", margin: "auto" }}
          />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Button href="/destination" className="card-btn">Hire</Button>
          </Card.Body>
        </Card>
      </div>
      <div>
        <Card className="card-style">
          <Card.Img
            variant="top"
            src={img3}
            style={{ padding: "10px", width: "185px", margin: "auto" }}
          />
          <Card.Body >
            <Card.Title>Card Title</Card.Title>
            <Button href="/destination" className="card-btn">Hire</Button>
          </Card.Body>
        </Card>
      </div>
      <div>
        <Card className="card-style">
          <Card.Img
            variant="top"
            src={img4}
            style={{ padding: "10px", width: "190px", margin: "auto" }}
          />
          <Card.Body >
            <Card.Title>Card Title</Card.Title>
            <Button href="/destination" className="card-btn">Hire</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Cards;
