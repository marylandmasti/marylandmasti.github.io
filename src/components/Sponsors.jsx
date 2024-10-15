"use client";
import { sponsors } from "@/data/sponsors";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Sponsors = () => {
  return (
    <Row className="m-0 p-0 bg-masti-beige justify-content-center">
      {sponsors.map((sponsor, index) => (
        <Col key={index} className={`p-2 ${sponsor.color} d-flex align-items-center justify-content-center`} xs={6} md={4} lg={3} xl={2}>
          <img src={sponsor.image} className="object-contain" style={{ maxWidth: '200px', maxHeight: '200px' }} />
        </Col>
      ))}
    </Row>
  );
};

export default Sponsors;
