"use client";
import { sponsors } from "@/data/sponsors";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Sponsors = () => {
  return (
    <Row className="m-0 p-0">
      {sponsors.map((sponsor, index) => (
        <Col key={index} className={`p-4 ${sponsor.color}`} xs={6} xl={3}>
          <img src={sponsor.image} className="" />
        </Col>
      ))}
    </Row>
  );
};

export default Sponsors;
