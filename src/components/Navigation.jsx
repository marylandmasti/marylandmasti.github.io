"use client";
import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Link from "next/link";
import { FaBars } from "react-icons/fa";

const items = [
  {
    name: "ABOUT",
    link: "#about",
  },
  {
    name: "PHILANTHROPY",
    link: "#philanthropy",
  },
  {
    name: "SPONSORS",
    link: "#sponsors",
  },
  {
    name: "CONTACTS",
    link: "#contacts",
  },
];

const Navigation = () => {
  return (
    <>
      <Navbar
        className="flex flex-col justify-between  m-0 p-0 h-16 w-screen"
        collapseOnSelect
        expand="md"
        fixed="top"
      >
        <div className="flex flex-row w-full justify-between m-0 items-center bg-black/60">
          <Navbar.Brand className="w-1/6 md:w-1/12 m-0 p-0 flex items-center">
            <Link
              href="/"
              className="no-underline m-0 flex items-center p-0 w-full"
              onClick={() => setSelected("Logo")}
            >
              <img src="logo.svg" className="m-0 p-0 w-full" alt="logo" />
            </Link>
          </Navbar.Brand>
          <Navbar.Collapse className="items-center md:justify-end justify-center md:mr-10">
            <Nav className="font-poppins flex justify-evenly items-center pr-2">
              {items.map((item, index) => (
                <Nav.Link
                  key={index}
                  href={item.link}
                  eventKey={index}
                  className=""
                  as={Link}
                >
                  <p className="text-white hover:opacity-50 duration-300 hover:scale-110  mb-0 text-xl md:text-2xl p-0 font-anton">
                    {item.name}
                  </p>
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
          <Navbar.Toggle
            className="list-unstyled !text-transparent"
            aria-controls="basic-navbar-nav"
          >
            <FaBars className=" text-white text-xl" />
          </Navbar.Toggle>
        </div>
      </Navbar>
    </>
  );
};

export default Navigation;
