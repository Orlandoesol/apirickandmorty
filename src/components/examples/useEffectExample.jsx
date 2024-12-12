import React, { useState, useEffect } from "react";

function FetchData(){
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('htpps://api.example/data')
        // fetch('https://api.agify.io?name=michael')
        //fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then(respose => respose.json())
        .then(data => setData(data))
    }, []);
    return <div>{data ? JSON.stringify(data) : 'Loading...'}</div>
}


export default FetchData;