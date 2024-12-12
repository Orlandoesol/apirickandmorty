import React, { useState } from "react";

function Login(){
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div>
            {isLoggedIn ? <h2>Welcome!</h2> : <button onClick={() => setIsLoggedIn(true)}>Login</button>}
        </div>
    );
}

export default Login;