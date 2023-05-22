import React from "react";
import { useQuery, gql } from "@apollo/client";

const GET_CONTINENTS = gql`
  query getContinents {
    continents {
      name
      countries {
        code
      }
    }
  }
`;

interface ContinentsProps {
  id: number;
  name: string | undefined;
}

function DisplayContinents() {
  const { loading, error, data } = useQuery(GET_CONTINENTS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  console.log(data);

  return data.continents.map(({ id, name }: ContinentsProps) => (
    <div key={id}>
      <h3>{name}</h3>
    </div>
  ));
}

export default DisplayContinents;
