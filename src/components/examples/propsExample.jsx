import React from "react";

function Greet({name}){
    return <h3>Componente, { name } </h3>;
}

function PropsExample() {
    return < Greet name="Props" />;
}

export default PropsExample;