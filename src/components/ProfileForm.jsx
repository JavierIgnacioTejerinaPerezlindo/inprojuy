import React, { useState, useEffect } from 'react';
import 'firebase/auth';
import 'firebase/firestore';
import { useAuth, AuthProvider } from "../context/AuthContext";
import { db } from "../firebase/firebase.config";
import { doc, setDoc, getDoc, collection, getDocs } from "firebase/firestore";

function UserProfile() {
  const auth = useAuth();
  const usera = auth.id;

  const [userData, setUser] = useState(null);
  const [formValues, setFormValues] = useState({
    nombre: '',
    apellido: '',
    dni: '',
    direccion: '',
    barrio: '',
    localidad: '',
    fechaNacimiento: '',
  });

  useEffect(() => {

    const getUserData = async () => {
      const user = auth.id;
      if (user) {
        const docRef = doc(db, `users/${usera}`);
        const userData = await getDoc(docRef);
        if (userData.exists) {
          setUser(userData.data());
          setFormValues(userData.data());
        }
      }
    };
    getUserData();
  }, []);

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
   
    if (!usera) {
      console.log('Usuario no autenticado');
      return;
    }

    if (formValues.fechaNacimiento) {
      const birthDate = new Date(formValues.fechaNacimiento);
      const ageDiffMs = Date.now() - birthDate.getTime();
      const ageDate = new Date(ageDiffMs);
      const userAge = Math.abs(ageDate.getUTCFullYear() - 1970);
      if (userAge < 18) {
        console.log('El usuario debe ser mayor a 18 años');
        return;
      }
    }
    
    const userData = {
      nombre: formValues.nombre,
      apellido: formValues.apellido,
      dni: formValues.dni,
      direccion: formValues.direccion,
      barrio: formValues.barrio,
      localidad: formValues.localidad,
      fechaNacimiento: formValues.fechaNacimiento,
    };

    try {
      const docRef = doc(db, `users/${usera}`);
      await setDoc(docRef,userData, { merge: true });;
      setUser(userData);
    } catch (error) {
      console.log(error);
    }
  };

  if (!usera) {
    console.log('Usuario no autenticado' + usera + auth.id);
    return <div>Cargando...{usera}</div>;
  }

  return (
    <div>
      <h2>Mi Perfil</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" id="nombre" name="nombre" value={formValues.nombre} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="apellido">Apellido:</label>
          <input type="text" id="apellido" name="apellido" value={formValues.apellido} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="dni">DNI:</label>
          <input type="text" id="dni" name="dni" value={formValues.dni} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="direccion">Dirección:</label>
          <input type="text" id="direccion" name="direccion" value={formValues.direccion} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="barrio">Barrio:</label>
          <input type="text" id="barrio"
            name="barrio" value={formValues.barrio}

            onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="localidad">Localidad:</label>
          <input type="text" id="localidad" name="localidad" value={formValues.localidad} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="fechaNacimiento">Fecha de Nacimiento:</label>
          <input type="date" id="fechaNacimiento" name="fechaNacimiento" value={formValues.fechaNacimiento} onChange={handleChange} />
        </div>
        <button type="submit">Guardar Cambios</button>
      </form>
    </div>
  );

}

export default UserProfile;