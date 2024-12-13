import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card"; 
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RegisterForm } from './register-form'; 

export function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login attempt with:', { email, password });
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <Card className="w-full max-w-md">
        <CardContent>
          <Tabs defaultValue="login" className="w-full">
           
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="login">Inicia sesión</TabsTrigger>
              <TabsTrigger value="register">Crea una cuenta</TabsTrigger>
            </TabsList>

         
            <TabsContent value="login">
              <h2 className="text-center text-2xl font-semibold mb-4">Bienvenido de nuevo</h2>
              <p className="text-center text-sm text-gray-600 mb-6">Ingresa tus credenciales para acceder a tu cuenta</p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2 text-left">
                  <Label htmlFor="email">Correo</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="correo@ejemplo.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2 text-left">
                  <Label htmlFor="password">Contraseña</Label>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="flex justify-start mt-4">
                  <Button type="submit" className="w-auto">
                    Iniciar sesión
                  </Button>
                </div>
              </form>
            </TabsContent>

           
            <TabsContent value="register">
              <RegisterForm /> 
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
