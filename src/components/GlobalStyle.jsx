import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    @media(max-width : 1700px) {
        font-size: 75%;
    }
}

body{
    background-color: #1b1b1b;
}

button{
    font-weight: bold;
    font-size: 1.1rem;
    cursor: pointer;
    background: transparent;
    border: 3px solid #23d997;
    padding: 1rem 2rem;
    color: white;
    transition: all 0.5s ease;
    &:hover {
        content: "";
        background-color: #23d997;
        color: white;
    }
}
h2{
    font-weight: lighter;
    font-size: 4rem;
}
h3{
    color: white;
}
p{
    padding: 3rem 0rem;
    color: #ccc;
    font-size: 1.4rem;
    line-height: 150%;
}
a {
    font-size: 1.1rem;
}
span {
    color: #23d997;
}
h4 {
    font-weight: bold;
    color: #33d8d8;
    font-size: 1.5rem;
}
`;

export default GlobalStyle;
