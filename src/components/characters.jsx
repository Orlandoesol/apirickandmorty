import React from "react";

export default function Characters(props) {
    const { characters, setCharacters, currentPage, setCurrentPage, totalPages } = props;

    const resetCharacters = () => {
        setCharacters(null);
        setCurrentPage(1);
    };

    //console.log(characters);
    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
            <div className="characters">
                <h1>Personajes</h1>
                <span className="back-home" onClick={resetCharacters}>
                    Salir
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
                        <div className="pagination">
                            <button onClick={prevPage} disabled={currentPage === 1}>
                                Anterior
                            </button>
                            <span>Pagina {currentPage}</span>
                            <button onClick={nextPage} disabled={currentPage === totalPages}>
                                Siguiente
                            </button>   
                        </div>
                        <span className="back-home" onClick={resetCharacters}>
                        Volver al home
                        </span>
                    </div>
            </div>
    );
}