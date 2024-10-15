"use client";
import { teams, medias } from "@/data/media";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
const Media = () => {
  return (
    <div className="bg-masti-beige flex flex-col items-center py-8 relative">
      <div className="bg-white/50 border-4 border-masti-red-200 flex flex-col items-center justify-center w-10/12 md:w-2/3 pb-3 md:pb-5">
        <p className="font-anton text-center text-xl md:text-3xl text-masti-red-200 p-3 md:p-5">
          Thank you for joining us at Raas Sleepover!
        </p>
        <Row className="m-0 p-0 justify-center">
          {medias.map((media, index) => (
            <Col key={index} className="p-3 w-full flex" xs={6} xl={4}>
              <a
                target="_blank"
                href={media.link}
                className={` duration-300 hover:scale-110 w-full font-anton text-lg md:text-2xl text-center no-underline ${media.bgColor} ${media.textColor}`}
                rel="noreferrer"
              >
                <span className='px-3'>{media.text}</span>
              </a>
            </Col>
          ))}
        </Row>
      </div>
      <p className="font-anton text-3xl text-masti-red-200 border-b-4 border-masti-red-100 m-5 mx-4 md:mx-8">
        TEAM PICTURES!
      </p>
      <Row className="m-0 p-0 w-2/3">
        {teams.map((team, index) => (
          <Col
            key={index}
            className={`px-4 pt-4 ${team.bgColor}`}
            xs={6}
            xl={3}
          >
            <a
                target="_blank"
                href={team.link}
                className={`duration-300 hover:scale-110 w-full no-underline`}
                rel="noreferrer"
              >
                <img
                  src={team.image}
                  className=""
                  style={{ width: "300px", height: "300px", objectFit: "cover" }}
                />
                <p className={`font-anton text-lg m-0 ${team.textColor}`}>
                  {team.name}
                </p>
            </a>

          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Media;
