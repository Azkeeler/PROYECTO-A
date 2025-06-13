import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App.jsx'
import './index.css'

// 1. Importa los estilos y el proveedor de Mantine
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* 2. Envuelve la aplicación con el MantineProvider */}
        <MantineProvider>
            <App />
        </MantineProvider>
    </React.StrictMode>,
)