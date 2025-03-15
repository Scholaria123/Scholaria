import React, { useState } from "react";
import LoginForm from "./pages/Login"
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (email, password) => {
    // Simulación de autenticación (cambiar por Firebase u otro servicio)
    if (email === "admin@scholaria.com" && password === "123456") {
      setUser({ email });
    } else {
      alert("Correo o contraseña incorrectos.");
    }
  };

  return (
    <div className="App">
      {user ? (
        <h2>Bienvenido, {user.email}</h2> // Aquí podrías redirigir a otro componente
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
