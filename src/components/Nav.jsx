import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { NavAnimations } from "../Animate";
const Nav = () => {
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
          </li>

          <li>
            <Link to="/work">2. Our Work</Link>
          </li>

          <li>
            <Link to="/contactus">3. Concat Us</Link>
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
  padding: 1rem 10rem;
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
    padding-left: 10rem;
    position: relative;
  }
  h1 {
    font-size: 1.8rem;
    font-weight: lighter;
  }
`;

export default Nav;
