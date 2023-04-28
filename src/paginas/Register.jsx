import React from "react";
import Form from "../components/Form";
import {useAuth} from "../context/AuthContext"
import Logout from "../components/Logout";


function Register() {
  const auth = useAuth();
  console.log(auth.user)
  return (
    <div className="container fondotransparente center">
      {auth.user.length > 0
      ?<Logout/>
      :<Form nameForm="Registrarse" />
      }
    </div>
  );
}

export default Register;