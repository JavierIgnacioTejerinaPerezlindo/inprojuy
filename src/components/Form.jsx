import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

function Form({ nameForm }) {
  const [viewPassword, setViewPassword] = useState("password");
  const [email, setEmail] = useState("");
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [secondPassword, setSecondPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const auth = useAuth();
  const error = auth.error;

  const validatePassword = () => {
    if (password.length < 6) {
      setPasswordError("La contraseña debe tener al menos 6 caracteres");
      return false;
    }
    // Agrega otras restricciones de validación de la contraseña aquí según tus necesidades
    return true;
  };

  const handlerAuth = (e) => {
    e.preventDefault();
    if (nameForm === "Ingresar") {
      try {
        auth.login(email, password);
      } catch (error) {
        console.error(error);
      }
    } else if (nameForm === "Registrarse") {
      try {
        if (password === secondPassword && validatePassword()) {
          console.log("por entrar" + user + email + password);
          auth.register(user, email, password);
        }
      } catch (error) {
        console.error(error + "hola");
      }
    }
  };

  const googleButton = async (e) => {
    try {
      await auth.googleAuth();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <center>
      <div className="">
        <div className="">
          {error && (
            <div className="text-center">
              <div className="text-danger p-2">
                {error && nameForm === "Registrarse" ? (
                  <a>Error al Registrarse</a>
                ) : (
                  <a>Error de Credenciales</a>
                )}
              </div>
            </div>
          )}
          <div>
            <center>
              <img
                className=""
                src="./img/inprojuylogo1.png"
                alt="INPROJUY"
              />
            </center>
            <h2 className="p-3">{nameForm}</h2>
          </div>
          <form
            className=""
            action="#"
            method="POST"
            onSubmit={(e) => handlerAuth(e)}
          >
            <input type="hidden" name="remember" defaultValue="true" />
            {nameForm === "Registrarse" && (
              <div className="form-row col-6">
                <label htmlFor="user" className="p-2 h5">
                  Usuario
                </label>
                <input
                  onChange={(e) => setUser(e.target.value)}
                  id="user"
                  name="user"
                  type="text"
                  autoComplete=""
                  required
                  className="border px-3 py-2 rounded placeholder-gray-500"
                  placeholder="Nombre de Usuario"
                />
              </div>
            )}
            <div className="form-row col-6">
              <label htmlFor="email-address" className="p-2 h5">
                E-mail
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="border px-3 py-2 rounded placeholder-gray-500"
                placeholder="Ingrese e-mail"
              />
            </div>
            <div className="form-row col-6">
              <label htmlFor="password" className="p-2 h5">
                Contraseña
              </label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                id="password"
                name="password"
                type={viewPassword}
                autoComplete="current-password"
                required
                className="border px-3 py-2 rounded placeholder-gray-500"
                placeholder="Contraseña"
              />
            </div>
            {nameForm === "Registrarse" && (
              <div className="form-row">
                <label htmlFor="confirm-password" className="p-2 h5">
                  Ingrese su contraseña nuevamente
                </label>
                <input
                  onChange={(e) => setSecondPassword(e.target.value)}
                  id="confirm-password"
                  name="confirm-password"
                  type={viewPassword}
                  autoComplete="current-password"
                  required
                  className="border px-3 py-2 rounded placeholder-gray-500"
                  placeholder="Repita su contraseña"
                />
              </div>
            )}
            <div className="flex items-center justify-between flex-col">
              <div className="flex items-center">
                <input
                  onChange={() =>
                    setViewPassword(
                      viewPassword === "password" ? "text" : "password"
                    )
                  }
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className=""
                />
                <label htmlFor="remember-me" className="p-2">
                  Mostrar contraseña
                </label>
              </div>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  <Link to="/reset">Olvidaste tu contraseña?</Link>
                </a>
              </div>
            </div>
            <div className="p-2 m-4">
              <button
                type="submit"
                className={`group relative ${
                  password !== secondPassword ? "bg-gray-600" : "bg-indigo-600"
                } btn btn-primary text-white m-4`}
              >
                {nameForm}
              </button>
              <button
                className="btn btn-light bg-light m-4"
                onClick={() => {
                  googleButton();
                }}
              >
                {nameForm === "Registrarse" ? (
                  <Link to="/login">
                    <FcGoogle className="h-5 w-5 animate-bounce" />Registrarse
                    con Google
                  </Link>
                ) : (
                  <>
                    <FcGoogle className="h-5 w-5 animate-bounce" />Ingresar con
                    Google
                  </>
                )}
              </button>
              {nameForm !== "Registrarse" && (
                <Link className="text-white btn btn-primary" to="/register">
                  Registrarse
                </Link>
              )}
            </div>
            {passwordError && <p className="text-danger">{passwordError}</p>}
          </form>
        </div>
      </div>
    </center>
  );
}

export default Form;
