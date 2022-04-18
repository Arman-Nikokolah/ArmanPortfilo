import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { NavAnimations } from "../Animate";
const Nav = () => {
  const { pathname } = useLocation();
  return (
    <motion.div variants={NavAnimations} initial="hidden" animate="show">
      <StyleDNav>
        <h1>
          <Link to="/" className="logo">
            Portfilo
          </Link>
        </h1>

        <ul>
          <li>
            <Link to="/">1. About Us</Link>
            <Line
              transition={{ duration: 0.75 }}
              initial={{ width: "0%" }}
              animate={{ width: pathname === "/" ? "50%" : "0%" }}
            />
          </li>

          <li>
            <Link to="/work">2. Our Work</Link>
            <Line
              transition={{ duration: 0.75 }}
              initial={{ width: "0%" }}
              animate={{ width: pathname === "/work" ? "50%" : "0%" }}
            />
          </li>

          <li>
            <Link to="/contactus">3. Concat Us</Link>
            <Line
              transition={{ duration: 0.75 }}
              initial={{ width: "0%" }}
              animate={{ width: pathname === "/contactus" ? "50%" : "0%" }}
            />
          </li>
        </ul>
      </StyleDNav>
    </motion.div>
  );
};

const StyleDNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 5rem;
  background-color: #282828;
  a {
    text-decoration: none;
    color: white;
  }
  ul {
    list-style-type: none;
    display: flex;
  }
  li {
    padding-left: 4rem;
    position: relative;
  }
  @media (max-width: 1300px) {
    flex-direction: column;
    padding: 2rem 1rem;
    .logo {
      display: inline-block;
      margin: 1rem;
    }
    ul {
      width: 100%;
      justify-content: space-between;
      padding: 2rem;
      li {
        padding: 0;
      }
    }
  }
  h1 {
    font-size: 1.8rem;
    font-weight: lighter;
  }
`;

const Line = styled(motion.div)`
  height: 0.2rem;
  width: 0%;
  background-color: #23d997;
  position: absolute;
  bottom: -30%;
  left: 53%;
  @media (max-width: 1300px) {
    left: 0;
  }
`;

export default Nav;
