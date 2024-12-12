import React, { useState } from "react";

function Boton(){
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!clicked);
    };
    return <button onClick={handleClick}>{clicked ? "Clicked" : "Not Clicked"}</button>;
}

export default Boton;