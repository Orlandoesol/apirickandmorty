import React from 'react';

//componente funcional
function WelcomeFunctional({ name }){
    return <h2>Hola, { name }, Este es un componente funcional.</h2>
}

//componente clase
class WelcomeClass extends React.Component{
    render (){
        return <h2>Hola, { this.props.name }, Este es un componente clase.</h2>
    }
}

function Welcome() {
    return (
        <div>
            <WelcomeFunctional name=" Alumnos G10 del PIO"/>
            <WelcomeClass name="Alumnos G10 del PIO"/>
        </div>
    );
}

export default Welcome;