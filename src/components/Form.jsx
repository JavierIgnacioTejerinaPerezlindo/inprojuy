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
    const auth = useAuth();
    const error = auth.error;

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
                if (password === secondPassword) {
                    auth.register(user, email, password);
                }
            } catch (error) {
                console.error(error);
            }
        }
    };
    const googleButton = (e) => {
        try {
            auth.googleAuth();
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <center>
        <div className="">
            <div className="">
                {error && (
                    <div className="text-sm text-center">
                        <div
                            className="font-medium text-red-600 hover:text-indigo-500"
                        >
                            {error && nameForm === "Registrarse" ? (
                                <a>Email ya registrado</a>
                            ) : (
                                <a>Error de Credenciales</a>
                            )}
                        </div>
                    </div>
                )}
                <div>
                    <center><img
                        className=""
                        src="./img/inprojuylogo1.png"
                        alt="INPROJUY"
                    />
                    </center>
                    <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                        {nameForm}
                    </h2>
                </div>
                <form
                    className=""
                    action="#"
                    method="POST"
                    onSubmit={(e) => handlerAuth(e)}
                >
                    <input type="hidden" name="remember" defaultValue="true" />
                    <div className="  ">
                        {nameForm === "Registrarse" ?
                            <div class="form-row col-6"  >
                                <div class="form-col">
                                    <label htmlFor="user" className="sr-only">
                                        Username
                                    </label>
                                </div>
                                <div class="form-col">
                                    <input
                                        onChange={(e) => setUser(e.target.value)}
                                        id="user"
                                        name="user"
                                        type="text"
                                        autoComplete=""
                                        required
                                        className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                        placeholder="Nombre de Usuario"
                                    />
                                </div>
                            </div>
                            : <></>}
                        <div class="form-row col-6" >
                        <div class="form-col">
                            <label htmlFor="email-address" className="sr-only form-col">
                                E-mail 
                            </label>
                            </div>
                            <input
                                onChange={(e) => setEmail(e.target.value)}
                                id="email-address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                placeholder="Ingrese e-mail "
                            />
                        </div>
                        <div class="form-row col-6" >
                            <div class="form-col">
                            <label htmlFor="password" className="sr-only">
                                Password
                            </label>
                            </div>
                            <input
                                onChange={(e) => setPassword(e.target.value)}
                                id="password"
                                name="password"
                                type={viewPassword}
                                autoComplete="current-password"
                                required
                                className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                placeholder="Password"
                            />
                        </div>
                        {nameForm === "Registrarse" ? (
                            <div class="form-row">
                                <div class="form-col">
                                <label htmlFor="password" className="sr-only">
                                    Ingrese su password nuevamente
                                </label>
                                </div>
                                <input
                                    onChange={(e) => setSecondPassword(e.target.value)}
                                    id="password"
                                    name="password"
                                    type={viewPassword}
                                    autoComplete="current-password"
                                    required
                                    className="relative block w-full appearance-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                    placeholder="Repeat your password"
                                />
                            </div>
                        ) : (
                            <></>
                        )}
                    </div>
                    <div className="flex items-center justify-between flex-col">
                        <div className="flex items-center">
                            <input
                                onChange={() =>
                                    viewPassword === "password"
                                        ? setViewPassword("text")
                                        : setViewPassword("password")
                                }
                                id="remember-me"
                                name="remember-me"
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            <label
                                htmlFor="remember-me"
                                className="ml-2 block text-sm text-gray-900"
                            >
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
                            className={`group relative ${password !== secondPassword ? "bg-gray-600" : "bg-indigo-600"
                                } btn btn-primary m-4`}
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
                                    <FcGoogle className="h-5 w-5 animate-bounce" />Registrarse con Google
                                </Link>
                            ) : (
                                <>
                                    <FcGoogle className="h-5 w-5 animate-bounce" />Ingresar con Google
                                </>
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
        </center>
    );
}

export default Form;