import React from "react";

export default function Characters(props) {
    const { characters, setCharacters } = props;

    const resetCharacters = () => {
        setCharacters(null);
    };

    console.log(characters);

    return (
            <div className="characters">
                <h1>Personajes</h1>
                <span className="back-home" onClick={resetCharacters}>
                    Ir a Home
                </span>
                <div className="characters-container">
                    {characters.map((character, index) => (
                        <div key={index}>
                            <div className="characters-container">
                                <img src={character.image} alt={characters.name}/>
                            </div>
                        <div>
                            <h3>{character.name}</h3>
                            <h6>
                                {character.status === "Alive" ? (
                                    <>
                                    <span className="alive" />
                                        Alive
                                        </>
                                        ) : (
                                        <>
                                        <span className="dead"/>
                                        Dead
                                        </>
                                    )}
                            </h6>
                            <p>
                                <span className="text-grey">Episodios: </span>
                                <span>{character.episode.length}</span>
                            </p>
                            <p>
                                <span className="text-grey">Especie: </span>
                                <span>{character.species}</span>
                            </p>
                            </div>
                            </div>
                        ))}
            </div>
            <span className="back-home" onClick={resetCharacters}>
                Volver al home
            </span>
            </div>
    );
}