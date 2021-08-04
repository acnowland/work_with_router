import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CharacterCard from "./Item";

const Items = () => {
  const [characters, setCharacters] = useState([]);

  const fetchCharacters = async () => {
    const data = await fetch("https://rickandmortyapi.com/api/character");
    const characters = await data.json();
    setCharacters(characters.results);
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  const createCharacterCards = characters.map((character) => {
    return (
      <Link to={`/items/${character.id}`}>
        <CharacterCard character={character} key={character.id} />
      </Link>
    );
  });

  return <div>{createCharacterCards}</div>;
};

export default Items;
