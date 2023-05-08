import React from "react";
import Form from "../components/Form";
import { useAuth } from "../context/AuthContext";
import Logout from "../components/Logout";


function Login() {
  const auth = useAuth();
  return (
    <div className="container fondotransparente center form">
      {auth.user.length > 0 ? <Logout /> : <Form nameForm="Ingresar" />}
    </div>
  );
}

export default Login;