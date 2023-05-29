import React from "react";
import Form from "../components/Form";
import {useAuth} from "../context/AuthContext"
import Logout from "../components/Logout";
import UserProfile from "../components/ProfileForm";


function Register() {
  const auth = useAuth();
  console.log(auth.user)
  return (
    <div className="container fondotransparente center form" >
      {auth.user.length > 0
      ?<UserProfile/>
      :<Form nameForm="Registrarse" />
      }
    </div>
  );
}

export default Register;