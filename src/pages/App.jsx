import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LoginPage } from './auth/LoginPage'; // Importamos nuestra nueva página

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Ruta principal que redirige al login */}
        <Route path="/" element={<Navigate to="/login" />} />

        {/* Ruta para la página de login */}
        <Route path="/login" element={<LoginPage />} />

        {/* Aquí añadiremos más rutas en el futuro (ej: /dashboard) */}
      </Routes>
    </BrowserRouter>
  )
}

export default App;