import React, { useState, useEffect } from 'react';
import 'firebase/auth';
import 'firebase/firestore';
import { useAuth, AuthProvider } from "../context/AuthContext";
import { db } from "../firebase/firebase.config";
import { doc, setDoc, getDoc, collection, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { Modal, Button } from 'react-bootstrap';


function UserProfile() {
  const auth = useAuth();
  const usera = auth.id;
  const navigate = useNavigate();

  const [userData, setUser] = useState(null);
  const [formValues, setFormValues] = useState({
    nombre: '',
    apellido: '',
    dni: '',
    direccion: '',
    barrio: '',
    localidad: '',
    email: '',
    telefono: '',
    fechaNacimiento: new Date().toLocaleDateString('es-AR'),
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const getUserData = async () => {
      const user = auth.id;
      if (user) {
        const docRef = doc(db, `users/${usera}`);
        const userData = await getDoc(docRef);
        if (userData.exists()) {
          setUser(userData.data());
          setFormValues(userData.data());
        } else {
          const usersRef = collection(db, 'users');
          const querySnapshot = await getDocs(usersRef);
          let usersData = [];
          querySnapshot.forEach(doc => {
            const user = doc.data();
            if (user.id === auth.id) {
              usersData.push(user);
            }
          });
          if (usersData.length === 0) {
            const newUser = {
              id: auth.id,
              nombre: '',
              apellido: '',
              dni: '',
              direccion: '',
              email: '',
              barrio: '',
              localidad: '',
              telefono: '',
              fechaNacimiento: new Date().toLocaleDateString('es-AR'),
            };
            await setDoc(doc(db, `users/${usera}`), newUser);
            setUser(newUser);
            setFormValues(newUser);
          }
        }
      }
    };
    getUserData();
  }, []);

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleCloseModal = () => {
    setShowModal(false);
    navigate('/login');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!usera) {
      console.log('Usuario no autenticado');
      return;
    }

    if (!formValues.nombre || !formValues.apellido || !formValues.dni || !formValues.direccion || !formValues.barrio || !formValues.localidad || !formValues.email || !formValues.telefono || !formValues.fechaNacimiento) {
      setErrorMessage('Por favor completa todos los campos');
      return;
    }

    if (formValues.fechaNacimiento) {
      const birthDate = new Date(formValues.fechaNacimiento);
      const ageDiffMs = Date.now() - birthDate.getTime();
      const ageDate = new Date(ageDiffMs);
      const userAge = Math.abs(ageDate.getUTCFullYear() - 1970);
      if (userAge < 18) {
        setErrorMessage('Debes ser mayor de 18 años');
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
      email: formValues.email,
      telefono: formValues.telefono,
      fechaNacimiento: formValues.fechaNacimiento,
    };

    try {
      const docRef = doc(db, `users/${usera}`);
      await setDoc(docRef, userData, { merge: true });
      setUser(userData);
      setSuccessMessage('Cambios guardados correctamente');
      setErrorMessage('');
      setShowModal(true); // Mostrar el modal de éxito
    } catch (error) {
      setErrorMessage('Error al guardar los cambios');
      console.log(error);
    }
  };

  if (!usera) {
    console.log('Usuario no autenticado' + usera + auth.id);

    return <div>Cargando...{usera}</div>
  }

  return (
    <div className="container">
      <h2 className="h1 text-center p-4">Mi Perfil</h2>
      <form onSubmit={handleSubmit} className="container fondotransparente form text-center">
        <div className="form-group">
          <label htmlFor="nombre" className="h5">Nombre:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formValues.nombre}
            onChange={handleChange}
            className="form-control col-6"
          />
        </div>
        <div className="form-group">
          <label htmlFor="apellido" className="h5">Apellido:</label>
          <input
            type="text"
            id="apellido"
            name="apellido"
            value={formValues.apellido}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="dni" className="h5">DNI:</label>
          <input
            type="text"
            id="dni"
            name="dni"
            value={formValues.dni}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="h5">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="direccion" className="h5">Dirección:</label>
          <input
            type="text"
            id="direccion"
            name="direccion"
            value={formValues.direccion}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="barrio" className="h5">Barrio:</label>
          <input
            type="text"
            id="barrio"
            name="barrio"
            value={formValues.barrio}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="localidad" className="h5">Localidad:</label>
          <input
            type="text"
            id="localidad"
            name="localidad"
            value={formValues.localidad}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="telefono" className="h5">Teléfono:</label>
          <input
            type="text"
            id="telefono"
            name="telefono"
            value={formValues.telefono}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="fechaNacimiento" className="h5">Fecha de Nacimiento:</label>
          <input
            type="date"
            id="fechaNacimiento"
            name="fechaNacimiento"
            value={formValues.fechaNacimiento}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        {errorMessage && <div className="text-danger">{errorMessage}</div>}
        {successMessage && <div className="text-success">{successMessage}</div>}
        <button type="submit" className="btn btn-primary mt-4">Guardar Cambios</button>
      </form>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Éxito</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Los cambios se han guardado correctamente.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleCloseModal}>Aceptar</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default UserProfile;
