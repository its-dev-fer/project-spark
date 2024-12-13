import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

interface AccountFormData {
  fullName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
}

export function AccountSettingsForm() {
  const { toast } = useToast();
  const [formData, setFormData] = useState<AccountFormData>({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log('Saving changes:', formData);

    toast({
      title: "Cambios guardados",
      description: "Los cambios han sido guardados exitosamente.",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl">
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="fullName">Nombre completo</Label>
          <Input
            id="fullName"
            name="fullName"
            placeholder="Nombre completo"
            value={formData.fullName}
            onChange={handleChange}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Correo electrónico</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Correo electrónico"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Teléfono</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="Teléfono"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <div className="pt-4 border-t">
          <h3 className="text-lg font-medium mb-4">Cambiar contraseña</h3>
          
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="password">Nueva contraseña</Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="Nueva contraseña"
                value={formData.password}
                onChange={handleChange}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirma la nueva contraseña</Label>
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="Confirma la nueva contraseña"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
      </div>

      <Button type="submit" className="w-auto">
        Guardar cambios
      </Button>
    </form>
  );
}
