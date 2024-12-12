import React, { useState } from "react";

function Contador(){
    const [contador, setContador] = useState(0);

    return (
        <div>
            <p>Clic's realizados {contador}</p>
            <button onClick={() => setContador(contador + 1)}>CLic Aqui</button>
        </div>
    )
}

export default Contador;