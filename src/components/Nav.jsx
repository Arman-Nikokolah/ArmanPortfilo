import React from "react";
import { styled } from "styled-components";

const Nav = () => {
  return (
    <div>
      <styleDNav>
        <h1>
          <a href="#" className="logo">
            Portfilo
          </a>
        </h1>

        <ul>
          <li>
            <a href="#">1. About Us</a>
          </li>

          <li>
            <a href="#">2. Our Work</a>
          </li>

          <li>
            <a href="#">3. Concat Us</a>
          </li>
        </ul>
      </styleDNav>
    </div>
  );
};

const styleDNav = styled.nav`
  min-height: 90vh;
  display: flex;
  margin: auto;
  justify-content: center;
`;

export default Nav;
