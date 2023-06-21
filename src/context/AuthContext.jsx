import { createContext, useContext, useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  sendPasswordResetEmail,
} from "firebase/auth";
import { doc, setDoc, getDoc, collection, getDocs } from "firebase/firestore";
import { auth, db } from "../firebase/firebase.config";
import { BrowserRouter as Router, Link, useNavigate } from "react-router-dom";
const authContext = createContext();

/**
 * If the context is not passed, throw an error, otherwise return the context. */
export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) {
    throw new Error("No me pasaste el context ,crack");
  } else {
    return context;
  }
};

export function AuthProvider({ children }) {
  const [error, setError] = useState("");
  const [user, setUser] = useState("");
  const [firestore, setFirestore] = useState("");
  const [userName, setUserName] = useState("");
  const [id, setId] = useState("");
  useEffect(() => {
    const userSession = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        setUser("");
      } else {
        setUser(currentUser.email);
        setUserName(currentUser.displayName);
        setId(currentUser.uid);
        
      }
    });
    return () => userSession();
  }, []);

  const register = async (username, email, password, rol = "user") => {
    console.log('antes del try ' + username);

    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = response.user.email;
      console.log('hhhh ' + username);
      const docRef = doc(db, `users/${response.user.uid}`);
      setDoc(docRef, {
        username: username,
        email: email,
        rol: rol,
        id: response.user.uid
      });
      setError("");
      <Link to={'/'} />;
    } catch (error) {
      setError(error.message);
      console.log('error ' + error.message);

    }
  };
  const registerg = async (email, rol = "user") => {


    console.log('hhhh ' + id);
    const docRef = doc(db, `users/${id}`);
    setDoc(docRef, {
      nombre: "",
      apellido: "",
      dni: "",
      telefono: "",
      direccion: "",
      Barrio: "",
      Localidad: "",
      fechaNacimiento: "",
      email: email,
      rol: rol,
      id: id
    });
    setError("");
    <Link to={'/'} />;

  };
  async function getRole(uid) {
    const docRef = doc(db, `users/${uid}`);
    const data = await getDoc(docRef);
    const dataRole = data.data();
    localStorage.setItem("role", dataRole.rol || "user");
    localStorage.setItem("username", dataRole.username);
  }


  async function setRoleDb(uid, admin) {
    const docRef = doc(db, `users/${uid}`);
    setDoc(
      docRef,
      {
        rol: admin,
      },
      { merge: true }
    );
  }
  const login = async (email, password) => {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      getRole(response.user.uid);
      setError("");
      <Link className="navbar-brand" to={'/'} />;
    } catch (error) {
      setError(error.message);
    }
  };
  const googleAuth = async () => {
    const google = new GoogleAuthProvider();
    const response = await signInWithPopup(auth, google);
    console.log(response.user.email);
    console.log(response.user.uid);
  
    const user = response.user;
  
    // Verificar si ya existe un documento con el ID de usuario
    const docRef = doc(db, `users/${user.uid}`);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      console.log('El documento ya existe. No se creará uno nuevo.');
      return; // Salir de la función si el documento ya existe
    }
  
    // Crear un nuevo documento solo si no existe
    await setDoc(docRef, {
      nombre: "",
      apellido: "",
      dni: "",
      telefono: "",
      direccion: "",
      Barrio: "",
      email: user.email,
      Localidad: "",
      fechaNacimiento: "",
      rol: "user",
      id: user.uid
    });
  
    setError("");



    <Link className="navbar-brand" to={'/'} />;
  };
  const logout = async () => {
    localStorage.removeItem("role");
    localStorage.removeItem("username");
    const response = await signOut(auth);
    console.log(response);
    setUser("");
  };
  const resetPassword = async (email) => {
    try {
      const response = await sendPasswordResetEmail(auth, email);
      const user = response.user;
      console.log(user);
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };
  const getAllUsers = async () => {
    const data = await getDocs(collection(db, "users"));

  }
  return (
    <authContext.Provider
      value={{
        register,
        registerg,
        login,
        error,
        user,
        userName,
        googleAuth,
        
        logout,
        resetPassword,
        setRoleDb,
        id,
        getAllUsers
      }}
    >
      {children}
    </authContext.Provider>
  );
}
