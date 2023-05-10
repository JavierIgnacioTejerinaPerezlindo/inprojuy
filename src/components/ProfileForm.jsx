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
    <div className='container fondotransparente text-center form'>
      <h2 className="h1 p-4">Mi Perfil</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label className='p-2 h5' htmlFor="nombre">Nombre:</label>
          <input className='border px-3 py-2 rounded' type="text" id="nombre" name="nombre" value={formValues.nombre} onChange={handleChange} />
        </div>
        <div>
          <label className='p-2 h5' htmlFor="apellido">Apellido:</label>
          <input className='border px-3 py-2 rounded' type="text" id="apellido" name="apellido" value={formValues.apellido} onChange={handleChange} />
        </div>
        <div>
          <label className='p-2 h5' htmlFor="dni">DNI:</label>
          <input className='border px-3 py-2 rounded' type="text" id="dni" name="dni" value={formValues.dni} onChange={handleChange} />
        </div>
        <div>
          <label className='p-2 h5' htmlFor="direccion">Dirección:</label>
          <input className='border px-3 py-2 rounded' type="text" id="direccion" name="direccion" value={formValues.direccion} onChange={handleChange} />
        </div>
        <div>
          <label className='p-2 h5' htmlFor="barrio">Barrio:</label>
          <input className='border px-3 py-2 rounded' type="text" id="barrio"
            name="barrio" value={formValues.barrio}

            onChange={handleChange} />
        </div>
        <div>
          <label className='p-2 h5' htmlFor="localidad">Localidad:</label>
          <input className='border px-3 py-2 rounded' type="text" id="localidad" name="localidad" value={formValues.localidad} onChange={handleChange} />
        </div>
        <div>
          <label className='p-2 h5' htmlFor="fechaNacimiento">Fecha de Nacimiento:</label>
          <input className='border px-3 py-2 rounded' type="date" id="fechaNacimiento" name="fechaNacimiento" value={formValues.fechaNacimiento} onChange={handleChange} />
        </div>
        <button className="btn btn-primary text-white m-4" type="submit">Guardar Cambios</button>
      </form>
    </div>
  );

}

export default UserProfile;