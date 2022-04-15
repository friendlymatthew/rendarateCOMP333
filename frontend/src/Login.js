import React from "react";
import AccountForm from "./components/AccountForm";

const Login = () => {
    return (
        <div className="grid-cols-1 min-h-screen bg-slate-800">
            <div className="text-3xl font-bold text-center text-white pt-20 pb-2">
                Login
            </div>
            <AccountForm formType = { "login" }/>
        </div>
    );
};

export default Login;
