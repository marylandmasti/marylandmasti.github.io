"use client";
import { who, what, where, image } from "@/data/philanthropy";
import { Col, Row } from "react-bootstrap";

const Philanthropy = () => {
  return (
    <Row className="p-0 m-0 font-anton">
      <Col xl={5} className="bg-masti-red-200 p-4">
        <p className="text-masti-beige text-2xl md:text-4xl m-0">{who.title}</p>
        <div className="h-2 w-1/6 bg-white mb-2" />
        <p className="text-white text-base md:text-lg font-poppins">
          {who.text}
        </p>
      </Col>
      <Col xl={7} className="bg-masti-red-100 p-4">
        <p className="text-white text-2xl md:text-4xl m-0">{what.title}</p>
        <div className="h-2 w-1/6 bg-masti-beige mb-2" />
        <p className="text-white text-base md:text-lg font-poppins">
          {what.text}
        </p>
      </Col>
      <Col xl={12} className="bg-masti-beige flex p-0 flex-col md:flex-row">
        <div className="w-full md:w-8/12 p-4 flex flex-col">
          <p className="text-masti-red-200 text-2xl md:text-4xl text-right border-b-8 border-white w-fit self-end">
            {who.title}
          </p>
          <p className="text-masti-red-200 text-base md:text-lg text-right font-poppins">
            {where.text}
          </p>
        </div>

        <img className="w-full md:w-4/12" src={image} />
      </Col>
    </Row>
  );
};

export default Philanthropy;
