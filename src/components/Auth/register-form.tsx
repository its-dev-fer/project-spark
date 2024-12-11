import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function RegisterForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '', 
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Register attempt with:', formData);
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Crear una cuenta</CardTitle>
        <CardDescription>
          Únete a nuestra plataforma para acceder a todas las funcionalidades
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="register" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Inicia sesión</TabsTrigger>
            <TabsTrigger value="register">Crea una cuenta</TabsTrigger>
          </TabsList>
          <TabsContent value="login">
            <div className="text-left py-4 text-sm text-muted-foreground">
              ¿Ya tienes una cuenta? Inicia sesión
            </div>
          </TabsContent>
          <TabsContent value="register">
            <form onSubmit={handleSubmit} className="space-y-4">
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
              <div className="flex justify-start mt-4">
                <Button 
                  type="submit" 
                  className="w-auto">
                  Crear cuenta
                </Button>
                </div>
            </form>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
