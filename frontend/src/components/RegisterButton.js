import React from "react";
import { Link } from "react-router-dom";

const RegisterButton = () => {
    return (
        <Link to="/signup">
            <button>
                Register
            </button>
        </Link>
    );
};

export default RegisterButton;
