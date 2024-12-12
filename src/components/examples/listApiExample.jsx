import React, { useState, useEffect }from 'react'

function FetchDataApi() {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character')
        .then(response => response.json())
        .then(data => {setData(data.results)})
    }, []);
    
    return (
        <div>
        <h1>API</h1>
        {/* <ul>{data ? JSON.stringify(data) : 'Loading...'}</ul> */}
        <table>
        <ol>
            {data.map((character) => (
                <li key={character.name}>
                    {character.species}
                </li>
            ))}
        </ol>
            </table>
        </div>
    )
}
export default FetchDataApi