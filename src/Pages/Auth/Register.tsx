import { AuthLayout } from '@/components/auth/auth-layout';
import { RegisterForm } from '@/components/auth/register-form';

export default function Register() {
  return (
    <AuthLayout>
      <RegisterForm />
    </AuthLayout>
  );
}