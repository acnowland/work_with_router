import { useState, useEffect } from "react";

const DetailedView = ({ match }) => {
  const charID = match.params.id;
  const [character, setCharacter] = useState({});

  const fetchCurrentCharacter = async () => {
    const data = await fetch(
      `https://rickandmortyapi.com/api/character/${charID}`
    );
    const character = await data.json();
    setCharacter(character);
  };

  useEffect(() => {
    fetchCurrentCharacter();
  }, []);

  return (
    <div>
      <h1>{character.name}</h1>
    </div>
  );
};

export default DetailedView;
