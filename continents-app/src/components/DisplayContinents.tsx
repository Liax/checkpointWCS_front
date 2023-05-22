import React from "react";
import { useQuery, gql } from "@apollo/client";
import Continent from "./Continent";
import { useNavigate } from "react-router-dom";

const GET_CONTINENTS = gql`
  query getContinents {
    continents {
      name
      code
      countries {
        code
      }
    }
  }
`;

export interface Continents {
  code: string;
  name: string;
}

function DisplayContinents() {
  const { loading, error, data } = useQuery(GET_CONTINENTS);
  const navigate = useNavigate();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <div>
      <h2>Continents</h2>
      <div className="grid">
        {data.continents.map(({ code, name }: Continents) => (
          <div
            className="grid__item"
            key={code}
            onClick={() => navigate(`/${code}`)}
          >
            {name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default DisplayContinents;
