import {Link} from "react-router-dom";
import React from "react";

const NotFound404 = () => {
    return (
        <div>
            <h1>404 - Not Found </h1>
            <h3><Link to="/">Go Home</Link></h3>
        </div>
    )
}

export default NotFound404;
