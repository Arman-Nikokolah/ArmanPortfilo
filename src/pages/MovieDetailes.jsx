import React, { useState, useEffect, Fragment } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { MovieState } from "../movieState";

const MovieDetailes = () => {
  const location = useLocation();
  const url = location.pathname;
  const [movies, setMovies] = useState(MovieState);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const current = movies.filter((e) => e.url === url);
    setMovie(current[0]);
  }, [movies, url]);

  return (
    <>
      {movie && (
        <Detailes>
          <Hading>
            <h2>{movie.title}</h2>
            <img src={movie.mainImg} alt="check" />
          </Hading>
          <Awards>
            {movie.awards.map((items) => (
              <Award
                title={items.title}
                description={items.description}
                key={items.title}
              />
            ))}
          </Awards>
          <ImageAwards>
            <img src={movie.secondaryImg} alt="" />
          </ImageAwards>
        </Detailes>
      )}
    </>
  );
};

const Detailes = styled.div`
  color: white;
`;
const Hading = styled.div`
  min-height: 90vh;
  padding-top: 30vh;
  position: relative;

  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;

const Awards = styled.div`
  min-height: 80vh;
  padding: 5% 5% 5% 5%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Awarding = styled.div`
  padding-left: 2rem;
  h3 {
    font-size: 1.5rem;
  }
  .line {
    width: 50%;
    height: 0.2rem;
    background-color: #23d997;
    margin: 1rem 0rem;
  }
`;

const ImageAwards = styled.div`
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;

const Award = ({ title, description }) => {
  return (
    <Awarding>
      <h3>{title}</h3>
      <div className="line"></div>
      <p className="p">{description}</p>
    </Awarding>
  );
};

export default MovieDetailes;
