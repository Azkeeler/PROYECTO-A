import { useState } from 'react';
import { TextInput, PasswordInput, Button, Paper, Title, Container, Alert } from '@mantine/core';
import { supabase } from '../../services/supabaseClient'; // Importamos nuestro cliente

export function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleLogin = async (event) => {
    event.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });

      if (error) {
        // Si Supabase devuelve un error, lo mostramos
        console.error('Error de Supabase:', error.message);
        setError(error.message);
      } else {
        // Si el login es exitoso
        console.log('Login exitoso:', data);
        // TODO: Redirigir al dashboard
      }
    } catch (error) {
      console.error('Error inesperado:', error.message);
      setError('Ha ocurrido un error inesperado.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container size={420} my={40}>
      <Title ta="center">
        ¡Bienvenido de nuevo!
      </Title>

      <form onSubmit={handleLogin}>
        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          {error && (
            <Alert title="Error de autenticación" color="red" withCloseButton onClose={() => setError(null)}>
              {error}
            </Alert>
          )}

          <TextInput 
            label="Email" 
            placeholder="tu@email.com" 
            required 
            value={email}
            onChange={(event) => setEmail(event.currentTarget.value)}
            mt="md"
          />
          <PasswordInput 
            label="Contraseña" 
            placeholder="Tu contraseña" 
            required 
            mt="md"
            value={password}
            onChange={(event) => setPassword(event.currentTarget.value)}
          />
          <Button type="submit" fullWidth mt="xl" loading={loading}>
            Iniciar Sesión
          </Button>
        </Paper>
      </form>
    </Container>
  );
}