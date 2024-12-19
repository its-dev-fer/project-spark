import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";

export function RegisterForm() {
  const navigate = useNavigate();


  const [formData, setFormData] = useState({
    name: '',
    email: '',
    // phone: '', // lo comento porque por lo que vi en el back no solicitan este campo
    password: '',
  });

  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);
    setLoading(true);

    try {
      const response = await fetch('http://localhost:3030/user/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.message || 'Error desconocido al registrar el usuario');
      } else {
        const data = await response.json();
        console.log('Registro exitoso:', data);
        setSuccess(true);
        setTimeout(() => {
          navigate('/account');
        }, 2000);
      }
    } catch (err: any) {
      console.error('Error al conectar con la API:', err);
      setError('No se pudo conectar con el servidor');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <form onSubmit={handleSubmit}>
        <div className="space-y-2 text-left">
          <Label htmlFor="name">Nombre completo</Label>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="Juan Pérez"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="space-y-2 text-left">
          <Label htmlFor="email">Correo electrónico</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="correo@ejemplo.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        {/* 
        Se comenta el campo de teléfono, ya que la API no lo solicita.
        <div className="space-y-2 text-left">
          <Label htmlFor="phone">Teléfono</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="555-1234"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        */}
        <div className="space-y-2 text-left">
          <Label htmlFor="password">Contraseña</Label>
          <Input
            id="password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex flex-col gap-2 mt-4">
          <Button type="submit" className="w-auto" disabled={loading}>
            {loading ? 'Creando cuenta...' : 'Crear cuenta'}
          </Button>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          {success && <p className="text-green-500 text-sm">¡Registro exitoso!</p>}
        </div>
      </form>
    </div>
  );
}
