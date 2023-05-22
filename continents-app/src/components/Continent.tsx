import { gql, useQuery } from "@apollo/client";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";

interface ContinentType {
  name: string;
  code: string;
  emoji: string;
}

const GET_CONTINENT = gql`
  query GetContinent($code: ID!) {
    continent(code: $code) {
      name
      countries {
        code
        name
        emoji
      }
    }
  }
`;

function Continent() {
  let { continentCode } = useParams();
  const navigate = useNavigate();
  const { loading, error, data } = useQuery(GET_CONTINENT, {
    variables: { code: continentCode },
  });
  console.log(data);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <div className="grid">
      {data.continent.countries.map(({ name, code, emoji }: ContinentType) => (
        <div className="grid__item">
          <h3 onClick={() => navigate(`/${continentCode}/${code}`)}>{name}</h3>
          <p>{emoji}</p>
        </div>
      ))}
    </div>
  );
}

export default Continent;
